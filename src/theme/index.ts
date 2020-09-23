import {Platform, TextStyle, ViewStyle} from 'react-native';

import {ColorsType} from '../types';

const DEFAULT_TEXT_COLOR = '#333333';

export const colors: ColorsType = {
  buttonBackground: '#44b987',
  containerBackground: '#f5f7f7',
  error: 'red',
  formBorder: '#d5dee0',
  formLabel: DEFAULT_TEXT_COLOR,
  header: '#f8fafa',
  headerBorder: '#f1f1f1',
  headerIcon: '#aabbbf',
  headerLabel: DEFAULT_TEXT_COLOR,
  measurementBackground: 'white',
  measurementDate: DEFAULT_TEXT_COLOR,
  measurementWeight: '#adc1c5',
  plusButtonIcon: 'white',
};

export const defaultButtonStyle: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.buttonBackground,
};

export const defaultTextSize: number = 16;

export const defaultTextStyle: TextStyle = {
  fontSize: defaultTextSize,
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
