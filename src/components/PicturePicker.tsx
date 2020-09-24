import React from 'react';
import {
  Alert,
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import {colors, defaultFormPictureContainer} from '../theme';

const styles = StyleSheet.create({
  container: {
    ...defaultFormPictureContainer,
    overflow: 'hidden',
  } as ViewStyle,
  border: {
    borderColor: colors.picturePicker,
    borderStyle: 'dashed',
    borderRadius: 8,
    borderWidth: 4,
    position: 'absolute',
    bottom: -2,
    left: -2,
    right: -2,
    top: -2,
  } as ViewStyle,
  icon: {
    width: 32,
    height: 32,
    marginLeft: 8,
  } as ImageStyle,
  label: {
    color: colors.picturePicker,
    fontSize: 20,
  } as TextStyle,
});

export interface PicturePickerProps {
  onPicked: Function;
}

const PicturePicker: React.FC<PicturePickerProps> = ({onPicked}) => {
  const onPress = () => {
    ImagePicker.showImagePicker((response) => {
      if (response.error) {
        Alert.alert('Image error', response.error, [{text: 'OK'}]);
      } else {
        onPicked(response);
      }
    });
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.border} />
      <Text style={styles.label}>Upload picture</Text>
      <Image
        resizeMode="contain"
        style={styles.icon}
        source={require('../images/upload.png')}
      />
    </TouchableOpacity>
  );
};

export default PicturePicker;
