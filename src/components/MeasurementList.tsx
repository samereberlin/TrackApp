import React from 'react';
import {FlatList, StyleSheet, ViewStyle} from 'react-native';

import Measurement from '../components/Measurement';
import {MeasurementType} from '../types';

const styles = StyleSheet.create({
  container: {padding: 8} as ViewStyle,
});

export interface MeasurementListProps {
  list: [MeasurementType];
}

const MeasurementList: React.FC<MeasurementListProps> = ({list}) => (
  <FlatList
    data={list}
    keyExtractor={({id}) => id}
    renderItem={({item}) => <Measurement measurement={item} />}
    style={styles.container}
  />
);

export default MeasurementList;
