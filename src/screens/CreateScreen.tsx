import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {Alert, StyleSheet, Text, View, ViewStyle} from 'react-native';

import Container from '../components/Container';
import {formatDateForm, formatWeightForm} from '../utils';
import FormGroup from '../components/FormGroup';
import Header from '../components/Header';
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
  const usedDates = route.params;

  const headerButtonCB = () => navigation.goBack();

  const onChangeDate = (text: string) => {
    try {
      const dateForm = formatDateForm(text);
      setDate(dateForm);
      // TODO: check usedDates for the new measurement date validation.
      console.log('usedDates:', usedDates);
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
      </View>
    </Container>
  );
};

export default CreateScreen;
