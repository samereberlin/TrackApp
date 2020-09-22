import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ListScreen from './screens/ListScreen';
import CreateScreen from './screens/CreateScreen';

const Stack = createStackNavigator();

const App: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Measurements" component={ListScreen} />
      <Stack.Screen name="Create Measurement" component={CreateScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
