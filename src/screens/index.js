import { Navigation } from 'react-native-navigation';
import LoginForm from '../components/LoginForm';
import CoinsList from '../components/CoinsList';
import App from '../../App';

export default (store, Provider) => {
    Navigation.registerComponent('AppScreen', () => App);
    Navigation.registerComponent('LoginScreen', () => LoginForm, store, Provider);
    Navigation.registerComponent('CoinsListScreen', () => CoinsList, store, Provider);
}