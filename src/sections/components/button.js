import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements';

function CustomButton(props) {
    const color = { backgroundColor: props.color ? props.color :'#6c5ce7'}
    return (
        <View style={styles.container}>
            <Button
                title={props.title ? props.title : 'Submit'}
                buttonStyle={[styles.button,color]}
                onPress={props.onPress}                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden',
        borderRadius: 30,
    },
    button: {
        overflow:'hidden',
        /* borderRadius: 30, */
        paddingVertical: 10,
        paddingHorizontal:40,
    },
})
export default CustomButton;