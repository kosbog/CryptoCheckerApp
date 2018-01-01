import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import Header from './src/components/Header';
import CoinsList from './src/components/CoinsList';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={createStore}>
      <View style={{ flex: 1 }}>
        <Header headerText={'Bit Currencies Checker'}></Header>
        <CoinsList />
      </View>
      </Provider>
    );
  }
}
