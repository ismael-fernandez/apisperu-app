import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { Button, ThemeProvider, Overlay } from 'react-native-elements';
import { RadioButton, TextInput, TextInputMask } from 'react-native-paper';

import CustomInput from '../../sections/components/inputForm'

class FormConsult extends Component {
    state = {
        label: 'Ingrese numero DNI',
        value: '',
        checked: 1,
    }
    handleClick = (value) => {
        if (this.state.value.length <= 8) {
            return null;
        }
        this.setState({
            checked: value,
            label: this.state.checked === 1 ? 'Ingrese numero DNI' : 'Ingrese numero RUC'
        })
    }
    handleChangeInput = (value) => {
        this.setState({ value: value })
    }
    onSubmit = () => {

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <RadioButton.Group
                        onValueChange={value => this.handleClick(value)}
                        value={this.state.checked}
                    >
                        <RadioButton.Item label="DNI" value={1} />
                        <RadioButton.Item label="RUC" value={2} />
                    </RadioButton.Group>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        label="Ingrese numero"
                        keyboardType="number-pad"
                        value={this.state.text}
                        onChangeText={text => this.handleChangeInput(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <CustomInput title="custom"/>
                </View>
                <View>
                    <Button
                        title="consultar"
                        raised
                        buttonStyle={styles.button}
                        onPress={this.onSubmit}
                    />
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    button: {
        borderRadius: 30,
        paddingVertical: 10,
    },

})

export default FormConsult;
