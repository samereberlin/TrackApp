import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

import {MeasurementType} from '../types';

const styles = StyleSheet.create({
  item: {fontSize: 16, padding: 16} as TextStyle,
});

export interface MeasurementProps {
  measurement: MeasurementType;
}

const Measurement: React.FC<MeasurementProps> = ({measurement}) => (
  <Text style={styles.item}>{measurement.id}</Text>
);

export default Measurement;
