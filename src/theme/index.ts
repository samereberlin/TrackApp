import {Platform, TextStyle, ViewStyle} from 'react-native';

import {ColorsType} from '../types';

export const colors: ColorsType = {
  buttonBackground: '#44b987',
  containerBackground: '#f5f7f7',
  error: 'red',
  header: '#f8fafa',
  headerBorder: '#f1f1f1',
  headerIcon: '#aabbbf',
  headerLabel: '#333333',
  measurementBackground: 'white',
  measurementDate: '#333333',
  measurementWeight: '#adc1c5',
  plusButtonIcon: 'white',
};

export const defaultButtonStyle: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.buttonBackground,
};

export const defaultTextStyle: TextStyle = {
  fontSize: 16,
  padding: 16,
};

export const getSimpleShadowStyle = (radius: number): ViewStyle =>
  Platform.select({
    ios: {
      shadowColor: 'black',
      shadowOffset: {height: 0, width: 0},
      shadowOpacity: radius / 10,
      shadowRadius: radius,
    },
    android: {
      elevation: radius,
    },
    default: {},
  });
