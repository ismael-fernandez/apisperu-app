import React from 'react'
import { RadioButton, TextInputMask } from 'react-native-paper';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native'
//import { Input } from 'react-native-elements';

function InputForm(props) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.Input}
                placeholder={props.title}
                keyboardType={'numeric'}
                value={props.value}
                onChangeText={text => props.onChange(text)}
                maxLength={props.length}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 10,
        marginTop: 32,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#BAB7C3',
        borderRadius: 30,
        paddingHorizontal: 20,
        color: '#a5b1c2',
        borderColor: "gray",
        fontWeight: '600',
    },
    input: {
        height: 50,
        color: '#a5b1c2',
        fontWeight: '600',

    }
})

export default InputForm;