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
        API.getDefaultCoinsList('EUR').then((response) => {
            this.setState({
                coins: response.data
            });
        });
    }

    keyExtractor = (item, index) => item.symbol;

    renderCoinsList = (item) => (<CoinsDetail key={item.name} coinItem={item} />);

    render() {
        return (
            <View style={{flex: 1}}>
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