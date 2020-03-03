import React, { Component } from 'react';

import Layout from '../components/documentLayout'
import Title from '../../screens/components/title'
import Container from '../../sections/containers/container'
import API from '../../../utils/api'
import DocsList from '../components/documentList'
import { View, Text } from 'react-native'
const json = [
    {
        key:1,
        name:'dni',
        value:'70872615'
    },
    {
        key: 2,
        name: 'Nombres',
        value: 'Ismael'
    },
    {
        key: 3,
        name: 'Apellidos',
        value: 'Fernandez yaranga'
    },
    {
        key: 4,
        name: 'codigo',
        value: '5'
    }
]
class Documento extends Component {
    state = {
        label: 'Resultado de consul',
        value: '',
        type: 1,
        result: []
    }
    selectDoc = (e) => {
        this.setState({ type: e, label: e == 1 ? 'Ingrese numero DNI' : 'Ingrese numero RUC' })
    }
    onChange = (value) => {
        this.setState({ value: value.replace(/[^0-9]/g, '') })
    }
    onSubmit = async () => {
        console.log("submiting...")
        const data = await API.dni(this.state.value)
        this.setState({ result: data })
        console.log("resultado: ", data)
    }
    render() {
        return (
            <Layout flex>
                <Title title="Resultado" gradient />
                <Container round={15} pt={30} px={30}>
                    <DocsList
                        list={json}
                    />
                </Container>
            </Layout>
        );
    }
}

export default Documento;