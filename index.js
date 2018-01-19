import { AppRegistry } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import registerScreens from './src/screens';
import App from './App';
import store from './src/store';

registerScreens(store, Provider);

Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'Hello',
            screen: 'AppScreen',
            title: 'AppScreen'
        },
        {
            label: 'Login please',
            screen: 'LoginScreen',
            title: 'LoginScreen'
        },
        {
            label: 'Coins Rating',
            screen: 'CoinsListScreen',
            title: 'CoinsListScreen'
        }
    ]
});

// AppRegistry.registerComponent('CryptoCheckerApp', () => App);

// const app = new App();
