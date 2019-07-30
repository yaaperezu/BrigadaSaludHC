import React, { Component } from 'react'
import {
    View,
    ScrollView,
    Image,
    Alert
} from 'react-native'
import { TextInput, Button, Title, withTheme, HelperText } from 'react-native-paper'
import stylesLogin from '../../stylesheets/login.stylesheets'


class LoginUI extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'yaaperez',
            password: '0627Yasser',
            validateUsername: false,
            validatePassword: false
        }
    }

    componentDidMount() {
        this.props.setNavigationColor(this.props.theme.colors.primary)
    }

    setUserName = (username) => {
        this.setState({
            username,
            validateUsername: true
        })
    }

    setPassword = (password) => {
        this.setState({
            password,
            validatePassword: true
        })
    }

    esInvalidoUserName = () => {
        let valid = false
        if (this.state.validateUsername) {
            if (this.state.username === '' || this.state.username.indexOf(" ") > 0) {
                valid = true
            } else if (this.state.username.length <= 5) {
                valid = true
            }
        }
        return valid
    }

    esInvalidoPassword = () => {
        let valid = false
        if (this.state.validatePassword) {
            if (this.state.password === '' || this.state.password.length < 6) {
                valid = true
            }
        }
        return valid
    }

    esFormValido = () => {
        let valid = true
        if (this.state.username === '' || this.state.username.indexOf(" ") > 0) {
            return false
        } else if (this.state.username.length <= 5) {
            return false
        } else if (this.state.password === '' || this.state.password.length < 6) {
            return false
        }
        return valid
    }

    authenticateUser = () => {
        this.setState({
            validateUsername: true,
            validatePassword: true
        })
        if (this.esFormValido()) {
            this.props.authenticateUser({ username: this.state.username, password: this.state.password })
        } else {
            Alert.alert('Advertencia', 'Por favor ingrese los datos para la autenticación', [{
                text: 'Ok'
            }]);
        }
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                
                <Image source={require('../../assets/images/computer-hc-brigada.jpg')}
                    style={stylesLogin.containerImage} />

                <View style={stylesLogin.container}>

                    <Title style={{ fontFamily: this.props.theme.fonts.thin, color: this.props.theme.colors.primary, ...stylesLogin.titleHC }}
                        >Historia Clínica</Title>

                    <TextInput
                        style={stylesLogin.formControl}
                        label="Nombre Usuario"
                        autoCapitalize="none"
                        value={this.state.username}
                        onChangeText={(text) => this.setUserName(text)} 
                        textContentType="emailAddress"
                        keyboardType="email-address"/>
                    <HelperText
                        type="error"
                        visible={this.esInvalidoUserName()}>
                        El Usuario es requerido de minimo 5 caracteres y sin espacios
                    </HelperText>

                    <TextInput
                        style={stylesLogin.formControl}
                        label="Contraseña"
                        autoCapitalize="none"
                        value={this.state.password}
                        onChangeText={(text) => this.setPassword(text)} 
                        textContentType="password"
                        secureTextEntry={true} />
                    <HelperText
                        type="error"
                        visible={this.esInvalidoPassword()}>
                        La contraseña es requerida de minimo 6 caracteres
                    </HelperText>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        ...stylesLogin.formControl
                    }} />

                    <Button mode="contained"
                        style={stylesLogin.formControlButton}
                        icon="send"
                        color={this.props.theme.colors.accent}
                        onPress={() => this.authenticateUser()}>
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