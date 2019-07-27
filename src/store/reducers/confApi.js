
export default (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case 'CREATE_CONF':
            return {
                listAllConfAPI: action.payload.listAllConfAPI
            }
        case 'LIST_ALL_CONFIG':
            return {
                listAllConfAPI: action.payload.listAllConfAPI
            }
        default:
            return state
    }
}