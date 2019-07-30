import * as BdRealm from '../../data'
import * as SchemaBD from '../../data/schemas'

const Realm = require('realm')

export const login = user => {
    let filteredUser = ''
    let usuarioAut = null
    return dispatch => {
        filteredUser = "nombreUsuario = '" + user.username + "'"
        filteredUser += " AND contrasena = '" + user.password + "'"
        console.log(filteredUser)
        Realm.open(BdRealm.dataBaseOptions).then(realm => {
            const usuarios = realm.objects('Usuario').filtered(filteredUser)

            if (usuarios.length > 0) {
                usuarioAut = usuarios[0];
                dispatch({
                    type: 'LOGIN',
                    usuarioAut: usuarioAut
                })
            }
        }).catch((error) => {
            console.log(error);
        });
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const registrarUser = (user) => {
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

            Realm.open(BdRealm.dataBaseOptions).then(realm => {
                realm.write(() => {
                    if (user.idUser === 0) {
                        let usuariosApp = realm.objects('Usuario').sorted('id', true)
                        var ID = usuariosApp.length > 0 ? usuariosApp[0].id + 1 : 1;

                        userModelNew.id = ID;
                        realm.create('Usuario', userModelNew);
                    } else {
                        userModelNew.id = user.idUser
                        userModelNew.updatedAt = new Date();
                        realm.create('Usuario', userModelNew, true);
                    }

                });

                let listAllUser = realm.objects('Usuario')
                dispatch({
                    type: 'CREATE_USER',
                    payload: {
                        listAllUser: listAllUser
                    }
                })
            }).catch((error) => {
                console.log(error);
            });
        } catch (e) {
            console.log(e)
            return false
        }
    }
}

export const deleteUser = (user) => {
    return dispatch => {

        try {
            Realm.open(BdRealm.dataBaseOptions).then(realm => {
                realm.write(() => {
                    realm.delete(user);
                });

                let listAllUser = realm.objects('Usuario').sorted('id', true)
                dispatch({
                    type: 'DELETE_USER',
                    payload: {
                        listAllUser: listAllUser
                    }
                })
            }).catch((error) => {
                console.log(error);
            })
        } catch (e) {
            console.log(e)
            return false
        }

    }
}

export const listarAllUser = () => {
    return dispatch => {
        Realm.open(BdRealm.dataBaseOptions).then(realm => {
            const listAllUser = realm.objects('Usuario').sorted('id', true)
            dispatch({
                type: 'LIST_ALL_USER',
                payload: {
                    listAllUser: listAllUser
                }
            })
        }).catch((error) => {
            console.log(error);
        });


    }
}

export const busqUser = (userName) => {
    return dispatch => {
        Realm.open(BdRealm.dataBaseOptions).then(realm => {
            const listAllUser = realm.objects('Usuario').sorted('id', true).filtered("nombreUsuario BEGINSWITH '" + userName + "'")
            dispatch({
                type: 'LIST_ALL_USER',
                payload: {
                    listAllUser: listAllUser
                }
            })
        }).catch((error) => {
            console.log(error);
        });


    }
}