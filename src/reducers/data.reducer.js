import * as constant from '../constants'

const initialState = {
    data: [],
    isFeching: false,
    error: false
}

export default dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case constant.FETCHING_DATA:
            return {
                ...state,
                data: [],
                isFeching: true
            }
        case constant.FETCHING_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                isFeching: false
            }
        case constant.FETCHING_DATA_PEOPLE_SUCCESS:
            return {
                ...state,
                dataPeople: action.dataPeople,
                isFeching: false
            }
        case constant.FETCHING_DATA_FAILURE:
            return {
                ...state,
                isFeching: false,
                error: true
            }
        default:
            return state
    }
}