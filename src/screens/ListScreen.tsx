import React from 'react';
import {Button, StyleSheet, Text, TextStyle} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useQuery} from '@apollo/client';

import Container from '../components/Container';
import {GET_MEASUREMENTS} from '../graphql/queries';
import Header from '../components/Header';
import MeasurementList from '../components/MeasurementList';
import {MeasurementType} from '../types';
import PlusButton from '../components/PlusButton';

const styles = StyleSheet.create({
  status: {fontSize: 16, padding: 16} as TextStyle,
});

interface ListScreenProps {
  navigation: StackNavigationProp<any>;
}

const ListScreen: React.FC<ListScreenProps> = ({navigation}) => {
  const {loading, error, data} = useQuery(GET_MEASUREMENTS);

  let content, usedDates: Array<number>;
  if (loading) content = <Text style={styles.status}>Loading...</Text>;
  else if (error) content = <Text style={styles.status}>{error}</Text>;
  else if (data) {
    content = <MeasurementList list={data.measurements} />;
    usedDates = data.measurements.map(
      (measurement: MeasurementType) => measurement.measuredAt,
    );
  }

  const buttonCallback = () => {
    navigation.navigate('Create Measurement', {usedDates});
  };
  const buttonDisabled = loading || error !== undefined;

  return (
    <Container>
      <Header label="Measurements" />
      {content}
      <PlusButton disabled={buttonDisabled} onPress={buttonCallback} />
    </Container>
  );
};

export default ListScreen;
