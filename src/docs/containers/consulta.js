import React, { Component } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';


import Layout from '../components/formLayout'
import RadioButton from '../../sections/components/radiobutton'
import Inputform from '../../sections/components/inputForm'
import Title from '../../screens/components/title'
import Container from '../../sections/containers/container'
import Button from '../../sections/components/button'
import Message from '../../sections/components/message'
import API from '../../../utils/api'

import { View, Text, Alert } from 'react-native'

class Consulta extends Component {
    state = {
        label: 'Ingrese numero DNI',
        value: '',
        type: 1,
        length: 8,
        show: false,
        result: [],
    }
    selectDoc = (e) => {
        this.setState({
            type: e, label: e == 1 ? 'Ingrese numero DNI' : 'Ingrese numero RUC',
            value: '', length: e == 1 ? 8 : 11,
        })
    }
    onChange = (value) => {
        this.setState({ value: value.replace(/[^0-9]/g, '') })
    }
    onSubmit = async () => {
        if (!this.valid()) {
            return null
        }
        const data = await API.getDatos(this.state.type, this.state.value)
        if (data === null) {
            this.error("No se encontro resultados")
            return null
        }
        this.setState({ result: data })
        
    }
    valid = () => {
        if (this.state.value.trim() === '') {
            this.error("Ingrese el numero")
            return false
        }
        if (this.state.type === 1) {
            if (this.state.value.length != 8) {
                this.error("El digito del Documento debe ser 8")
                return false
            }
        }
        if (this.state.type === 2) {
            if (this.state.value.length != 11) {
                this.error("El digito del RUC debe ser 11")
                return false
            }
        }
        return true
    }

    error = (title) => {
        Alert.alert(
            ' ',
            `${title}`,
            [
                {
                    text: 'Aceptar',
                    onPress: () => console.log('Cancel'),
                    style: 'cancel',
                },
            ],
        );
    }
    render() {
        return (
            <Layout flex>
                <Title title="Apis Peru" gradient height={200} />
                <Container round={20} py={60} px={40} traslate={60}>

                    <RadioButton
                        checked={this.state.type}
                        onPress={this.selectDoc}
                    />
                    <Inputform
                        title={this.state.label}
                        value={this.state.value}
                        onChange={this.onChange}
                        length={this.state.length}
                    />
                    <Button
                        title="consultar"
                        raised
                        onPress={this.onSubmit}
                    />
                    {this.state.alert && <Message />}
                </Container>
            </Layout>
        );
    }
}

export default Consulta;