import React from 'react';
import {StyleSheet, SafeAreaView, ViewStyle} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f5f7f7'} as ViewStyle,
});

const Container: React.FC = ({children}) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

export default Container;
