import { LoginScreen } from '../screens/LoginScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { AuthLoadingScreen } from '../screens/AuthLoadingScreen'

import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

export const LoginStack = createStackNavigator({ 
    LoginIn: LoginScreen 
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
});
export const HomeStack = createStackNavigator({ Home: HomeScreen });

export const NavigatorMain = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Home: HomeStack,
        Auth: LoginStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);