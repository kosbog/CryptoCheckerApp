import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Input = ({label, value, placeholder, secureTextEntry, onFocus, onChangeText}) => {
    const {inputStyle, labelStyle, containerStyle} = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                style={inputStyle}
                value={value}
                onFocus={onFocus}
                onChangeText={onChangeText} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingHorizontal: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingHorizontal: 5,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export {Input};