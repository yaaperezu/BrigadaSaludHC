import AsyncStorage from '@react-native-community/async-storage'
import ConexionRealm from '../../data'
import * as SchemaBD from '../../data/schemas'

export const login = user => {
    return dispatch => {

        let usuarioAut = autheticateUserRealm(user.username, user.password)
        if (usuarioAut !== null) {
            saveDataAsyncStorage('userToken', user.username)
            dispatch({
                type: 'LOGIN',
                usuarioAut: usuarioAut
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
        let usuarios = ConexionRealm.objects('Usuario').filtered(filteredUser)
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

export const registrarUser = (user) => {
    console.log('::::::::: ACTIONS registrarUser  ::::::::')
    return dispatch => {

        try {
            let userModelNew = new SchemaBD.UserModel();
            userModelNew.tipoDoc = user.tipoDoc.tipoDoc
            userModelNew.numeroDocumento = user.documento
            userModelNew.nombre = user.nombres
            userModelNew.apellido = user.apellidos
            userModelNew.genero = user.genero.genero
            userModelNew.especialidad = user.especialidad.especialidad
            userModelNew.nombreUsuario = user.username
            userModelNew.contrasena = user.password
            userModelNew.createdAt = new Date();
            userModelNew.updatedAt = new Date();

            ConexionRealm.write(() => {
                if (user.idUser === 0) {
                    let usuariosApp = ConexionRealm.objects('Usuario').sorted('id', true)
                    var ID = usuariosApp.length > 0 ? usuariosApp[0].id + 1 : 1;

                    userModelNew.id = ID;
                    console.log('CREATE')
                    console.log(userModelNew)
                    ConexionRealm.create('Usuario', userModelNew);
                } else {
                    console.log('UPDATE')
                    console.log(userModelNew)
                    userModelNew.id = user.idUser
                    userModelNew.updatedAt = new Date();
                    userModelNew.create('Usuario', userModelNew, true);
                }

            });

            let listAllUser = ConexionRealm.objects('Usuario')
            dispatch({
                type: 'CREATE_USER',
                payload: {
                    listAllUser: listAllUser
                }
            })
        } catch (e) {
            console.log(e)
            return false
        }

    }
}

export const deleteUser = (user) => {
    return dispatch => {

        try {
            ConexionRealm.write(() => {
                ConexionRealm.delete(user);
            });

            let listAllUser = ConexionRealm.objects('Usuario').sorted('id', true)
            dispatch({
                type: 'DELETE_USER',
                payload: {
                    listAllUser: listAllUser
                }
            })
        } catch (e) {
            console.log(e)
            return false
        }

    }
}

export const listarAllUser = () => {
    return dispatch => {

        let listAllUser = ConexionRealm.objects('Usuario').sorted('id', true)
        dispatch({
            type: 'LIST_ALL_USER',
            payload: {
                listAllUser: listAllUser
            }
        })

    }
}

export const busqUser = (userName) => {
    return dispatch => {

        let listAllUser = ConexionRealm.objects('Usuario').sorted('id', true).filtered("nombreUsuario BEGINSWITH '" + userName + "'")
        dispatch({
            type: 'LIST_ALL_USER',
            payload: {
                listAllUser: listAllUser
            }
        })

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