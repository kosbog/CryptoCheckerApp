import { Navigation } from 'react-native-navigation';
import LoginForm from '../components/LoginForm';
import CoinsList from '../components/CoinsList';
import App from '../../App';

export default (store, Provider) => {
    // Navigation.registerComponent('AppScreen', () => App, store, Provider);
    Navigation.registerComponent('CoinsListScreen', () => CoinsList, store, Provider);


    // Navigation.startTabBasedApp({
    //     tabs: [
    //         {
    //             screen: 'AppScreen', // this is a registered name for a screen
    //             title: 'LoginFormScreen'
    //         },
    //         {
    //             screen: 'CoinsListScreen',
    //             title: 'CoinsListScreen'
    //         }
    //     ]
    // });
}