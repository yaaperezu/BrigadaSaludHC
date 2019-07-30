import * as BdRealm from '../../data'
import * as SchemaBD from '../../data/schemas'

const Realm = require('realm')

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

            Realm.open(BdRealm.dataBaseOptions).then(realm => {
                realm.write(() => {
                    if (confApi.idConfApi === 0) {
                        const regConfAPI = realm.objects('ServidorAPI').sorted('id', true)
                        const ID = regConfAPI.length > 0 ? (regConfAPI[0].id + 1) : 1;
                        servAPINew.id = ID
                        realm.create('ServidorAPI', servAPINew);
                    } else {
                        servAPINew.id = confApi.idConfApi
                        servAPINew.updatedAt = new Date();
                        realm.create('ServidorAPI', servAPINew, true);
                    }

                });

                const listAllConfAPI = realm.objects('ServidorAPI')
                dispatch({
                    type: 'CREATE_CONF',
                    payload: {
                        dataConfAPI: servAPINew,
                        listAllConfAPI: listAllConfAPI
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

export const deleteConfAPI = (confApi) => {
    return dispatch => {
        try {
            Realm.open(BdRealm.dataBaseOptions).then(realm => {
                realm.write(() => {
                    realm.delete(confApi);
                });

                const listAllConfAPI = realm.objects('ServidorAPI').sorted('id', true)
                dispatch({
                    type: 'CREATE_CONF',
                    payload: {
                        listAllConfAPI: listAllConfAPI
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

export const listarAllConfAPI = () => {
    return dispatch => {
        Realm.open(BdRealm.dataBaseOptions).then(realm => {
            const listAllConfAPI = realm.objects('ServidorAPI').sorted('id', true)
            dispatch({
                type: 'LIST_ALL_CONFIG',
                payload: {
                    listAllConfAPI: listAllConfAPI
                }
            })
        }).catch((error) => {
            console.log(error);
        });
    }
}

export const busqServerConfApi = (server) => {
    return dispatch => {
        Realm.open(BdRealm.dataBaseOptions).then(realm => {

            const listAllConfAPI = realm.objects('ServidorAPI').sorted('id', true).filtered("server BEGINSWITH '" + server + "'")

            dispatch({
                type: 'LIST_ALL_CONFIG',
                payload: {
                    listAllConfAPI: listAllConfAPI
                }
            })
        }).catch((error) => {
            console.log(error);
        });
    }
}