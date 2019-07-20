import React, { Component } from 'react'
import {
    View,
    Image
} from 'react-native'
import { TextInput, Button, Title, withTheme } from 'react-native-paper'
import stylesUser from '../../../stylesheets/createUser.stylesheets'

class CreateUserUI extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            tipoDoc: '',
            document: '',
            names: '',
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
            <View style={stylesUser.container}>

                <Title style={{ fontFamily: this.props.theme.fonts.medium }}>Datos del Usuario</Title>

                <TextInput
                    style={stylesUser.formControl}
                    label="Nombre Usuario"
                    autoCapitalize="none"
                    value={this.state.username}
                    onChangeText={(text) => this.setUserName(text)} />

                <TextInput
                    style={stylesUser.formControl}
                    label="Contraseña"
                    autoCapitalize="none"
                    value={this.state.password}
                    onChangeText={(text) => this.setPassword(text)}
                    secureTextEntry={true} />

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        ...stylesUser.formControl
                    }} />

                <Button mode="contained"
                    color={this.props.theme.colors.accent}
                    onPress={() => this.props.createUser(this.state)}>
                    Guardar
                </Button>
                <Button mode="text"
                    color={this.props.theme.colors.accent}
                    onPress={() => this.props.cancelCreateUser()}>
                    Cancelar
                </Button>

            </View>
        )
    }
}

export default withTheme(CreateUserUI)