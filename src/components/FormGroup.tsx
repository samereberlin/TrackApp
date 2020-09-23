import React from 'react';
import {
  KeyboardType,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import {colors, defaultTextSize} from '../theme';

const styles = StyleSheet.create({
  container: {padding: 8} as ViewStyle,
  input: {
    borderColor: colors.formBorder,
    borderRadius: 8,
    borderWidth: 2,
    fontSize: defaultTextSize,
    margin: 4,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
    paddingTop: 8,
  } as TextStyle,
  label: {
    color: colors.formLabel,
    fontSize: defaultTextSize,
    padding: 8,
  } as TextStyle,
});

export interface FormGroup {
  autoFocus?: boolean;
  keyboardType?: KeyboardType;
  label: string;
  maxLength?: number;
  onChangeText: Function;
  placeholder: string;
  value: string;
}

const FormGroup: React.FC<FormGroup> = ({
  autoFocus,
  keyboardType,
  label,
  maxLength,
  onChangeText,
  placeholder,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onChangeText={(text) => onChangeText(text)}
        placeholder={placeholder}
        style={styles.input}
        value={value}
      />
    </View>
  );
};

export default FormGroup;
