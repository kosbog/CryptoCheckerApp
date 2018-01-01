import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}

const styles = {
    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#f0f0f0',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        marginHorizontal: 5,
        marginVertical: 10
    }
}

export  {Card};