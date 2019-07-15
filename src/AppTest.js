import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { NavigatorApp } from './navigators/navigatorMain'
import store from './store';
import { createAppContainer } from "react-navigation";

const AppContainer = createAppContainer(NavigatorApp);

const App = () => {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <AppContainer />
            </View>
        </Provider>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});