import React, { Component } from 'react'
import Home from './src/screens/containers/home'
import FormConsult from './src/docs/containers/consulta'
import Document from './src/docs/containers/documento'
class App extends Component {
  state = {
    payload: false
  }
  render() {
    return (
      <Home>
        {this.state.payload?
          <Document/>
          :
          <FormConsult />
        }
        
      </Home>
    );
  }
}

export default App;