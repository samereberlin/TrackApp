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

interface ListScreenProps {
  navigation: StackNavigationProp<any>;
}

const ListScreen: React.FC<ListScreenProps> = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello ListScreen!</Text>
    <Button
      title="Go to CreateScreen ->"
      onPress={() => navigation.navigate('Create Measurement')}
    />
  </View>
);

export default ListScreen;
