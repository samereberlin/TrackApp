import {gql} from '@apollo/client';

export const CREATE_MEASUREMENT = gql`
  mutation CreateMeasurement($weight: Float!, $measuredAt: Date!, $fileId: ID) {
    measurementCreate(
      input: {weight: $weight, measuredAt: $measuredAt, fileId: $fileId}
    ) {
      id
      weight
      photoPublicPath
      measuredAt
      createdAt
    }
  }
`;

export const UPLOAD_PHOTO = gql`
  mutation UploadPhoto($mimeType: String!) {
    fileUploadInitialize(input: {mimeType: $mimeType}) {
      fileId
      uploadUrl
    }
  }
`;
