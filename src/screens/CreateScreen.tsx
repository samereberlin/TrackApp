import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ImagePickerResponse} from 'react-native-image-picker';

import {colors} from '../utils/theme';
import {
  checkFormData,
  checkUsedDates,
  formatDateForm,
  formatWeightForm,
} from '../utils/helpers';
import Container from '../components/Container';
import {saveService} from '../utils/services';
import FormGroup from '../components/FormGroup';
import Header from '../components/Header';
import PicturePicker from '../components/PicturePicker';
import PictureViewer from '../components/PictureViewer';
import {RootStackParamList, SaveServiceParamsType} from '../types';
import SaveButton from '../components/SaveButton';

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

  const saveButtonCB = () => {
    try {
      checkFormData(date, weight);
    } catch (error) {
      Alert.alert('Invalid form data:', error.message, [{text: 'OK'}]);
      return;
    }
    setIsSaving(true);
    const saveServiceParams: SaveServiceParamsType = {
      pictureInfo,
      // TODO: add mutation reference here.
    };
    saveService(saveServiceParams)
      .then(() => navigation.goBack())
      .catch((error) => {
        Alert.alert('Error while saving:', error, [{text: 'OK'}]);
      })
      .finally(() => setIsSaving(false));
  };

  return (
    <Container>
      <Header
        label="Create Measurement"
        buttonCallback={() => navigation.goBack()}
      />
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
