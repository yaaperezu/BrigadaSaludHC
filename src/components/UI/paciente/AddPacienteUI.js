import React, { Component } from 'react'
import {
    View,
    ScrollView,
    Alert
} from 'react-native'
import { TextInput, Button, Title, withTheme, HelperText } from 'react-native-paper'
import stylePaciente from '../../../stylesheets/paciente.stylesheets'
import { Dropdown } from 'react-native-material-dropdown'
import * as properties from '../../../data/util.conf'

class AddPacienteUI extends Component {

    constructor(props) {
        super(props)

        this.state = {
            idPaciente: 0,
            tipoDoc: { tipoDoc: 'Cédula de Ciudadanía' },
            tipoDocDefault: 'Cédula de Ciudadanía',
            numeroDocumento: '',
            nombre: '',
            apellido: '',
            genero: { genero: 'Masculino' },
            generoDefault: 'Masculino',
            fechaNaciemiento: (new Date()).toJSON(),
            ocupacion: '',
            nacionalidad: '',
            seguridadSocial: '',
            cualSS: '',
            barrioVive: '',
            numeroTelefono: '',
            acudiente: '',
            validateTipoDoc: false,
            validateNumeroDocumento: false,
            validateNombre: false,
            validateApellido: false,
            validateGenero: false,
            validateFechaNaciemiento: false,
            validateOcupacion: false,
            validateNacionalidad: false,
            validateSeguridadSocial: false,
            validateCualSS: false,
            validateBarrioVive: false,
            validateNumeroTelefono: false,
            validateAcudiente: false,
        }

        this.preCargarValoresForm()
    }

    componentDidMount() {
        this.props.setNavigationColor(this.props.theme.colors.primary)
    }

    preCargarValoresForm = () => {
        if (this.props.pacienteParam !== null) {
            this.state = {
                idPaciente: this.props.pacienteParam.id,
                tipoDoc: { tipoDoc: this.props.pacienteParam.tipoDoc },
                tipoDocDefault: this.props.pacienteParam.tipoDoc,
                numeroDocumento: this.props.pacienteParam.numeroDocumento,
                nombre: this.props.pacienteParam.nombre,
                apellido: this.props.pacienteParam.apellido,
                genero: { genero: this.props.pacienteParam.genero },
                generoDefault: this.props.pacienteParam.genero,
                validateTipoDoc: true,
                validateNumeroDocumento: true,
                validateNombre: true,
                validateApellido: true,
                validateGenero: true,
                validateFechaNaciemiento: true,
                validateOcupacion: true,
                validateNacionalidad: true,
                validateSeguridadSocial: true,
                validateCualSS: true,
                validateBarrioVive: true,
                validateNumeroTelefono: true,
                validateAcudiente: true
            }
        }
    }

    setTipoDoc = (tipoDoc) => {
        this.setState({
            tipoDoc,
            validateTipoDoc: true,
            validateNumeroDocumento: true
        })
    }

    setNumeroDocumento = (numeroDocumento) => {
        this.setState({
            numeroDocumento,
            validateTipoDoc: true,
            validateNumeroDocumento: true
        })
    }

    setNombre = (nombre) => {
        this.setState({
            nombre,
            validateNombre: true
        })
    }

    setApellido = (apellido) => {
        this.setState({
            apellido,
            validateApellido: true
        })
    }

    setGenero = (genero) => {
        this.setState({
            genero,
            validateGenero: true
        })
    }

    esInvalidoTipodoc = () => {
        let invalido = false
        if (this.state.validateTipoDoc) {
            if (this.state.tipoDoc === '') {
                invalido = true
            }
        }
        return invalido
    }

    esInvalidoNumeroDocumento = () => {
        let valid = false
        if (this.state.validateNumeroDocumento) {
            if (this.state.numeroDocumento === '' || this.state.numeroDocumento.length <= 3) {
                valid = true
            }
        }
        return valid
    }

    esInvalidoNombre = () => {
        let valid = false
        if (this.state.validateNombre) {
            if (this.state.nombre === '' || this.state.nombre.length <= 3) {
                valid = true
            }
        }
        return valid
    }

