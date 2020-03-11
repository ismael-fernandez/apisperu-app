import React, { Component } from 'react'

import { Provider } from 'react-redux'

import store from './store'

import Main from './src/main'
class App extends Component {
  state = {
    payload: false
  }
  render() {
    return (
      <Provider
        store={store}
        >
        <Main/>
      </Provider>
    );
  }
}

export default App;