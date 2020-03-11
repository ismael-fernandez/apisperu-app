import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
function Container(props) {
    const custom = StyleSheet.create({
        con: {
            width: props.full ? '100%' : '90%',
            marginLeft: props.full ? 0 : '5%',
            backgroundColor: props.color ? props.color : '#fff',
            paddingTop: Number.isInteger(props.pt) ? props.pt : 0,
            paddingTop: Number.isInteger(props.py) ? props.py : 20,
            paddingBottom: Number.isInteger(props.py) ? props.py : 20,

            paddingLeft: Number.isInteger(props.px) ? props.px : 20,
            paddingRight: Number.isInteger(props.px) ? props.px : 20,


            borderTopRightRadius: Number.isInteger(props.round) ? props.round : 40,
            borderTopLeftRadius: Number.isInteger(props.round) ? props.round : 40,
            borderBottomLeftRadius: Number.isInteger(props.round) ? props.round : 40,
            borderBottomRightRadius: Number.isInteger(props.round) ? props.round : 40,
            transform: [
                { translateY: Number.isInteger(props.traslate) ? -props.traslate:-40 }
            ],
        }
    })
    return (
        <View style={[styles.container, custom.con]}>
            {props.children ? props.children : ''}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {        
        width: '90%',
        marginLeft:'5%',
        /* borderTopRightRadius: 40,
        borderTopLeftRadius: 40, */
        /* shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13, */
    }
})


export default Container;