import React from 'react';
import {Button, StyleSheet, Text, TextStyle} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useQuery} from '@apollo/client';

import Container from '../components/Container';
import {GET_MEASUREMENTS} from '../graphql/queries';
import Header from '../components/Header';
import MeasurementList from '../components/MeasurementList';

const styles = StyleSheet.create({
  status: {fontSize: 16, padding: 16} as TextStyle,
});

interface ListScreenProps {
  navigation: StackNavigationProp<any>;
}

const ListScreen: React.FC<ListScreenProps> = ({navigation}) => {
  const {loading, error, data} = useQuery(GET_MEASUREMENTS);
  let content;
  if (loading) content = <Text style={styles.status}>Loading...</Text>;
  else if (error) content = <Text style={styles.status}>{error}</Text>;
  else if (data) content = <MeasurementList list={data.measurements} />;
  return (
    <Container>
      <Header label="Measurements" />
      {content}
      <Button
        title="Go to CreateScreen ->"
        onPress={() => navigation.navigate('Create Measurement')}
      />
    </Container>
  );
};

export default ListScreen;
