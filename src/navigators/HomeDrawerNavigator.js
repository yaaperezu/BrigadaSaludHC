import React from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons'
import UserScreen from '../screens/user/UserScreen'
import AddUserScreen from '../screens/user/AddUserScreen'
import BrigadaScreen from '../screens/brigada/BrigadaScreen'
import AddBrigadaScreen from '../screens/brigada/AddBrigadaScreen'
import ConfiguracionAPIScreen from '../screens/api/ConfiguracionAPIScreen'
import AddConfiguracionAPIScreen from '../screens/api/AddConfiguracionAPIScreen'
import SincronizacionScreen from '../screens/sincronizacion/SincronizacionScreen'

const UserStackNavigator = createStackNavigator(
    {
        UserNavigator: UserScreen,
        AddUser: AddUserScreen
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
        ConfAPINavigator: ConfiguracionAPIScreen,
        AddConfiguracionAPI: AddConfiguracionAPIScreen
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
        screen: UserStackNavigator
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

