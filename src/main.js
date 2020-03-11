import React, { Component } from 'react'
import { connect } from 'react-redux';

import Home from '../src/screens/containers/home'
import FormConsult from '../src/docs/containers/consulta'
import Document from './docs/containers/docsList'

class Main extends Component {
    render() {
        if (this.props.docslist){
            return <Document />
        }
        return (
            <Home>                
                <FormConsult />
            </Home>
        );
    }
}

function mapStateToProps(state) {
    return {
        docslist: state.docslist
    }
}

export default connect(mapStateToProps)(Main);
