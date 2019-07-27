import { combineReducers } from 'redux'
import user from './user'
import confApi from './confApi'

export default combineReducers({
    user,
    confApi
})
