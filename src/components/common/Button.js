import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress}>
           <Text> {children}</Text>
        </TouchableOpacity>
    )
}

export default Button