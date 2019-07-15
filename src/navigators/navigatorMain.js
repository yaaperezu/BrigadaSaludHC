import { LoginScreen } from '../screens/LoginScreen';
import { AuthLoadingScreen } from '../screens/AuthLoadingScreen';

import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

export const LoginStack = createStackNavigator({ LoginIn: LoginScreen });

export const NavigatorMain = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: LoginStack,
        Auth: LoginStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);