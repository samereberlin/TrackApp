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

import {colors, defaultButtonStyle, getSimpleShadowStyle} from '../theme';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
    alignItems: 'center',
  } as ViewStyle,
  button: {
    ...defaultButtonStyle,
    ...getSimpleShadowStyle(4),
    width: 60,
    height: 60,
    borderRadius: 60,
  } as ViewStyle,
  icon: {
    color: colors.plusButtonIcon,
    fontSize: 40,
    fontWeight: 'bold',
  } as TextStyle,
});

export interface PlusButtonProps {
  disabled: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

const PlusButton: React.FC<PlusButtonProps> = ({disabled, onPress}) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.button}
      disabled={disabled}
      onPress={onPress}>
      <Text style={styles.icon}>＋</Text>
    </TouchableOpacity>
  </View>
);

export default PlusButton;
