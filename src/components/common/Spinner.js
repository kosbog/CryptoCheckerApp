import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const Spinner = ({size}) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} color="#0000ff"/>
        </View>
    );
}

const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export {Spinner};