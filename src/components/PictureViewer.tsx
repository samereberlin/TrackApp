import React from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {ImagePickerResponse} from 'react-native-image-picker';

import {getFileSizeString, getNameFromUri} from '../utils';
import {
  colors,
  defaultFormBorder,
  defaultFormPictureContainer,
  defaultTextSize,
} from '../theme';

const styles = StyleSheet.create({
  container: {
    ...defaultFormBorder,
    ...defaultFormPictureContainer,
  } as ViewStyle,
  image: {
    width: 72,
    height: 72,
    marginLeft: 16,
    marginRight: 16,
  } as ImageStyle,
  textContainer: {
    flex: 1,
  } as ViewStyle,
  name: {
    color: colors.pictureViewerName,
    fontSize: defaultTextSize,
    padding: 4,
  } as TextStyle,
  size: {
    color: colors.pictureViewerSize,
    fontSize: defaultTextSize,
    padding: 4,
  } as TextStyle,
  deleteButton: {
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  } as ViewStyle,
  deleteIcon: {color: colors.pictureViewerIcon, fontSize: 40} as TextStyle,
});

export interface PictureViewerProps {
  onDeleted: Function;
  pictureInfo: ImagePickerResponse | undefined;
}

const PictureViewer: React.FC<PictureViewerProps> = ({
  onDeleted,
  pictureInfo,
}) => (
  <View style={styles.container}>
    <Image source={{uri: pictureInfo?.uri}} style={styles.image} />
    <View style={styles.textContainer}>
      <Text numberOfLines={1} style={styles.name}>
        {pictureInfo?.fileName || getNameFromUri(pictureInfo?.uri)}
      </Text>
      <Text numberOfLines={1} style={styles.size}>
        {getFileSizeString(pictureInfo?.fileSize)}
      </Text>
    </View>
    <TouchableOpacity style={styles.deleteButton} onPress={() => onDeleted()}>
      <Text style={styles.deleteIcon}>×</Text>
    </TouchableOpacity>
  </View>
);

export default PictureViewer;
