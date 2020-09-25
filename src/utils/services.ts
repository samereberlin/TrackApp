import {getNameFromUri, formatDateTimestamp} from '../utils/helpers';
import {SaveServiceParamsType} from '../types';

export const saveService = ({
  measurementMutation,
  uploadPhotoMutation,
  pictureInfo,
  weightString,
  dateString,
}: SaveServiceParamsType): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    const type = pictureInfo?.type || 'image/jpeg';
    let fileId = '';
    let uploadUrl = '';

    try {
      const res = await uploadPhotoMutation({variables: {mimeType: type}});
      uploadUrl = res.data.fileUploadInitialize.uploadUrl;
      fileId = res.data.fileUploadInitialize.fileId;
    } catch (error) {
      console.error('Error on fileUpload mutation:', error);
      reject('Error while uploading image, please try again later.');
    }

    if (pictureInfo) {
      const {uri, fileName} = pictureInfo;
      await fetch(uploadUrl, {
        method: 'PUT',
        body: {
          uri: uri,
          type: type,
          name: fileName || getNameFromUri(uri),
        },
        headers: {
          'Content-Type': pictureInfo.type || '',
        },
      }).catch(error => {
        console.error('Error uploading image:', error);
      });
    }

    try {
      await measurementMutation({
        variables: {
          weight: parseFloat(weightString),
          measuredAt: formatDateTimestamp(dateString),
          fileId,
        },
      });
      resolve();
    } catch (error) {
      console.error('Error on measurementCreate mutation:', error);
      reject('Error while saving measurement, please try again later.');
    }
  });
};
