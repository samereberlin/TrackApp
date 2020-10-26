import React from 'react';
import {StyleSheet, SafeAreaView, ViewStyle} from 'react-native';

import {colors} from '../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.containerBackground,
  } as ViewStyle,
});

const Container: React.FC = ({children}) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

export default Container;
