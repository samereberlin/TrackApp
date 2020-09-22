import 'react-native-gesture-handler';
import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import client from './graphql/client';
import CreateScreen from './screens/CreateScreen';
import ListScreen from './screens/ListScreen';

const Stack = createStackNavigator();

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="Measurements" component={ListScreen} />
        <Stack.Screen name="Create Measurement" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </ApolloProvider>
);

export default App;
