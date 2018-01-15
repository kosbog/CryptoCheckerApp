import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image } from 'react-native';
import {Button, Card, CardSection} from './common';
import * as actions from '../actions';
import {connect} from 'react-redux';
import IMAGES from '../IMAGES';
import S from '../assets/styles/styles';

class CoinsDetail extends Component {

    static propTypes = {
        coinItem: PropTypes.object,
        expanded: PropTypes.bool,
        selectCoin: PropTypes.func
    }

    constructor(props) {
        super(props);
    }

    // componentWillUpdate() {
    //     LayoutAnimation.spring();
    // }
    
    symbolImage = (val) => {
        let images = IMAGES._ICONS;
        for (let key in images) {
            if (key === val) {
                return images[key];
            }
        }
    }

    getCoinSymbol=(symbol)=>{
        return this.props.selectCoin(symbol);
    }

    renderCoinDescription =()=>{
        return this.props.expanded
            ? <CardSection>
                    <Text>Irs works!</Text>
                </CardSection>
            : null;
    }

    render() {
        console.log(S);
        const {coinItem} = this.props;
        return (
            <Card>
                <CardSection direction='row' justify='space-between' align='center'>
                    <View style={ style.imageContainer }>
                        { /* FIXME: fix image import */ }
                        <Image source={ this.symbolImage(coinItem.symbol) }></Image>
                    </View>
                    <View style={ style.textContainer }>
                        <Text style={ style.titleSize }>{ coinItem.symbol }</Text>
                        <Text>{ coinItem.price_usd }</Text>
                    </View>
                    <Button onPress={ () => this.getCoinSymbol(coinItem.symbol) }>
                        More info
                    </Button>
                </CardSection>

                <CardSection>
                    <Image source={ this.symbolImage(coinItem.symbol) } style={ style.imageItem }></Image>
                </CardSection>
                { this.renderCoinDescription() }
            </Card>
        );
    }
}

const style = {
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    imageContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleSize: {
        fontSize: 18
    },
    imageItem: {
        height: 100,
        flex: 1,
        width: null
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded =  state.selection === ownProps.coinItem.symbol
    return {
        expanded
    }
}

export default connect(mapStateToProps, actions)(CoinsDetail);