import React, { Component } from 'react';
import Layout from '../components/formLayout'
import RadioButton from '../../sections/components/radiobutton'
import Inputform from '../../sections/components/inputForm'
import Title from '../../screens/components/title'
import Container from '../../sections/containers/container'
import Button from '../../sections/components/button'
import API from '../../../utils/api'

import { View, Text, Alert } from 'react-native'
import Loading from '../../sections/components/loading'
//import {Banner} from '../../sections/components/admob'


import { connect } from 'react-redux'

class Consulta extends Component {
    state = {
        label: 'Ingrese numero DNI',
        value: '',
        type: 1,
        length: 8,
        loading: false,
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
    componentWillMount = () => {
        this.setState({ loading: false })
    }
    onSubmit = async () => {
        this.setState({ loading: true })
        if (!this.valid()) {
            return null
        }
        const data = await API.getDatos(this.state.type, this.state.value)
        if (data === null) {
            this.error("No se encontro resultados")
            this.setState({ loading: false })
            return null
        }
        this.props.dispatch({
            type: 'DOCS_LIST',
            payload: {
                docslist: data
            }
        })
        this.setState({ loading: false })
    }
    valid = () => {
        if (this.state.value.trim() === '') {
            this.setState({ loading: false })
            this.error("Ingrese el numero")
            return false
        }
        if (this.state.type === 1) {
            if (this.state.value.length != 8) {
                this.setState({ loading: false })
                this.error("El digito del Documento debe ser 8")
                return false
            }
        }
        if (this.state.type === 2) {
            if (this.state.value.length != 11) {
                this.setState({ loading: false })
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
        if (this.state.loading) {
            return (
                <Loading />
            )
        }
        return (
            <Layout flex>
                <Title title="Apis Peru" gradient height={180} onClose={this.close} />
                <Container round={30} py={40} px={40} traslate={50}>

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
                    
                </Container>
            </Layout>
        );
    }
}

export default connect()(Consulta);