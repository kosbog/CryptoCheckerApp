import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Header} from './src/components/common';
// import CoinsList from './src/components/CoinsList';
import firebase from "firebase";

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Bit Currencies Checker'}></Header>
      </View>
    ); 
  }
}
