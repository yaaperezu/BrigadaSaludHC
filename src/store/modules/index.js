import { user } from './user'
import { app } from './app'
import { confApi } from './api'

export const reducers = {
    app: app.reducer,
    user: user.reducer,
    confApi: confApi.reducer
}

export const actions = {
    app: app.actions,
    user: user.actions,
    confApi: confApi.actions
}

export {
    app,
    user,
    confApi
}