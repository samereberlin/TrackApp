import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ListScreen from './screens/ListScreen';
import CreateScreen from './screens/CreateScreen';

import {ApolloProvider} from '@apollo/client';
import client from './graphql/client';

const Stack = createStackNavigator();

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Measurements" component={ListScreen} />
        <Stack.Screen name="Create Measurement" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </ApolloProvider>
);

export default App;
