
export default (state = {}, action) => {

    switch (action.type) {  
        case 'CREATE_PACIENTE':
            return {
                listAllPaciente: action.payload.listAllPaciente
            }
        case 'DELETE_PACIENTE':
            return {
                listAllPaciente: action.payload.listAllPaciente
            }
        case 'LIST_ALL_PACIENTE':
            return {
                listAllPaciente: action.payload.listAllPaciente
            }
        default:
            return state
    }
}