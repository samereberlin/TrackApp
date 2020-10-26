import React, {useState} from 'react';
import {
  ActivityIndicator,
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

import {colors, defaultFormPictureContainer} from '../utils/theme';

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
  loadingIndicator: {
    backgroundColor: colors.overlayProcessing,
    flex: 1,
  } as ViewStyle,
});

export interface PicturePickerProps {
  disabled: boolean;
  onPicked: Function;
}

const PicturePicker: React.FC<PicturePickerProps> = ({disabled, onPicked}) => {
  const [isLoading, setIsLoading] = useState(false);

  const onPress = () => {
    setIsLoading(true);
    ImagePicker.launchImageLibrary({}, (response) => {
      setIsLoading(false);
      if (response.error) {
        Alert.alert('Image error', response.error, [{text: 'OK'}]);
      } else if (!response.didCancel) {
        onPicked(response);
      }
    });
  };

  return (
    <TouchableOpacity
      disabled={isLoading || disabled}
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.label}>Upload picture</Text>
      <Image
        resizeMode="contain"
        style={styles.icon}
        source={require('../images/upload.png')}
      />
      <View style={styles.border}>
        {isLoading && (
          <ActivityIndicator
            color={colors.picturePicker}
            size="large"
            style={styles.loadingIndicator}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default PicturePicker;
