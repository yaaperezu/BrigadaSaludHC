
export default (state = {}, action) => {

    switch (action.type) {
        case 'LOGIN':
            return {
                usuarioAut: action.usuarioAut
            }
        case 'LOGOUT':
            return {
                usuarioAut: null,
                listAllUser: null
            }
        case 'CREATE_USER':
            return {
                listAllUser: action.payload.listAllUser
            }
        case 'DELETE_USER':
            return {
                listAllUser: action.payload.listAllUser
            }
        case 'LIST_ALL_USER':
            return {
                listAllUser: action.payload.listAllUser
            }
        default:
            return state
    }
}