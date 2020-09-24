import {SaveServiceParamsType} from '../types';

export const saveService = (params: SaveServiceParamsType): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => {
      // TODO: implement GraphQL + upload image logic here:
      console.log('params.pictureInfo.uri:', params.pictureInfo?.uri);

      if (Math.random() > 0.5) {
        reject('error message');
      } else {
        resolve();
      }
    }, 1000);
  });
};
