import { createStore } from 'redux'
import reducer from './reducers/documentos'

const store = createStore(reducer,{})

export default store;