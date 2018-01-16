import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import registerScreens  from './src/screens';
import App from './App';
import store from './src/store';

// registerScreens(store, Provider);

// AppRegistry.registerComponent('CryptoCheckerApp', () => App);

const app = new App();
