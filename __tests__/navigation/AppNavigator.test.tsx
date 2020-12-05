import 'react-native';
import React from 'react';
import {act, create} from 'react-test-renderer';
import {MockedProvider} from '@apollo/client/testing';
import {fireEvent, render, waitFor} from '@testing-library/react-native';

import AppNavigator from '../../src/navigation/AppNavigator';
import {GET_MEASUREMENTS} from '../../src/graphql/queries';

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

describe('AppNavigator', () => {
  it('matches the snapshot', async () => {
    const screen = create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AppNavigator />
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
        <AppNavigator />
      </MockedProvider>,
    );
    expect(screen.getByTestId('ActivityIndicator')).toBeTruthy();

    await waitFor(() =>
      // @ts-ignore: required because testing-library does not export container type
      screen.container.find((node) => node.type === 'RCTScrollView'),
    );

    expect(screen.queryByTestId('ActivityIndicator')).not.toBeTruthy();
    expect(screen.getAllByText('Measurements')).toHaveLength(1);
    expect(screen.getAllByText('＋')).toHaveLength(1);
  });

  it('navigates to the next screen', async () => {
    const screen = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AppNavigator />
      </MockedProvider>,
    );

    await waitFor(() =>
      // @ts-ignore: required because testing-library does not export container type
      screen.container.find((node) => node.type === 'RCTScrollView'),
    );

    expect(screen.getAllByText('Measurements')).toHaveLength(1);

    fireEvent.press(screen.getByText('＋'));
    await waitFor(() => screen.getByText('Create Measurement'));

    expect(screen.getAllByText('Create Measurement')).toHaveLength(1);
  });
});
