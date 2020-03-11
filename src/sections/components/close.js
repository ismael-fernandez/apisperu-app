import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

import {StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'

const cerrar = ()=>{
    console.log("close.....")
}
export default function Close(props) {
    return (
        <TouchableHighlight
            style={styles.icon}
            onPress={cerrar}
            hitSlop={{
                left: 20,
                top: 20,
                bottom: 20,
                right: 20,
            }}
            underlayColor="transparent"
        >
            <Icon name="keyboard-arrow-left" size={40} color={props.color ? props.color : "#fff"} />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    icon: {
        height:10,
        width:50,
        marginTop: 10,
        position:'absolute'
    }
})