import React from 'react';
import {FlatList, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';

import {defaultTextStyle} from '../utils/theme';
import Measurement from '../components/Measurement';
import {MeasurementType} from '../types';

const styles = StyleSheet.create({
  container: {padding: 8} as ViewStyle,
  empty: {...defaultTextStyle} as TextStyle,
});

export interface MeasurementListProps {
  list: MeasurementType[];
}

const MeasurementList: React.FC<MeasurementListProps> = ({list}) => (
  <FlatList
    data={list}
    keyExtractor={({id}) => id}
    renderItem={({item}) => <Measurement measurement={item} />}
    ListEmptyComponent={<Text style={styles.empty}>Empty list.</Text>}
    style={styles.container}
  />
);

export default MeasurementList;
