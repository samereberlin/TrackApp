import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {StyleSheet, Text, TextStyle} from 'react-native';

import Container from '../components/Container';
import {defaultTextStyle} from '../theme';
import Header from '../components/Header';
import {RootStackParamList} from '../types';

const styles = StyleSheet.create({
  text: {...defaultTextStyle} as TextStyle,
});

export interface CreateScreenProps {
  navigation: StackNavigationProp<any>;
  route: RouteProp<RootStackParamList, 'CreateScreen'>;
}

const CreateScreen: React.FC<CreateScreenProps> = ({navigation, route}) => {
  const buttonCallback = () => navigation.goBack();
  const usedDates = route.params;

  // TODO: check usedDates for the new measurement date validation.
  console.log('usedDates:', usedDates);

  return (
    <Container>
      <Header label="Create Measurement" buttonCallback={buttonCallback} />
      <Text style={styles.text}>Hello CreateScreen!</Text>
    </Container>
  );
};

export default CreateScreen;
