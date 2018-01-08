import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import {connect} from 'react-redux';
import CONST from '../CONSTANTS';
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

    keyExtractor = (item, index) => item.symbol;

    renderCoinsList = (item) => (<CoinsDetail key={item.name} coinItem={item} />);

    render() {
        return (
            <View>
                { this.state.coins !== null &&
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.coins}
                        renderItem={({item})=>this.renderCoinsList(item)}>
                    </FlatList>}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        coins: state.coins
    }
}

export default connect(mapStateToProps)(CoinsList);