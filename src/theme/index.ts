import {Platform, TextStyle, ViewStyle} from 'react-native';

import {ColorsType} from '../types';

const DEFAULT_TEXT_COLOR = '#333333';
const DEFAULT_GREEN_COLOR = '#44b987';

export const colors: ColorsType = {
  buttonBackground: DEFAULT_GREEN_COLOR,
  containerBackground: '#f5f7f7',
  error: 'red',
  formLabel: DEFAULT_TEXT_COLOR,
  header: '#f8fafa',
  headerBorder: '#f1f1f1',
  headerIcon: '#aabbbf',
  headerLabel: DEFAULT_TEXT_COLOR,
  measurementBackground: 'white',
  measurementDate: DEFAULT_TEXT_COLOR,
  measurementWeight: '#adc1c5',
  plusButtonIcon: 'white',
  picturePicker: DEFAULT_GREEN_COLOR,
  picturePickerLoadingBackground: '#ffffffcc',
  pictureViewerIcon: '#d67272',
  pictureViewerName: DEFAULT_TEXT_COLOR,
  pictureViewerSize: '#b1c4c7',
};

export const defaultButtonStyle: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.buttonBackground,
};

export const defaultFormBorder: ViewStyle = {
  borderColor: '#d5dee0',
  borderRadius: 8,
  borderWidth: 2,
};

export const defaultFormPictureContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  height: 100,
  marginLeft: 16,
  marginRight: 16,
  marginTop: 32,
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
