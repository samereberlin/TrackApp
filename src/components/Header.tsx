import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#f8fafa',
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 2,
  } as ViewStyle,
  label: {flex: 1, color: '#333333', fontSize: 20, padding: 16} as TextStyle,
  backButton: {justifyContent: 'center', paddingLeft: 16, paddingRight: 16},
  backButtonIcon: {color: '#aabbbf', fontSize: 40},
});

export interface HeaderProps {
  label: string;
  buttonCallback?: Function;
}

const Header: React.FC<HeaderProps> = ({label, buttonCallback}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    {buttonCallback && (
      <Pressable style={styles.backButton} onPress={() => buttonCallback()}>
        <Text style={styles.backButtonIcon}>×</Text>
      </Pressable>
    )}
  </View>
);

export default Header;
