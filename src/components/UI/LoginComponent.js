import React from 'react'
import { View, Text } from 'react-native'
import { withTheme } from 'react-native-paper'


let LoginComponent = (props) => {
    return (
        <view>
            <Text>Hola mundo</Text>
        </view>
    );
}

export default withTheme(LoginComponent)