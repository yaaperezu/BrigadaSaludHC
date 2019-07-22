import React, { Component } from 'react'
import {
    View,
    ScrollView,
    Image
} from 'react-native'
import { TextInput, Button, Title, withTheme } from 'react-native-paper'
import stylesLogin from '../../stylesheets/login.stylesheets'


class LoginUI extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        this.props.setNavigationColor(this.props.theme.colors.primary)
    }

    setUserName = (username) => {
        this.setState({
            username
        })
    }

    setPassword = (password) => {
        this.setState({
            password
        })
    }

    render() {
        return (
            <ScrollView style={{flex:1}}>
                <Image source={require('../../assets/images/logo-family.jpg')}
                    style={stylesLogin.containerImage} />

                <View style={stylesLogin.container}>

                    <Title style={{ fontFamily: this.props.theme.fonts.thin, ...stylesLogin.titleHC }}>Historia Clínica</Title>

                    <TextInput
                        style={stylesLogin.formControl}
                        label="Nombre Usuario"
                        autoCapitalize="none"
                        value={this.state.username}
                        onChangeText={(text) => this.setUserName(text)} />

                    <TextInput
                        style={stylesLogin.formControl}
                        label="Contraseña"
                        autoCapitalize="none"
                        value={this.state.password}
                        onChangeText={(text) => this.setPassword(text)}
                        secureTextEntry={true} />

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        ...stylesLogin.formControl
                    }} />

                    <Button mode="contained" 
                        style={stylesLogin.formControlButton}
                        icon="send"
                        color={this.props.theme.colors.accent}
                        onPress={() => this.props.authenticateUser({username: this.state.username, password: this.state.password})}>
                        Iniciar sesión
                    </Button>

                    <Button mode="text"
                        style={stylesLogin.formControlButton}
                        color={this.props.theme.colors.accent}
                        onPress={() => this.props.goCreateUser()}>
                        Registrarme
                    </Button>
                </View>
            </ScrollView>

        )
    }

}

export default withTheme(LoginUI)