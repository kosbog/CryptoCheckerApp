import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import firebase from "firebase";
import { Provider } from 'react-redux';
import store from './src/store';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import CoinsList from './src/components/CoinsList';

export default class App extends Component<{}> {

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
    firebase.auth().onAuthStateChanged((user) => {
      user
        ? this.setState({ loggedIn: true })
        : this.setState({ loggedIn: false });
    })
  }

  renderContent() {
    const { containerStyle } = styles;
    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
            <Button style={containerStyle} onPress={() => { firebase.auth().signOut() }}>Log out!</Button>
            <CoinsList />
          </View>
        );
        break;
      case false:
        return <LoginForm />
        break;
      default:
        return <Spinner />
        break;
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{
          flex: 1
        }}>
          <Header headerText={'Bit Currencies Checker'}></Header >
          {this.renderContent()}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'blue'
  }
});