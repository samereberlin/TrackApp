import 'react-native';
import React from 'react';
import {act, create} from 'react-test-renderer';
import {MockedProvider} from '@apollo/client/testing';
import {render, waitForElementToBeRemoved} from '@testing-library/react-native';

import {GET_MEASUREMENTS} from '../../src/graphql/queries';
import ListScreen from '../../src/screens/ListScreen';
import {StackNavigationProp} from '@react-navigation/stack';

const mocks = [
  {
    request: {
      query: GET_MEASUREMENTS,
    },
    result: {
      data: {
        measurements: [
          {
            createdAt: 1,
            id: 'aa',
            measuredAt: 1,
            photoPublicPath: 'https://via.placeholder.com/150',
            weight: 76,
          },
          {
            createdAt: 172800000,
            id: 'cc',
            measuredAt: 172800000,
            photoPublicPath: 'https://via.placeholder.com/150',
            weight: 74,
          },
          {
            createdAt: 86400000,
            id: 'bb',
            measuredAt: 86400000,
            photoPublicPath: 'https://via.placeholder.com/150',
            weight: 75,
          },
        ],
      },
    },
  },
];

describe('ListScreen', () => {
  it('matches the snapshot', async () => {
    const screen = create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ListScreen navigation={{} as StackNavigationProp<any>} />
      </MockedProvider>,
    );
    expect(screen.toJSON()).toMatchSnapshot();

    // wait for Apollo/GraphQL mock response:
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('renders correctly', async () => {
    const screen = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ListScreen navigation={{} as StackNavigationProp<any>} />
      </MockedProvider>,
    );
    expect(screen.getByTestId('ActivityIndicator')).toBeTruthy();

    // wait for Apollo/GraphQL mock response:
    await waitForElementToBeRemoved(() =>
      screen.getByTestId('ActivityIndicator'),
    );

    expect(screen.queryByTestId('ActivityIndicator')).not.toBeTruthy();
    expect(screen.getAllByText('Measurements')).toHaveLength(1);
    expect(screen.getAllByText('＋')).toHaveLength(1);

    const MeasurementItems = screen.getAllByText(/kg/);
    expect(MeasurementItems).toHaveLength(
      mocks[0].result.data.measurements.length,
    );

    // Measurement id: cc, createdAt: 172800000 = 'Saturday 3 January'.
    expect(MeasurementItems[0]).toHaveTextContent('74kg');
    expect(MeasurementItems[0].parent).toHaveTextContent('Saturday 3 January');

    // Measurement id: bb, createdAt: 86400000 = 'Friday 2 January'.
    expect(MeasurementItems[1]).toHaveTextContent('75kg');
    expect(MeasurementItems[1].parent).toHaveTextContent('Friday 2 January');

    // Measurement id: aa, createdAt: 1 = 'Thursday 1 January'.
    expect(MeasurementItems[2]).toHaveTextContent('76kg');
    expect(MeasurementItems[2].parent).toHaveTextContent('Thursday 1 January');
  });
});
