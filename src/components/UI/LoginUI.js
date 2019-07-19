import React, { Component } from 'react'
import {
    View,
    Image
} from 'react-native'
import { TextInput, Button, Title, withTheme } from 'react-native-paper'
import stylesLogin from '../../stylesheets/login.stylesheets'


class LoginUI extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'admin',
            password: 'secret'
        }
    }
    
    componentDidMount() {
        this.props.setNavigationColor(this.props.theme.colors.primary)
    }

    render() {
        return (
            <View style={stylesLogin.container}>
                <Image
                    style={stylesLogin.logoKeraltyImage}
                    source={require('../../assets/images/logo-family.jpg')} />
    
                <Title style={{fontFamily: this.props.theme.fonts.medium}}>Historia Clínica</Title>
    
                <TextInput
                    style={stylesLogin.formControl}
                    label="Nombre Usuario"
                    autoCapitalize="none"
                    value={this.state.username}
                    onChangeText={(text) => this.props.setUserName(text)} />
    
                <TextInput
                    style={stylesLogin.formControl}
                    label="Contraseña"
                    autoCapitalize="none"
                    value={this.state.password}
                    onChangeText={(text) => this.props.setPassword(text)}
                    secureTextEntry={true} />
    
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    ...stylesLogin.formControl
                }} />
    
                <Button mode="contained" 
                    color={this.props.theme.colors.accent}
                    onPress={() => this.props.authenticateUser()}>
                    Ingresar
                </Button>
            </View>
        )
    }
    
}

export default withTheme(LoginUI)