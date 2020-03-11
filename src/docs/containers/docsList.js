import React, { Component } from 'react';

import Layout from '../components/documentLayout'
import Title from '../../screens/components/title'
import Container from '../../sections/containers/container'
import DocumentList from '../components/documentList'
import { connect } from 'react-redux'

class DocsList extends Component {
    close = () => {
        this.props.dispatch({
            type: 'DOCS_LIST',
            payload: {
                docslist:''
            }
        })
    }
    render() {
        return (
            <Layout flex>
                <Title title="Resultado" gradient icon onClose={this.close}/>
                <Container round={30} py={30} px={0} full>
                    <DocumentList/>
                </Container>
            </Layout>
        );
    }
}
export default connect()(DocsList);