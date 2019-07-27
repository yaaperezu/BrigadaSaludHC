import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import store from './store'
import { createAppContainer } from 'react-navigation'
import { NavigatorMain } from './navigators/NavigatorMain'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'

const MyTheme = {
    ...DefaultTheme,
    dark: true,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#77C742',
        accent: '#2D66FA',
    }
}

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