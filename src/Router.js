import React from 'react';
import { Scene, Router } from "react-native-router-flux";
import LoginForm from './components/LoginForm';
import CoinsList from './components/CoinsList';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ backgroundColor: '#fff' }}>
            <Scene key='root'>
                    <Scene key='login' component={LoginForm} title='Please login' />
                
                    <Scene key='coinsList' component={CoinsList} title='Coins list' />
                </Scene>
        </Router>
    )
}

export default RouterComponent;