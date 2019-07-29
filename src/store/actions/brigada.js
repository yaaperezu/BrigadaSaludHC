import ConexionRealm from '../../data'
import * as SchemaBD from '../../data/schemas'


export const registrarBrigada = (brigada) => {
    return dispatch => {

        try {
            let brigadaNew = new SchemaBD.BrigadaModel();
            brigadaNew.descripcion = brigada.descripcion
            brigadaNew.lugar = brigada.lugar
            brigadaNew.ciudad = brigada.ciudad
            brigadaNew.fechai = new Date(brigada.fechaI)
            brigadaNew.fechaf = new Date(brigada.fechaF)

            ConexionRealm.write(() => {
                if (brigada.idBrigada === 0) {
                    let registrosBrigada = ConexionRealm.objects('Brigada').sorted('id', true)
                    var ID = registrosBrigada.length > 0 ? registrosBrigada[0].id + 1 : 1;

                    brigadaNew.id = ID;
                    brigadaNew.createdAt = new Date();
                    brigadaNew.updatedAt = new Date();

                    ConexionRealm.create('Brigada', brigadaNew);
                } else {
                    brigadaNew.id = brigada.idBrigada
                    brigadaNew.updatedAt = new Date();
                    ConexionRealm.create('Brigada', brigadaNew, true);
                }

            });

            let listAllBrigada = ConexionRealm.objects('Brigada')
            dispatch({
                type: 'CREATE_BRIGADA',
                payload: {
                    listAllBrigada: listAllBrigada
                }
            })
        } catch (e) {
            console.log(e)
            return false
        }

    }
}

export const deleteBrigada = (brigada) => {
    return dispatch => {

        try {
            ConexionRealm.write(() => {
                ConexionRealm.delete(brigada);
            });

            let listAllBrigada = ConexionRealm.objects('Brigada').sorted('id', true)
            dispatch({
                type: 'DELETE_BRIGADA',
                payload: {
                    listAllBrigada: listAllBrigada
                }
            })
        } catch (e) {
            console.log(e)
            return false
        }

    }
}

export const listarAllBrigada = () => {
    return dispatch => {

        let listAllBrigada = ConexionRealm.objects('Brigada').sorted('id', true)
        dispatch({
            type: 'LIST_ALL_BRIGADA',
            payload: {
                listAllBrigada: listAllBrigada
            }
        })

    }
}

export const busqBrigada = (descBrigada) => {
    return dispatch => {

        let listAllBrigada = ConexionRealm.objects('Brigada').sorted('id', true).filtered("descripcion BEGINSWITH '" + descBrigada + "'")
        dispatch({
            type: 'LIST_ALL_BRIGADA',
            payload: {
                listAllBrigada: listAllBrigada
            }
        })

    }
}