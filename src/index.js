import React from 'react'
import { Provider } from 'react-redux'

import { NavigatorMain } from './navigators/navigatorMain'
import { createStore } from './store'
import { createAppContainer } from 'react-navigation';

const store = createStore()

const AppMainContainer = createAppContainer(NavigatorMain);

const App = () => {
    return (
        <Provider store={store}>
            <AppMainContainer />
        </Provider>
    )
}

export default App