import * as types from './constants'

const initialState = {
    idConfApi: 0,
    protocolo: '',
    server: '',
    port: '',
    estado: '',
    listConfAPI: {}
}

export default confApiReducer = (state = initialState, action) => {
    console.log('REDUCER API')
    console.log(action.payload)
    console.log(state)
    switch (action.type) {
        case types.CREATE_CONF:
            const p = action.payload
            return {
                idConfApi: p.idConfApi,
                protocolo: p.pr,
                listConfAPI: p.listAllConfAPI
            }
        case types.LISTAR_CONF:
            return {
                ...state,
                listConfAPI: action.payload.listAllConfAPI
            }
        default:
            return state
    }
}