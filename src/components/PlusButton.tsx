import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
    alignItems: 'center',
  } as ViewStyle,
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#44b987',
    width: 60,
    height: 60,
    borderRadius: 60,
    shadowColor: 'black',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  } as ViewStyle,
  label: {color: 'white', fontSize: 40, fontWeight: 'bold'} as TextStyle,
});

export interface PlusButtonProps {
  disabled: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

const PlusButton: React.FC<PlusButtonProps> = ({disabled, onPress}) => (
  <View style={styles.container}>
    <Pressable style={styles.button} disabled={disabled} onPress={onPress}>
      <Text style={styles.label}>＋</Text>
    </Pressable>
  </View>
);

export default PlusButton;
