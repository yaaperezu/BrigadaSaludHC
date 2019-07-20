import * as types from './constants'
import { actions } from '../'
import AsyncStorage from '@react-native-community/async-storage'

export const login = (username: string, password: string) => {
    return dispatch => {

        dispatch(actions.app.loading())

        if (username === 'admin' && password === 'secret') {
            saveDataAsyncStorage('userToken', username)
            dispatch({
                type: types.LOGIN,
                payload: {
                    userId: username,
                    fullName: 'Yasser Perez'
                }
            })
        }

        dispatch(actions.app.loading(false))
    }
}

export const logout = () => {
    removeDataAsyncStorage('userToken')
    clearAllDataAsyncStorage()
    return {
        type: types.LOGOUT
    }
}

export const saveDataAsyncStorage = async (keyData, valueData) => {
    try {
        await AsyncStorage.setItem(keyData, valueData)
    } catch (e) {
        console.log(e)
    }
}

export const getDataAsyncStorage = async (keyData) => {
    try {
        const value = await AsyncStorage.getItem(keyData)
        return value;
    } catch (e) {
        console.log(e)
    }
}

export const removeDataAsyncStorage = async (keyData) => {
    try {
        await AsyncStorage.removeItem(keyData)
    } catch (e) {
        console.log(e)
    }
}

export const clearAllDataAsyncStorage = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        console.log(e)
    }
}