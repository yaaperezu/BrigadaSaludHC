import * as types from './constants'
import { actions } from '../'

export const login = (username: string, password: string) => {
   return dispatch => {
       
        dispatch(actions.app.loading())

        if (username === 'admin' && password === 'secret') {
            dispatch({
                type: types.LOGIN,
                payload: {
                    userId: username,
                    fullName: 'Clark Kent'
                }
            })
        }

        dispatch(actions.app.loading(false))
    }
}

export const logout = () => {
    return {
        type: types.LOGOUT
    }
}