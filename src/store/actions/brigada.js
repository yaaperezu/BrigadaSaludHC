import * as BdRealm from '../../data'
import * as SchemaBD from '../../data/schemas'

const Realm = require('realm')

export const registrarBrigada = (brigada) => {
    return dispatch => {
        try {
            let brigadaNew = new SchemaBD.BrigadaModel();
            brigadaNew.descripcion = brigada.descripcion
            brigadaNew.lugar = brigada.lugar
            brigadaNew.ciudad = brigada.ciudad
            brigadaNew.fechai = new Date(brigada.fechaI)
            brigadaNew.fechaf = new Date(brigada.fechaF)

            Realm.open(BdRealm.dataBaseOptions).then(realm => {
                realm.write(() => {
                    if (brigada.idBrigada === 0) {
                        let registrosBrigada = realm.objects('Brigada').sorted('id', true)
                        var ID = registrosBrigada.length > 0 ? registrosBrigada[0].id + 1 : 1;

                        brigadaNew.id = ID;
                        brigadaNew.createdAt = new Date();
                        brigadaNew.updatedAt = new Date();

                        realm.create('Brigada', brigadaNew);
                    } else {
                        brigadaNew.id = brigada.idBrigada
                        brigadaNew.updatedAt = new Date();
                        realm.create('Brigada', brigadaNew, true);
                    }

                });

                let listAllBrigada = realm.objects('Brigada')
                dispatch({
                    type: 'CREATE_BRIGADA',
                    payload: {
                        listAllBrigada: listAllBrigada
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

export const deleteBrigada = (brigada) => {
    return dispatch => {
        try {
            Realm.open(BdRealm.dataBaseOptions).then(realm => {
                realm.write(() => {
                    realm.delete(brigada);
                });

                let listAllBrigada = realm.objects('Brigada').sorted('id', true)
                dispatch({
                    type: 'DELETE_BRIGADA',
                    payload: {
                        listAllBrigada: listAllBrigada
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

export const listarAllBrigada = () => {
    return dispatch => {
        Realm.open(BdRealm.dataBaseOptions).then(realm => {
            let listAllBrigada = realm.objects('Brigada').sorted('id', true)
            dispatch({
                type: 'LIST_ALL_BRIGADA',
                payload: {
                    listAllBrigada: listAllBrigada
                }
            })
        }).catch((error) => {
            console.log(error);
        });
    }
}

export const busqBrigada = (descBrigada) => {
    return dispatch => {
        Realm.open(BdRealm.dataBaseOptions).then(realm => {
            let listAllBrigada = realm.objects('Brigada').sorted('id', true).filtered("descripcion BEGINSWITH '" + descBrigada + "'")
            dispatch({
                type: 'LIST_ALL_BRIGADA',
                payload: {
                    listAllBrigada: listAllBrigada
                }
            })
        }).catch((error) => {
            console.log(error);
        });
    }
}