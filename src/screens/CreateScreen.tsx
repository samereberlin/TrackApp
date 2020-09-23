import React, {useState} from 'react';
import {Alert, StyleSheet, View, ViewStyle} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ImagePickerResponse} from 'react-native-image-picker';

import Container from '../components/Container';
import {formatDateForm, formatWeightForm, isDateFormAvailable} from '../utils';
import FormGroup from '../components/FormGroup';
import Header from '../components/Header';
import PicturePicker from '../components/PicturePicker';
import PictureViewer from '../components/PictureViewer';
import {RootStackParamList} from '../types';

const styles = StyleSheet.create({
  formContainer: {flex: 1} as ViewStyle,
});

export interface CreateScreenProps {
  navigation: StackNavigationProp<any>;
  route: RouteProp<RootStackParamList, 'CreateScreen'>;
}

const CreateScreen: React.FC<CreateScreenProps> = ({navigation, route}) => {
  const [date, setDate] = useState('');
  const [weight, setWeight] = useState('');
  const [pictureInfo, setPictureInfo] = useState<
    ImagePickerResponse | undefined
  >();

  const headerButtonCB = () => navigation.goBack();

  const onChangeDate = (text: string) => {
    try {
      const dateForm = formatDateForm(text);
      setDate(dateForm);
      if (
        dateForm.length === 8 &&
        route.params.usedDates.length &&
        !isDateFormAvailable(dateForm, route.params.usedDates)
      ) {
        Alert.alert(
          'Date already used',
          `You have already created a measurement on ${dateForm}, please insert another date.`,
          [{text: 'OK', onPress: () => setDate('')}],
          {cancelable: false},
        );
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

  const picturePickerCB = (response: ImagePickerResponse) => {
    setPictureInfo(response);
  };

  const pictureViewerCB = () => {
    setPictureInfo(undefined);
  };

  return (
    <Container>
      <Header label="Create Measurement" buttonCallback={headerButtonCB} />
      <View style={styles.formContainer}>
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
            onDeleted={pictureViewerCB}
            pictureInfo={pictureInfo}
          />
        ) : (
          <PicturePicker onPicked={picturePickerCB} />
        )}
      </View>
    </Container>
  );
};

export default CreateScreen;
