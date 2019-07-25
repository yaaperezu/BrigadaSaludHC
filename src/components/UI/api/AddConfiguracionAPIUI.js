import React, { Component } from 'react'
import { View, Alert, ScrollView } from 'react-native'
import { Title, withTheme, Button, TextInput, HelperText } from 'react-native-paper'
import { Dropdown } from 'react-native-material-dropdown'
import styleBrigada from '../../../stylesheets/brigada.stylesheets'
import * as properties from '../../../data/util.conf'

class AddConfiguracionUI extends Component {

    constructor(props) {
        super(props)

        this.state = {
            protocolo: '',
            server: '',
            port: '',
            estado: '',
            validateProtocolo: false,
            validateServer: false,
            validatePort: false,
            validateEstado: false
        }
    }

    componentDidMount() {
        this.props.setNavigationColor(this.props.theme.colors.primary)
    }

    setProtocolo = (protocolo) => {
        this.setState({
            protocolo,
            validateProtocolo: true
        })
    }

    setServer = (server) => {
        this.setState({
            server,
            validateServer: true
        })
    }

    setPort = (port) => {
        this.setState({
            port,
            validatePort: true
        })
    }

    setEstado = (estado) => {
        this.setState({
            estado,
            validateEstado: true
        })
    }

    esInvalidoProtocolo = () => {
        let invalido = false
        if (this.state.validateProtocolo) {
            if (this.state.protocolo === '') {
                invalido = true
            }
        }
        return invalido
    }

    esInvalidoServer = () => {
        let valid = false
        if (this.state.validateServer) {
            if (this.state.server === '' || this.state.server.length <= 3) {
                valid = true
            }
        }
        return valid
    }

    esInvalidoPort = () => {
        let valid = false
        if (this.state.validatePort) {
            if (this.state.port === '') {
                valid = true
            }
        }
        return valid
    }

    esFormValido = () => {
        let valid = true
        if (this.state.protocolo === '') {
            return false
        } else if (this.state.server === '' || this.state.server.length <= 3) {
            return false
        } else if (this.state.port === '') {
            return false
        } else if (this.state.estado === '') {
            return false
        }
        return valid
    }

    registrarConfAPI = () => {
        this.setState({
            validateProtocolo: true,
            validateServer: true,
            validatePort: true
        })
        if (this.esFormValido()) {
            this.props.registrarConfAPI(this.state)
        } else {
            Alert.alert('Advertencia', 'Por favor valide los datos del formulario', [{
                text: 'Ok'
            }]);
        }
    }

    render() {
        return (
            <ScrollView style={styleBrigada.container}>

                <Title style={{ fontFamily: this.props.theme.fonts.medium }}>Configuración API</Title>

                <Dropdown
                    containerStyle={styleBrigada.formControlDropdown}
                    label='Protocolo'
                    data={properties.protocoloProperties()}
                    onChangeText={(protocolo) => this.setProtocolo({ protocolo })}
                />
                <HelperText
                    type="error"
                    visible={this.esInvalidoProtocolo()}>
                    El protocolo es requerido
                </HelperText>

                <TextInput
                    style={styleBrigada.formControl}
                    label="Servidor"
                    autoCapitalize="none"
                    value={this.state.server}
                    onChangeText={(server) => this.setServer(server)}
                />
                <HelperText
                    type="error"
                    visible={this.esInvalidoServer()}>
                    El servidor es requerida
                </HelperText>

                <TextInput
                    style={styleBrigada.formControl}
                    label="Puerto"
                    autoCapitalize="none"
                    value={this.state.port}
                    onChangeText={(port) => this.setPort(port)}
                />
                <HelperText
                    type="error"
                    visible={this.esInvalidoPort()}>
                    El puesto es requerido
                </HelperText>

                <Dropdown
                    containerStyle={styleBrigada.formControlDropdown}
                    label='Estado'
                    data={properties.estadoRegistroProperties()}
                    onChangeText={(estado) => this.setEstado({ estado })}
                />
                <HelperText
                    type="error"
                    visible={this.esInvalidoProtocolo()}>
                    El estado es requerido
                </HelperText>

                <View style={{ height: 20 }} />

                <Button mode="contained"
                    style={styleBrigada.formControlButton}
                    color={this.props.theme.colors.accent}
                    onPress={() => this.registrarConfAPI(this.state)}>
                    Guardar
                </Button>
                <Button mode="text"
                    style={styleBrigada.formControlButton}
                    color={this.props.theme.colors.accent}
                    onPress={() => this.props.goConfAppNavigator()}>
                    Cancelar
                </Button>

                <View style={{ height: 20 }} />

            </ScrollView>
        )
    }
}

export default withTheme(AddConfiguracionUI)