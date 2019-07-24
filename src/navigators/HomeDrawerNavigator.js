import React from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons'
import { GetUserScreen } from '../screens/user/GetUserScreen'
import { BrigadaScreen } from '../screens/brigada/BrigadaScreen'
import { AddBrigadaScreen } from '../screens/brigada/AddBrigadaScreen'
import { ConfiguracionAPIScreen } from '../screens/api/Configuracion'
import { SincronizacionScreen } from '../screens/sincronizacion/SincronizacionScreen'

const HomeStackNavigator = createStackNavigator(
    {
        GetUserNavigator: GetUserScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="ios-menu"
                        size={28}
                        color="white"
                    />

                ),
                headerRight: (
                    <Icon
                        style={{ paddingRight: 20 }}
                        onPress={() => navigation.navigate('Home')}
                        name="ios-close"
                        size={28}
                        color="white"
                    />
                )
            };
        }
    }
)

const BriadaStackNavigator = createStackNavigator(
    {
        BrigadaNavigator: BrigadaScreen,
        AddBrigada: AddBrigadaScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="ios-menu"
                        size={28}
                        color="white"
                    />

                ),
                headerRight: (
                    <Icon
                        style={{ paddingRight: 20 }}
                        onPress={() => navigation.navigate('Home')}
                        name="ios-close"
                        size={28}
                        color="white"
                    />
                )
            };
        }
    }
)

const ConfAPIStackNavigator = createStackNavigator(
    {
        ConfAPINavigator: ConfiguracionAPIScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="ios-menu"
                        size={28}
                        color="white"
                    />

                ),
                headerRight: (
                    <Icon
                        style={{ paddingRight: 20 }}
                        onPress={() => navigation.navigate('Home')}
                        name="ios-close"
                        size={28}
                        color="white"
                    />
                )
            };
        }
    }
)

const SincronizacioStacknNavigator = createStackNavigator(
    {
        SincronizacionNavigator: SincronizacionScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="ios-menu"
                        size={28}
                        color="white"
                    />

                ),
                headerRight: (
                    <Icon
                        style={{ paddingRight: 20 }}
                        onPress={() => navigation.navigate('Home')}
                        name="ios-close"
                        size={28}
                        color="white"
                    />
                )
            };
        }
    }
)


export default createDrawerNavigator({
    Usuarios: {
        screen: HomeStackNavigator
    },
    Brigada: {
        screen: BriadaStackNavigator
    },
    'Configuración API': {
        screen: ConfAPIStackNavigator
    },
    'Sincronizar Información': {
        screen: SincronizacioStacknNavigator
    }
}, {
    initialRouteName: 'Usuarios'
});

