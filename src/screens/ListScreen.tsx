import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useQuery} from '@apollo/client';

import Container from '../components/Container';
import {GET_MEASUREMENTS} from '../graphql/queries';
import {colors, defaultTextStyle} from '../utils/theme';
import Header from '../components/Header';
import MeasurementList from '../components/MeasurementList';
import {MeasurementType} from '../types';
import PlusButton from '../components/PlusButton';

const styles = StyleSheet.create({
  loading: {flex: 1} as ViewStyle,
  error: {...defaultTextStyle, color: colors.error} as TextStyle,
});

interface ListScreenProps {
  navigation: StackNavigationProp<any>;
}

const ListScreen: React.FC<ListScreenProps> = ({navigation}) => {
  const {loading, error, data} = useQuery(GET_MEASUREMENTS);

  let content, usedDates: number[];
  if (loading) {
    content = (
      <ActivityIndicator
        color={colors.buttonBackground}
        size="large"
        style={styles.loading}
        testID="ActivityIndicator"
      />
    );
  } else if (error) {
    content = <Text style={styles.error}>{error}</Text>;
  } else if (data) {
    const sortedItems: MeasurementType[] = [...data.measurements].sort(
      (a, b) => b.measuredAt - a.measuredAt,
    );
    content = <MeasurementList list={sortedItems} />;
    usedDates = sortedItems.map((item: MeasurementType) => item.measuredAt);
  }

  const buttonCallback = () => {
    navigation.navigate('Create Measurement', {usedDates});
  };
  const buttonDisabled = loading || error !== undefined;

  return (
    <Container>
      <Header label="Measurements" />
      {content}
      <PlusButton disabled={buttonDisabled} onPress={buttonCallback} />
    </Container>
  );
};

export default ListScreen;
