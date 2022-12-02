import React from 'react';
import {Home} from './src/pages/Home/Home';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {ButtomBar} from './src/Navigation/ButtomTab';
// import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {ApolloProvider} from '@apollo/client';
import {createApolloClient} from './src/common/apollo-client';
const apolloClient = createApolloClient();

// // Initialize Apollo Client
// const client = new ApolloClient({
//   uri: ' https://rickandmortyapi.com/graphql',
//   cache: new InMemoryCache(),
// });
const AppNavigator = createStackNavigator(
  {
    Anomalie: ButtomBar,
    Setting: Home,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0090F9',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#FFF',
      },
      headerTintColor: '#FFF',
    },
  },
);
const Navigator = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Navigator />
      </ApolloProvider>
    );
  }
}
