import { LoginScreen } from '../screens/LoginScreen'
import { CreateUserScreen } from '../screens/user/CreateUserScreen'
import { AuthLoadingScreen } from '../screens/AuthLoadingScreen'
import TabHomeNavigator from '../navigators/TabHomeNavigator';

import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

export const LoginStack = createStackNavigator({ 
    LoginIn: LoginScreen,
    CreateUser: CreateUserScreen
},{
    defaultNavigationOptions: ({navigation}) => {
        return {
            title: 'Brigada de Salud',
            headerStyle: {
                backgroundColor: 'red'
            }, 
            headerTitleStyle: {
                color: 'white'
            }
        }
    }
}, {
    initialRouteName: 'LoginIn'
});

export const NavigatorMain = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: LoginStack,
        Home: TabHomeNavigator
    },
    {
        initialRouteName: 'AuthLoading',
    }
);