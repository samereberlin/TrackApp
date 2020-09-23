import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {StyleSheet, Text, TextStyle} from 'react-native';

import Container from '../components/Container';
import Header from '../components/Header';

const styles = StyleSheet.create({
  text: {fontSize: 16, padding: 16} as TextStyle,
});

export interface CreateScreenProps {
  navigation: StackNavigationProp<any>;
  route: RouteProp<any, any>;
}

const CreateScreen: React.FC<CreateScreenProps> = ({navigation, route}) => {
  const buttonCallback = () => navigation.goBack();

  // TODO: check usedDates for the new measurement date validation.
  console.log('usedDates:', route?.params?.usedDates);

  return (
    <Container>
      <Header label="Create Measurement" buttonCallback={buttonCallback} />
      <Text style={styles.text}>Hello CreateScreen!</Text>
    </Container>
  );
};

export default CreateScreen;
