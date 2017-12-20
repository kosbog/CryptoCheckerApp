import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}

const styles = {
    container: {
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#e3e3e3',
        position: 'relative'
    }
}

export default CardSection;