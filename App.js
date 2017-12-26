import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import CoinsList from './src/components/CoinsList';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Bit Currencies Checker'}></Header>
        <CoinsList />
      </View>
    ); 
  }
}
