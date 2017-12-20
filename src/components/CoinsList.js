import React, { Component } from 'react';
import { View, Text } from 'react-native';
import API from '../utils/utils';
import CoinsDetail from './CoinsDetail';

class CoinsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: null
        };
    }

    componentDidMount() {
        API.getCoinsList().then((response) => {
            this.setState({
                coins: response.data
            });
        });
    }

    renderCoinsList(list) {
        console.log(list);
        return list.map((coinItem, index) => {
                return (
                    <CoinsDetail key={coinItem.name} coinItem={coinItem} />
                )
        });
    }

    render() {
        return (
            <View>
                { this.state.coins !== null &&
                    this.renderCoinsList(this.state.coins)}
            </View>
        );
    }
}

export default CoinsList;