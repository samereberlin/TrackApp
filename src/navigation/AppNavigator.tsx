import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import CreateScreen from '../screens/CreateScreen';
import ListScreen from '../screens/ListScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none" mode="modal">
      <Stack.Screen name="Measurements" component={ListScreen} />
      <Stack.Screen name="Create Measurement" component={CreateScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
