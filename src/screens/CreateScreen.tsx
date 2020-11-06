import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {ImagePickerResponse} from 'react-native-image-picker';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useMutation} from '@apollo/client';

import {
  checkFormDate,
  checkUsedDates,
  formatDateForm,
  formatWeightForm,
} from '../utils/helpers';
import {colors} from '../utils/theme';
import Container from '../components/Container';
import FormGroup from '../components/FormGroup';
import Header from '../components/Header';
import PicturePicker from '../components/PicturePicker';
import PictureViewer from '../components/PictureViewer';
import {RootStackParamList, SaveServiceParamsType} from '../types';
import SaveButton from '../components/SaveButton';
import {saveService} from '../utils/services';
import {CREATE_MEASUREMENT, UPLOAD_PHOTO} from '../graphql/mutations';

const styles = StyleSheet.create({
  emptySpace: {flex: 1} as ViewStyle,
  formContainer: {flex: 1} as ViewStyle,
  savingIndicator: {
    backgroundColor: colors.overlayProcessing,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  } as ViewStyle,
});

export interface CreateScreenProps {
  navigation: StackNavigationProp<any>;
  route: RouteProp<RootStackParamList, 'CreateScreen'>;
}

const CreateScreen: React.FC<CreateScreenProps> = ({navigation, route}) => {
  const [date, setDate] = useState('');
  const [weight, setWeight] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [pictureInfo, setPictureInfo] = useState<
    ImagePickerResponse | undefined
  >();

  const [measurementMutation] = useMutation(CREATE_MEASUREMENT, {
    refetchQueries: ['GetMeasurements'],
  });
  const [uploadPhotoMutation] = useMutation(UPLOAD_PHOTO);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        onCloseCB();
        return true;
      },
    );
    return () => backHandler.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, weight, pictureInfo]);

  const onChangeDate = (text: string) => {
    try {
      const dateForm = formatDateForm(text);
      setDate(dateForm);
      if (dateForm.length === 8 && route.params.usedDates.length) {
        checkUsedDates(dateForm, route.params.usedDates);
      }
    } catch (error) {
      setDate(text);
      Alert.alert(
        'Invalid date',
        error.message,
        [{text: 'OK', onPress: () => setDate('')}],
        {cancelable: false},
      );
    }
  };

  const onChangeWeight = (text: string) => {
    try {
      const weightForm = formatWeightForm(text);
      setWeight(weightForm);
    } catch (error) {
      setWeight(text);
      Alert.alert(
        'Invalid weight',
        error.message,
        [{text: 'OK', onPress: () => setWeight('')}],
        {cancelable: false},
      );
    }
  };

  const onCloseCB = () => {
    if (date || weight || pictureInfo) {
      Alert.alert(
        'Confirm close:',
        'Are you sure you want to discard this measurement?',
        [{text: 'OK', onPress: () => navigation.goBack()}, {text: 'Cancel'}],
      );
    } else {
      navigation.goBack();
    }
  };

  const saveButtonCB = () => {
    try {
      checkFormDate(date, weight);
    } catch (error) {
      Alert.alert('Invalid form data:', error.message, [{text: 'OK'}]);
      return;
    }
    setIsSaving(true);
    const saveServiceParams: SaveServiceParamsType = {
      measurementMutation,
      uploadPhotoMutation,
      pictureInfo,
      weightString: weight,
      dateString: date,
    };
    saveService(saveServiceParams)
      .then(() => navigation.goBack())
      .catch((error) => {
        setIsSaving(false);
        Alert.alert('Error while saving:', error, [{text: 'OK'}]);
      });
  };

  return (
    <Container>
      <Header label="Create Measurement" buttonCallback={onCloseCB} />
      <ScrollView contentContainerStyle={styles.formContainer}>
        <FormGroup
          autoFocus={true}
          keyboardType="number-pad"
          label="Measurement date"
          maxLength={8}
          onChangeText={onChangeDate}
          placeholder="MM/DD/YY"
          value={date}
        />
        <FormGroup
          keyboardType="decimal-pad"
          label="Weight"
          maxLength={6}
          onChangeText={onChangeWeight}
          placeholder="Your weight, kg"
          value={weight}
        />
        {pictureInfo ? (
          <PictureViewer
            disabled={isSaving}
            onDeleted={() => setPictureInfo(undefined)}
            pictureInfo={pictureInfo}
          />
        ) : (
          <PicturePicker
            disabled={isSaving}
            onPicked={(resp: ImagePickerResponse) => setPictureInfo(resp)}
          />
        )}
        <View style={styles.emptySpace} />
        <SaveButton disabled={isSaving} onPress={saveButtonCB} />
      </ScrollView>
      {isSaving && (
        <ActivityIndicator
          color={colors.buttonBackground}
          size="large"
          style={styles.savingIndicator}
        />
      )}
    </Container>
  );
};

export default CreateScreen;
