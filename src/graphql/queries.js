import {gql} from '@apollo/client';

export const GET_MEASUREMENTS = gql`
  query GetMeasurements {
    measurements {
      id
      weight
      photoPublicPath
      measuredAt
      createdAt
    }
  }
`;
