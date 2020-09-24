export type ColorsType = {
  buttonBackground: string;
  containerBackground: string;
  error: string;
  formLabel: string;
  header: string;
  headerBorder: string;
  headerIcon: string;
  headerLabel: string;
  measurementBackground: string;
  measurementDate: string;
  measurementWeight: string;
  plusButtonIcon: string;
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
