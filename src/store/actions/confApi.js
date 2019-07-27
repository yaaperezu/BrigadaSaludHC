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

            ConexionRealm.write(() => {
                let regConfAPI = ConexionRealm.objects('ServidorAPI').sorted('id', true)

                var ID = regConfAPI.length > 0 ? (regConfAPI[0].id + 1) : 1;

                servAPINew.id = ID;
                servAPINew.createdAt = new Date();
                servAPINew.updatedAt = new Date();

                ConexionRealm.create('ServidorAPI', servAPINew);
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