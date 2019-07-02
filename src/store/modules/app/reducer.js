import * as types from './constants'

export type AppState = {
    loading: boolean
}

const initialState: AppState = {
    loading: false
}

export default appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_LOADING:
            return {
                loading: action.payload
            }
        default:
            return state
    }
}