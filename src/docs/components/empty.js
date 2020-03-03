import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

function Empty(props) {
    return (
        <View style={style.container}>
            <Text> {props.text} </Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flex: 1,
    },
    title: {
        color: '#4c4c4c',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        marginLeft: 8,
    }
})

export default Empty;