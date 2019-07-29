import { combineReducers } from 'redux'
import user from './user'
import confApi from './confApi'
import brigada from './brigada'
import paciente from './paciente'

export default combineReducers({
    user,
    confApi,
    brigada,
    paciente
})
