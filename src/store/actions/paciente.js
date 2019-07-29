import ConexionRealm from '../../data'
import * as SchemaBD from '../../data/schemas'

export const registrarPaciente = (paciente) => {
    console.log('::::::::: ACTIONS registrarPaciente  ::::::::')
    return dispatch => {

        try {
            let pacienteModelNew = new SchemaBD.PacienteModel();
            pacienteModelNew.tipoDoc = paciente.tipoDoc.tipoDoc
            pacienteModelNew.numeroDocumento = paciente.numeroDocumento
            pacienteModelNew.nombre = paciente.nombre
            pacienteModelNew.apellido = paciente.apellido
            pacienteModelNew.genero = paciente.genero
            pacienteModelNew.fechaNaciemiento = paciente.fechaNaciemiento
            pacienteModelNew.ocupacion = paciente.ocupacion
            pacienteModelNew.nacionalidad = paciente.nacionalidad
            pacienteModelNew.seguridadSocial = paciente.seguridadSocial
            pacienteModelNew.cualSS = paciente.cualSS
            pacienteModelNew.barrioVive = paciente.barrioVive
            pacienteModelNew.numeroTelefono = paciente.numeroTelefono
            pacienteModelNew.acudiente = paciente.acudiente
            
            pacienteModelNew.createdAt = new Date();
            pacienteModelNew.updatedAt = new Date();

            ConexionRealm.write(() => {
                if (paciente.idPaciente === 0) {
                    let pacientesApp = ConexionRealm.objects('Paciente').sorted('id', true)
                    var ID = pacientesApp.length > 0 ? pacientesApp[0].id + 1 : 1;

                    pacienteModelNew.id = ID;
                    console.log('CREATE')
                    console.log(pacienteModelNew)
                    ConexionRealm.create('Paciente', pacienteModelNew);
                } else {
                    console.log('UPDATE')
                    console.log(pacienteModelNew)
                    pacienteModelNew.id = paciente.idPaciente
                    pacienteModelNew.updatedAt = new Date();
                    pacienteModelNew.create('Paciente', pacienteModelNew, true);
                }

            });

            let listAllPaciente = ConexionRealm.objects('Paciente')
            dispatch({
                type: 'CREATE_PACIENTE',
                payload: {
                    listAllPaciente: listAllPaciente
                }
            })
        } catch (e) {
            console.log(e)
            return false
        }

    }
}

export const deletePaciente = (paciente) => {
    return dispatch => {

        try {
            ConexionRealm.write(() => {
                ConexionRealm.delete(paciente);
            });

            let listAllPaciente = ConexionRealm.objects('Paciente').sorted('id', true)
            dispatch({
                type: 'DELETE_PACIENTE',
                payload: {
                    listAllPaciente: listAllPaciente
                }
            })
        } catch (e) {
            console.log(e)
            return false
        }

    }
}

export const listarAllPaciente = () => {
    return dispatch => {

        let listAllPaciente = ConexionRealm.objects('Paciente').sorted('id', true)
        dispatch({
            type: 'LIST_ALL_PACIENTE',
            payload: {
                listAllPaciente: listAllPaciente
            }
        })

    }
}

export const busqPaciente = (nombrePaciente) => {
    return dispatch => {

        let listAllPaciente = ConexionRealm.objects('Paciente').sorted('id', true).filtered("nombre BEGINSWITH '" + nombrePaciente + "'")
        dispatch({
            type: 'LIST_ALL_PACIENTE',
            payload: {
                listAllPaciente: listAllPaciente
            }
        })

    }
}