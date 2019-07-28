import { combineReducers } from 'redux'
import user from './user'
import confApi from './confApi'
import brigada from './brigada'

export default combineReducers({
    user,
    confApi,
    brigada
})
