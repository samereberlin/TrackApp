import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet, Text, TextStyle} from 'react-native';

import Container from '../components/Container';
import Header from '../components/Header';

const styles = StyleSheet.create({
  text: {fontSize: 16, padding: 16} as TextStyle,
});

export interface CreateScreenProps {
  navigation: StackNavigationProp<any>;
}

const CreateScreen: React.FC<CreateScreenProps> = ({navigation}) => {
  const buttonCallback = () => navigation.goBack();
  return (
    <Container>
      <Header label="Create Measurement" buttonCallback={buttonCallback} />
      <Text style={styles.text}>Hello CreateScreen!</Text>
    </Container>
  );
};

export default CreateScreen;
