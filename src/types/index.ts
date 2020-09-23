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
  CreateScreen: {usedDates?: Array<number>};
};
