import React, { Component } from 'react'
import { View, Alert, ScrollView } from 'react-native'
import { Title, withTheme, Button, TextInput, HelperText } from 'react-native-paper';
import styleBrigada from '../../../stylesheets/brigada.stylesheets'

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
            validatePort: false
        }
    }

    componentDidMount() {
        this.props.setNavigationColor(this.props.theme.colors.primary)
    }

    setDescripcion = (descripcion) => {
        this.setState({
            descripcion,
            validateTipoDoc: true,
            validateDocumento: true
        })
    }

    setLugar = (lugar) => {
        this.setState({
            lugar,
            validateLugar: true
        })
    }

    setCiudad = (ciudad) => {
        this.setState({
            ciudad,
            validateCiudad: true
        })
    }

    esInvalidoDescripcion = () => {
        let invalido = false
        if (this.state.validateDescripcion) {
            if (this.state.descripcion === '') {
                invalido = true
            }
        }
        return invalido
    }

    esInvalidoLugar = () => {
        let valid = false
        if (this.state.validateLugar) {
            if (this.state.lugar === '' || this.state.lugar.length <= 3) {
                valid = true
            }
        }
        return valid
    }

    esInvalidoCiudad = () => {
        let valid = false
        if (this.state.validateCiudad) {
            if (this.state.ciudad === '' || this.state.ciudad.length <= 3) {
                valid = true
            }
        }
        return valid
    }

    esFormValido = () => {
        let valid = true
        if (this.state.descripcion === '') {
            return false
        } else if (this.state.lugar === '' || this.state.lugar.length <= 3) {
            return false
        } else if (this.state.ciudad === '' || this.state.ciudad.length <= 3) {
            return false
        }
        return valid
    }

    registraBrigada = () => {
        this.setState({
            validateDescripcion: true,
            validateLugar: true,
            validateCiudad: true
        })
        if (this.esFormValido()) {
            this.props.registrarBrigada(this.state)
        } else {
            Alert.alert('Advertencia', 'Por favor valide los datos del formulario', [{
                text: 'Ok'
            }]);
        }
    }

    render() {
        return (
            <ScrollView style={styleBrigada.container}>

                <Title style={{ fontFamily: this.props.theme.fonts.medium }}>Datos de la Brigada</Title>

                <TextInput
                    style={styleBrigada.formControl}
                    label="Descripción"
                    autoCapitalize="none"
                    value={this.state.descripcion}
                    onChangeText={(descripcion) => this.setDescripcion(descripcion)}
                />
                <HelperText
                    type="error"
                    visible={this.esInvalidoDescripcion()}>
                    La descripción es requerida
                </HelperText>

                <TextInput
                    style={styleBrigada.formControl}
                    label="Lugar"
                    autoCapitalize="none"
                    value={this.state.lugar}
                    onChangeText={(lugar) => this.setLugar(lugar)}
                />
                <HelperText
                    type="error"
                    visible={this.esInvalidoLugar()}>
                    El lugar es requerido
                </HelperText>

                <TextInput
                    style={styleBrigada.formControl}
                    label="Ciudad"
                    autoCapitalize="none"
                    value={this.state.ciudad}
                    onChangeText={(ciudad) => this.setCiudad(ciudad)}
                />
                <HelperText
                    type="error"
                    visible={this.esInvalidoCiudad()}>
                    La ciudad es requerida
                </HelperText>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    ...styleBrigada.formControl
                }} />

                <View style={{ height: 20 }} />

                <Button mode="contained"
                    style={styleBrigada.formControlButton}
                    color={this.props.theme.colors.accent}
                    onPress={() => this.registraBrigada(this.state)}>
                    Guardar
                </Button>
                <Button mode="text"
                    style={styleBrigada.formControlButton}
                    color={this.props.theme.colors.accent}
                    onPress={() => this.props.goBrigadaNavigator()}>
                    Cancelar
                </Button>

                <View style={{ height: 20 }} />

            </ScrollView>
        )
    }
}

export default withTheme(AddConfiguracionUI)