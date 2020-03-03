import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Gradient from "react-native-linear-gradient";

export default function Title(props) {
    const css = StyleSheet.create({
        header:{
            height: Number.isInteger(props.height) ? props.height : 150,
        },
        color:{
            backgroundColor: props.color ? props.color : '#0984e3',
        }
    }) 
    if (!props.gradient) {
        return (
            <View style={[styles.container, css.header, css.color]}>
                <Text style={styles.title}>{props.title ? props.title : ''}</Text>
            </View>
        )
    }
    const colors = props.color ? props.color : ['#6c5ce7', '#a29bfe']
    return (
        <Gradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={colors}
        >
            <View style={[styles.container, css.header]}>
                <Text style={styles.title}>{props.title ? props.title : ''}</Text>
            </View>
        </Gradient>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40,
    },
    title: {
        fontSize: 35,
        color: '#fff',
    }
})