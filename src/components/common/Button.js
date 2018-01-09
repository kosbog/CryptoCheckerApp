import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => {
    const {buttonStyle, containerStyle} = styles;
    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
           <Text style={buttonStyle}> {children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle:{
        fontSize: 14,
        paddingVertical: 5
    },
    containerStyle: {
        // flex: 1,
        // borderWidth: 1,
        borderColor: 'blue'
    }
})

export  {Button}