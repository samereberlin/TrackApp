import React from 'react';
import {Button} from 'react-native';
import {ImagePickerResponse} from 'react-native-image-picker';

export interface PictureViewerProps {
  onDeleted: Function;
  pictureInfo: ImagePickerResponse | undefined;
}

const PictureViewer: React.FC<PictureViewerProps> = ({onDeleted}) => (
  <Button onPress={() => onDeleted()} title="PictureViewer" />
);

export default PictureViewer;
