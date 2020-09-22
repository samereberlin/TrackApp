import React from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';

import {formatDate} from '../utils';
import {MeasurementType} from '../types';

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 8,
    padding: 12,
    borderRadius: 4,
    shadowColor: 'black',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  innerContainer: {flex: 4},
  date: {color: '#333333', fontSize: 16, padding: 4} as TextStyle,
  image: {flex: 1} as ImageStyle,
  weight: {color: '#adc1c5', fontSize: 16, padding: 4} as TextStyle,
});

export interface MeasurementProps {
  measurement: MeasurementType;
}

const Measurement: React.FC<MeasurementProps> = ({measurement}) => (
  <View style={styles.outerContainer}>
    <View style={styles.innerContainer}>
      <Text style={styles.date}>{formatDate(measurement.measuredAt)}</Text>
      <Text style={styles.weight}>{measurement.weight}kg</Text>
    </View>
    <Image
      resizeMode="contain"
      style={styles.image}
      source={{uri: measurement.photoPublicPath}}
    />
  </View>
);

export default Measurement;
