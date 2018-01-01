import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from "firebase";
import {Header, Button, Spinner} from './src/components/common';
import LoginForm from './src/components/LoginForm';
// import CoinsList from './src/components/CoinsList';

export default class App extends Component < {} > {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    };
  }

  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyC1v44GUs0kMJVnXuXQ5-Tdx5q-KB5VV70',
      authDomain: 'crypto-currency-checker.firebaseapp.com',
      databaseURL: 'https://crypto-currency-checker.firebaseio.com',
      projectId: 'crypto-currency-checker',
      storageBucket: 'crypto-currency-checker.appspot.com',
      messagingSenderId: '912259128953'
    };

    firebase.initializeApp(config);
    firebase
      .auth()
      .onAuthStateChanged((user) => {
        user
          ? this.setState({loggedIn: true})
          : this.setState({loggedIn: false});
      })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button
            onPress={() => {
            firebase
              .auth()
              .signOut()
          }}>Log out!</Button>
        );
        break;
      case false:
        return <LoginForm/>
        break;
      default:
        return <Spinner/>
        break;
    }
  }

  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <Header headerText={'Auth'}></Header >
        {this.renderContent()}
      </View>
    );
  }
}