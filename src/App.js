import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './configureStore'
import ShowListComponent from './components/show/showList.component'

let store = configureStore()

const App = () => (
    <Provider store={store}>
        <ShowListComponent></ShowListComponent>
    </Provider>
)

export default App;