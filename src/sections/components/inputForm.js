import React from 'react'
import { RadioButton, TextInput, TextInputMask } from 'react-native-paper';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

function InputForm(props) {
    return(
        <View style={styles.inputContainer}>
            <TextInput
                label={props.title}
                keyboardType={'numeric'}
                value={props.value}
                numeric 
                onChangeText={text => props.onChange(text)}
                maxLength={props.length}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 10,
    },
})

export default InputForm;