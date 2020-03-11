function Documentos(state = {}, action) {
    switch (action.type) {
        case 'DOCS_LIST': {
            return { ...state, ...action.payload }
        }
        default:
            return state;
    }
}

export default Documentos;