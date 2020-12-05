import 'react-native-gesture-handler';
import React from 'react';
import {ApolloProvider} from '@apollo/client';

import client from './graphql/client';
import AppNavigator from './navigation/AppNavigator';

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <AppNavigator />
  </ApolloProvider>
);

export default App;
