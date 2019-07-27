import * as types from './constants'
import { actions } from '../'
import ConexionRealm from '../../../data'
import * as SchemaBD from '../../../data/schemas'

export const registrarConfAPI = (confApi) => {
    return dispatch => {

        try {
            let servAPINew = new SchemaBD.ServidorAPIModel();
            servAPINew.protocolo = confApi.protocolo.protocolo
            servAPINew.server = confApi.server
            servAPINew.port = confApi.port
            servAPINew.estado = confApi.estado.estado

            ConexionRealm.write(() => {
                let regConfAPI = ConexionRealm.objects('ServidorAPI').sorted('id', true)
                var ID = regConfAPI.length > 0 ? (regConfAPI[0].id + 1) : 1;

                servAPINew.id = ID;
                servAPINew.createdAt = new Date();
                servAPINew.updatedAt = new Date();

                ConexionRealm.create('ServidorAPI', servAPINew);
            });
            console.log('----------------------------------------')
            console.log(servAPINew)
            let listAllConfAPI = ConexionRealm.objects('ServidorAPI')
            dispatch({
                type: types.CREATE_CONF,
                payload: {
                    idConfApi: servAPINew.id,
                    pr: servAPINew.protocolo,
                    listAllConfAPI: listAllConfAPI
                }
            })
        } catch (e) {
            console.log(e)
            return false
        }

    }
}

export const listarAllConfAPI = () => {
    return dispatch => {
        dispatch(actions.app.loading())
        let listAllConfAPI = ConexionRealm.objects('ServidorAPI')
        dispatch({
            type: types.LISTAR_CONF,
            payload: {
                listAllConfAPI: listAllConfAPI
            }
        })
        dispatch(actions.app.loading(false))
    }
}

export const autheticateUserRealm = (username, password) => {
    let filteredUser = ''
    let aut = false
    try {
        filteredUser = "nombreUsuario = '" + username + "'"
        filteredUser += " AND contrasena = '" + password + "'"
        console.log('filteredUser:  ' + filteredUser)
        let usuarios = ConexionRealm.objects('Usuario').filtered(filteredUser)
        console.log('usuarios:  ' + usuarios)
        if (usuarios.length > 0) {
            aut = true
        }
        return aut;
    } catch (e) {
        console.log(e)
        return false
    }
}
