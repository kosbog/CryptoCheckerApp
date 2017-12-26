import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    const tempStyles = {
        flexDirection: props.direction !== undefined ? props.direction :  'row',
        justifyContent: props.justify !== undefined ? props.justify : 'flex-start',
        alignItems:  props.align !== undefined ? props.align : 'center'
    }
    return (
        <View style={[ styles.container, tempStyles]}>
            {props.children}
        </View>
    );
}

const styles = {
    container: {
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        borderColor: '#e3e3e3',
        position: 'relative'
    }
}

export default CardSection;