import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  text: {fontWeight: 'bold'} as TextStyle,
});

export interface CreateScreenProps {
  navigation: StackNavigationProp<any>;
}

const CreateScreen: React.FC<CreateScreenProps> = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello CreateScreen!</Text>
    <Button
      title="<- Go back to ListScreen"
      onPress={() => navigation.goBack()}
    />
  </View>
);

export default CreateScreen;
