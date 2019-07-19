import React from 'react'
import { Provider as StoreProvider } from 'react-redux'

import { NavigatorMain } from './navigators/navigatorMain'
import { createStore } from './store'
import { createAppContainer } from 'react-navigation'

import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3BFF0F',
        accent: '#1CA3FF'
    }
}

const store = createStore()

const AppMainContainer = createAppContainer(NavigatorMain);

const App = () => {
    return (
        <PaperProvider theme={MyTheme}>
            <StoreProvider store={store}>
                <AppMainContainer />
            </StoreProvider>
        </PaperProvider>
    )
}

export default App