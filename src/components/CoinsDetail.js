import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const CoinsDetail = ({ coinItem }) => {
    return (
        <Card>
            <CardSection>
                <View style={style.imageContainer}>
                    <Text> | </Text>
                    <Text>{coinItem.name}</Text>
                    <Text> | </Text>
                </View>
                <View style={style.textContainer}>
                    <Text>{coinItem.symbol}</Text>
                    <Text>{coinItem.price_usd}</Text>
                </View>
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
        justifyContent: 'space-around',
        alignItems: 'center'
    }
}

export default CoinsDetail;