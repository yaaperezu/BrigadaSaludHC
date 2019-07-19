import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore'
import ShowListComponent from './showList.component'

let store = configureStore()

const App = () => (
    <Provider store={store}>
        <ShowListComponent></ShowListComponent>
    </Provider>
)

export default App;