    esInvalidoApellido = () => {
        let valid = false
        if (this.state.validateApellido) {
            if (this.state.apellido === '' || this.state.apellido.length <= 3) {
                valid = true
            }
        }
        return valid
    }

    esInvalidoGenero = () => {
        let valid = false
        if (this.state.validateGenero) {
            if (this.state.genero === '') {
                valid = true
            }
        }
        return valid
    }

    esFormValido = () => {
        let valid = true
        if (this.state.tipoDoc === '') {
            return false
        } else if (this.state.numeroDocumento === '' || this.state.numeroDocumento.length <= 3) {
            return false
        } else if (this.state.nombre === '' || this.state.nombre.length <= 3) {
            return false
        } else if (this.state.apellido === '' || this.state.apellido.length <= 3) {
            return false
        } else if (this.state.genero === '') {
            return false
        }
        return valid
    }

    registrarPaciente = () => {
        this.setState({
            validateTipoDoc: true,
            validateNumeroDocumento: true,
            validateNombre: true,
            validateApellido: true,
            validateGenero: true,
            validateFechaNaciemiento: true,
            validateOcupacion: true,
            validateNacionalidad: true,
            validateSeguridadSocial: true,
            validateCualSS: true,
            validateBarrioVive: true,
            validateNumeroTelefono: true,
            validateAcudiente: true
        })
        if (this.esFormValido()) {
            this.props.registrarPaciente(this.state)
        } else {
            Alert.alert('Advertencia', 'Por favor valide los datos del formulario', [{
                text: 'Ok'
            }]);
        }
    }

    render() {
        return (
            <ScrollView style={stylePaciente.container}>
                <Title style={{ fontFamily: this.props.theme.fonts.medium }}>Datos del Paciente</Title>

                <Dropdown
                    containerStyle={stylePaciente.formControlDropdown}
                    label='Tipo de Documento'
                    data={properties.tipoDocProperties()}
                    value={this.state.tipoDocDefault}
                    onChangeText={(tipoDoc) => this.setTipoDoc({ tipoDoc })}
                />
                <HelperText
                    type="error"
                    visible={this.esInvalidoTipodoc()}>
                    El tipo de documento es requerido
                </HelperText>

                <TextInput
                    style={stylePaciente.formControl}
                    label="Documento de Identidad"
                    autoCapitalize="none"
                    value={this.state.numeroDocumento}
                    onChangeText={(numeroDocumento) => this.setNumeroDocumento(numeroDocumento)}
                />
                <HelperText
                    type="error"
                    visible={this.esInvalidoNumeroDocumento()}>
                    Registre un documento valido
                </HelperText>

                <TextInput
                    style={stylePaciente.formControl}
                    label="Nombres"
                    autoCapitalize="none"
                    value={this.state.nombres}
                    onChangeText={(nombres) => this.setNombre(nombres)}
                />
                <HelperText
                    type="error"
                    visible={this.esInvalidoNombre()}>
                    El nombre es requerido
                </HelperText>

                <TextInput
                    style={stylePaciente.formControl}
                    label="Apellidos"
                    autoCapitalize="none"
                    value={this.state.apellido}
                    onChangeText={(apellidos) => this.setApellido(apellidos)}
                />
                <HelperText
                    type="error"
                    visible={this.esInvalidoApellido()}>
                    El apellido es requerido
                </HelperText>

                <Dropdown
                    containerStyle={stylePaciente.formControlDropdown}
                    label='Genero'
                    data={properties.generoProperties()}
                    value={this.state.generoDefault}
                    onChangeText={(genero) => this.setGenero({ genero })}
                />
                <HelperText
                    type="error"
                    visible={this.esInvalidoGenero()}>
                    El genero es requerido
                </HelperText>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    ...stylePaciente.formControl
                }} />

                <Button mode="contained"
                    style={stylePaciente.formControlButton}
                    color={this.props.theme.colors.accent}
                    onPress={() => this.registrarPaciente()}>
                    Guardar
                </Button>
                <Button mode="text"
                    style={stylePaciente.formControlButton}
                    color={this.props.theme.colors.accent}
                    onPress={() => this.props.cancelAddPaciente()}>
                    Cancelar
                </Button>

                <View style={{ height: 20 }} />
            </ScrollView>
        )
    }
}

export default withTheme(AddPacienteUI)