import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import {Button, Card, CardSection} from './common';
import IMAGES from '../IMAGES';

const CoinsDetail = ({ coinItem }) => {

    const symbolImage = (val) => {
        let images = IMAGES._ICONS;
        for(key in images) {
            if (key === val) {
                return images[key];
            }
        }
    }

    return (
        <Card>
            <CardSection direction='row' justify='space-between' align='center'>
                <View style={style.imageContainer}>
                    {/* FIXME: fix image import */} 
                     <Image source={symbolImage(coinItem.symbol)}></Image>
                </View>
                <View style={style.textContainer}>
                    <Text style={style.titleSize}>{coinItem.symbol}</Text>
                    <Text>{coinItem.price_usd}</Text>
                </View>
                <Button onPress={() => Linking.openURL('https://www.gogle.com')}>
                    More info
                </Button>
            </CardSection>
            
            <CardSection>
                <Image source={require('../assets/image/btc.png')} style={style.imageItem}></Image>
            </CardSection>
        </Card>
    );
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

export default CoinsDetail;