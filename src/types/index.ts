import {ImagePickerResponse} from 'react-native-image-picker';

export type ColorsType = {
  buttonBackground: string;
  buttonLabel: string;
  containerBackground: string;
  error: string;
  formLabel: string;
  headerBackground: string;
  headerBorder: string;
  headerIcon: string;
  headerLabel: string;
  measurementBackground: string;
  measurementDate: string;
  measurementWeight: string;
  overlayProcessing: string;
  picturePicker: string;
  pictureViewerIcon: string;
  pictureViewerName: string;
  pictureViewerSize: string;
};

export type MeasurementType = {
  id: string;
  weight: number;
  photoPublicPath: string;
  measuredAt: number;
  createdAt: number;
  __typename: string;
};

export type RootStackParamList = {
  ListScreen: undefined;
  CreateScreen: {usedDates: number[]};
};

export type SaveServiceParamsType = {
  pictureInfo: ImagePickerResponse | undefined;
  // TODO: add mutation reference here.
};
