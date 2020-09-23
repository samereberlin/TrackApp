import React from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import {formatDateString} from '../utils';
import {colors, defaultTextSize, getSimpleShadowStyle} from '../theme';
import {MeasurementType} from '../types';

const styles = StyleSheet.create({
  outerContainer: {
    ...getSimpleShadowStyle(1),
    flexDirection: 'row',
    backgroundColor: colors.measurementBackground,
    margin: 8,
    padding: 12,
    borderRadius: 4,
  } as ViewStyle,
  innerContainer: {flex: 4} as ViewStyle,
  date: {
    color: colors.measurementDate,
    fontSize: defaultTextSize,
    padding: 4,
  } as TextStyle,
  image: {flex: 1} as ImageStyle,
  weight: {
    color: colors.measurementWeight,
    fontSize: defaultTextSize,
    padding: 4,
  } as TextStyle,
});

export interface MeasurementProps {
  measurement: MeasurementType;
}

const Measurement: React.FC<MeasurementProps> = ({measurement}) => (
  <View style={styles.outerContainer}>
    <View style={styles.innerContainer}>
      <Text style={styles.date}>
        {formatDateString(measurement.measuredAt)}
      </Text>
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
