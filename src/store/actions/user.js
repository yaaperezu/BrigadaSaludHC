import AsyncStorage from '@react-native-community/async-storage'
import ConexionRealm from '../../data'

export const login = user => {
    return dispatch => {

        let usuarioAut = autheticateUserRealm(user.username, user.password)
        if (usuarioAut !== null) {
            console.log('autheticateUserRealm:  ')
            saveDataAsyncStorage('userToken', user.username)
            dispatch({
                type: 'LOGIN',
                user: usuarioAut
            })
        }

    }
}

export const autheticateUserRealm = (username, password) => {
    let filteredUser = ''
    let usuario = null
    try {
        filteredUser = "nombreUsuario = '" + username + "'"
        filteredUser += " AND contrasena = '" + password + "'"
        console.log('filteredUser:  ' + filteredUser)
        let usuarios = ConexionRealm.objects('Usuario').filtered(filteredUser)
        console.log('usuarios:  ' + usuarios)
        if (usuarios.length > 0) {
            usuario = usuarios[0];
        }
    } catch (e) {
        console.log(e)
        return null
    }
    return usuario
}

export const logout = () => {
    removeDataAsyncStorage('userToken')
    clearAllDataAsyncStorage()
    return {
        type: 'LOGOUT'
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