import {
    createStore as _createStore,
    applyMiddleware,
    combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import { reducers, actions } from './modules'

// Apply thunk middleware
const middleware = applyMiddleware(thunk)

const createStore = (data: Object = {}) => {
    return _createStore(combineReducers(reducers), data, middleware)
}

export { createStore, actions }