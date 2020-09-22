import React from 'react';
import {FlatList} from 'react-native';

import Measurement from '../components/Measurement';
import {MeasurementType} from '../types';

export interface MeasurementListProps {
  list: [MeasurementType];
}

const MeasurementList: React.FC<MeasurementListProps> = ({list}) => (
  <FlatList
    data={list}
    keyExtractor={({id}) => id}
    renderItem={({item}) => <Measurement measurement={item} />}
  />
);

export default MeasurementList;
