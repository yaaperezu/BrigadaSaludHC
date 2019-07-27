
export default (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case 'LOGIN':
            return action.user
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}