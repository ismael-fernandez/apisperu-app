import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import Gradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Title(props) {
    const css = StyleSheet.create({
        header: {
            height: Number.isInteger(props.height) ? props.height : 150,
        },
        color: {
            backgroundColor: props.color ? props.color : '#0984e3',
        }
    })
    if (!props.gradient) {
        return (
            <View style={[styles.container, css.header, css.color]}>
                {props.icon &&
                    <TouchableHighlight
                        style={styles.icon}
                        onPress={props.onClose}
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
                }
                <View>
                    <Text style={styles.title}>{props.title ? props.title : ''}</Text>
                </View>
            </View>
        )
    }
    const colors = props.color ? props.color : ['#3867d6', '#778beb']
    
    return (
        <Gradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={colors}
        >
            {props.icon &&
                <TouchableHighlight
                    style={styles.icon}
                    onPress={props.onClose}
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
            }
            <View style={[styles.container, css.header]}>
                <View>
                    <Text style={styles.title}>{props.title ? props.title : ''}</Text>
                </View>
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
    icon: {
        height: 10,
        width: 50,
        marginTop: 10,
        position: 'absolute'
    },
    title: {
        fontSize: 35,
        color: '#fff',
    }
})