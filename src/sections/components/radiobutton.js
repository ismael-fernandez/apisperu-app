import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native'
import { RadioButton, TextInput, TextInputMask } from 'react-native-paper';

function RadioBtn(props) {
    return(
        <View style={styles.header}>
            <RadioButton.Group
                value={props.checked}
                onValueChange={value => props.onPress(value)}
            >
                <RadioButton.Item label="DNI" value={1} />
                <RadioButton.Item label="RUC" value={2} />
            </RadioButton.Group>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
})
export default RadioBtn;