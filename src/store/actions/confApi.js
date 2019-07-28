import ConexionRealm from '../../data'
import * as SchemaBD from '../../data/schemas'


export const registrarConfAPI = (confApi) => {
    return dispatch => {

        try {
            let servAPINew = new SchemaBD.ServidorAPIModel();
            servAPINew.protocolo = confApi.protocolo.protocolo
            servAPINew.server = confApi.server
            servAPINew.port = confApi.port
            servAPINew.estado = confApi.estado.estado
            servAPINew.createdAt = new Date();
            servAPINew.updatedAt = new Date();

            ConexionRealm.write(() => {
                if (confApi.idConfApi === 0) {
                    let regConfAPI = ConexionRealm.objects('ServidorAPI').sorted('id', true)
                    let ID = regConfAPI.length > 0 ? (regConfAPI[0].id + 1) : 1;
                    servAPINew.id = ID
                    console.log(servAPINew)
                    ConexionRealm.create('ServidorAPI', servAPINew);
                } else {
                    servAPINew.id = confApi.idConfApi
                    console.log(servAPINew)
                    ConexionRealm.create('ServidorAPI', servAPINew, true);
                }

            });

            let listAllConfAPI = ConexionRealm.objects('ServidorAPI')
            dispatch({
                type: 'CREATE_CONF',
                payload: {
                    dataConfAPI: servAPINew,
                    listAllConfAPI: listAllConfAPI
                }
            })
        } catch (e) {
            console.log(e)
            return false
        }

    }
}

export const deleteConfAPI = (confApi) => {
    console.log('ACTION deleteConfAPI')
    return dispatch => {

        try {
            ConexionRealm.write(() => {
                ConexionRealm.delete(confApi);
            });

            let listAllConfAPI = ConexionRealm.objects('ServidorAPI')
            dispatch({
                type: 'CREATE_CONF',
                payload: {
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

        let listAllConfAPI = ConexionRealm.objects('ServidorAPI')
        dispatch({
            type: 'LIST_ALL_CONFIG',
            payload: {
                listAllConfAPI: listAllConfAPI
            }
        })

    }
}