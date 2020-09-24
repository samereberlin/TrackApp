import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {
  colors,
  defaultButtonStyle,
  defaultTextStyle,
  getSimpleShadowStyle,
} from '../utils/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  } as ViewStyle,
  button: {
    ...defaultButtonStyle,
    ...getSimpleShadowStyle(3),
    borderRadius: 4,
  } as ViewStyle,
  label: {
    ...defaultTextStyle,
    color: colors.buttonLabel,
    fontWeight: 'bold',
  } as TextStyle,
});

export interface SaveButtonProps {
  disabled: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({disabled, onPress}) => (
  <View style={styles.container}>
    <TouchableOpacity
      disabled={disabled}
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.label}>Save measurement</Text>
    </TouchableOpacity>
  </View>
);

export default SaveButton;
