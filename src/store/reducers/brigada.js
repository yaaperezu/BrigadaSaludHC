
export default (state = {}, action) => {

    switch (action.type) {
        case 'CREATE_BRIGADA':
            return {
                listAllBrigada: action.payload.listAllBrigada
            }
        case 'DELETE_BRIGADA':
            return {
                listAllBrigada: action.payload.listAllBrigada
            }
        case 'LIST_ALL_BRIGADA':
            return {
                listAllBrigada: action.payload.listAllBrigada
            }
        default:
            return state
    }
}