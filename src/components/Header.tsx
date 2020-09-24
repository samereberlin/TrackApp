import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {colors} from '../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: colors.header,
    borderBottomColor: colors.headerBorder,
    borderBottomWidth: 2,
  } as ViewStyle,
  label: {
    flex: 1,
    color: colors.headerLabel,
    fontSize: 20,
    padding: 16,
  } as TextStyle,
  backButton: {
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  } as ViewStyle,
  backButtonIcon: {color: colors.headerIcon, fontSize: 40} as TextStyle,
});

export interface HeaderProps {
  label: string;
  buttonCallback?: Function;
}

const Header: React.FC<HeaderProps> = ({label, buttonCallback}) => (
  <View style={styles.container}>
    <Text numberOfLines={1} style={styles.label}>
      {label}
    </Text>
    {buttonCallback && (
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => buttonCallback()}>
        <Text style={styles.backButtonIcon}>×</Text>
      </TouchableOpacity>
    )}
  </View>
);

export default Header;
