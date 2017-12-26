import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
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
        API.getCoinsList('EUR').then((response) => {
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
            <ScrollView>
                { this.state.coins !== null &&
                    this.renderCoinsList(this.state.coins)}
            </ScrollView>
        );
    }
}

export default CoinsList;