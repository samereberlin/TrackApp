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

import {useQuery} from '@apollo/client';
import {GET_MEASUREMENTS} from '../graphql/queries';
import {MeasurementType} from '../types';

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

const ListScreen: React.FC<ListScreenProps> = ({navigation}) => {
  const {loading, error, data} = useQuery(GET_MEASUREMENTS);
  let content;

  if (loading) content = <Text style={styles.text}>Loading...</Text>;
  if (error) content = <Text style={styles.text}>{error}</Text>;
  if (data)
    content = data.measurements.map(({id}: MeasurementType) => (
      <Text key={id}>{id}</Text>
    ));

  return (
    <View style={styles.container}>
      {content}
      <Button
        title="Go to CreateScreen ->"
        onPress={() => navigation.navigate('Create Measurement')}
      />
    </View>
  );
};

export default ListScreen;
