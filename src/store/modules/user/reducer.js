import * as types from './constants'

export type UserState = {
    loggedIn: boolean,
    userId: string,
    fullName: string
}

const initialState: UserState = {
    loggedIn: false,
    userId: '',
    fullName: ''
}

export default userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            const p = action.payload
            
            return {
                loggedIn: true,
                userId: p.userId,
                fullName: p.fullName
            }
        case types.LOGOUT:
            return {
                loggedIn: false
            }
        default:
            return state
    }
}