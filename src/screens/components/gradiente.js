import React from 'react'
import { StyleSheet } from 'react-native'
import Gradient from "react-native-linear-gradient";

function Gradiente(props) {
    const colors = props.color ? props.color : ['#A1A3FF', '#6D63EF'];
    
    const styles = StyleSheet.create({
        content: {

            paddingLeft: props.px ? props.px : 0,
            paddingRight: props.px ? props.px : 0,

            paddingTop: props.py ? props.py : 0,
            paddingBottom: props.py ? props.py : 0,

            paddingLeft: props.p ? props.p : 0,
            paddingRight: props.p ? props.p : 0,
            paddingTop: props.p ? props.p : 0,
            paddingBottom: props.p ? props.p : 0,
            alignItems: 'center',
            flex: props.full ? 1 : 0,
        }
    })
    return (
        <Gradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={colors}
            style={styles.content}
        >
            {props.children}
        </Gradient>
    )
}

export default Gradiente;