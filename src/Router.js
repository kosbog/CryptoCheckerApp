import React from 'react';
import { Scene, Router, Stack } from "react-native-router-flux";
import LoginForm from './components/LoginForm';
import CoinsList from './components/CoinsList';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ backgroundColor: '#fff' }}>
            <Scene key='root'>
                <Stack key='auth' hideNavBar>
                    <Scene key='login' component={LoginForm} title='Please login'  />
                </Stack>
                <Stack key='main' >
                    <Scene key='coinsList' component={CoinsList} title='Coins list' />
                </Stack>
            </Scene>
        </Router>
    )
}

export default RouterComponent;