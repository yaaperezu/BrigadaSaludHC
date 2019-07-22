import React, { Component } from 'react'
import {
    View,
    ScrollView,
    Alert
} from 'react-native'
import { TextInput, Button, Title, withTheme, HelperText } from 'react-native-paper'
import stylesUser from '../../../stylesheets/createUser.stylesheets'
import { Dropdown } from 'react-native-material-dropdown'
import * as properties from '../../../data/user.conf'


class CreateUserUI extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tipoDoc: '',
            documento: '',
            nombres: '',
            apellidos: '',
            genero: '',
            especialidad: '',
            username: '',
            password: '',
            validateUsername: false,
            validateTipoDoc: false,
            validateDocumento: false,
            validateNombres: false,
            validateApellidos: false,
            validateGenero: false,
            validateEspecialidad: false,
            validatePassword: false

        }
    }

    componentDidMount() {
        this.props.setNavigationColor(this.props.theme.colors.primary)
    }

    setTipoDoc = (tipoDoc) => {
        this.setState({
            tipoDoc,
            validateTipoDoc: true,
            validateDocumento: true
        })
    }

    setDocumento = (documento) => {
        this.setState({
            documento,
            validateTipoDoc: true,
            validateDocumento: true
        })
    }

    setNombres = (nombres) => {
        this.setState({
            nombres,
            validateNombres: true
        })
    }

    setApellidos = (apellidos) => {
        this.setState({
            apellidos,
            validateApellidos: true
        })
    }

    setGenero = (genero) => {
        this.setState({
            genero,
            validateGenero: true
        })
    }

    setEspecialidad = (especialidad) => {
        this.setState({
            especialidad,
            validateEspecialidad: true
        })
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

    esInvalidoTipodoc = () => {
        let invalido = false
        if (this.state.validateTipoDoc) {
            if (this.state.tipoDoc === '') {
                invalido = true
            }
        }
        return invalido
    }

    esInvalidoDocumento = () => {
        let valid = false
        if (this.state.validateDocumento) {
            if (this.state.documento === '' || this.state.documento.length <= 3) {
                valid = true
            }
        }
        return valid
    }

    esInvalidoNombre = () => {
        let valid = false
        if (this.state.validateNombres) {
            if (this.state.nombres === '' || this.state.nombres.length <= 3) {
                valid = true
            }
        }
        return valid
    }

    esInvalidoApellido = () => {
        let valid = false
        if (this.state.validateApellidos) {
            if (this.state.apellidos === '' || this.state.apellidos.length <= 3) {
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

    esInvalidoEspecialidad = () => {
        let valid = false
        if (this.state.validateEspecialidad) {
            if (this.state.especialidad === '') {
                valid = true
            }
        }
        return valid
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
        if (this.state.tipoDoc === '') {
            return false
        } else if (this.state.documento === '' || this.state.documento.length <= 3) {
            return false
        } else if (this.state.nombres === '' || this.state.nombres.length <= 3) {
            return false
        } else if (this.state.apellidos === '' || this.state.apellidos.length <= 3) {
            return false
        } else if (this.state.genero === '') {
            return false
        } else if (this.state.especialidad === '') {
            return false
        } else if (this.state.username === '' || this.state.username.indexOf(" ") > 0) {
            return false
        } else if (this.state.username.length <= 5) {
            return false
        } else if (this.state.password === '' || this.state.password.length < 6) {
            return false
        }
        return valid
    }

    registrarUsuario = () => {
        console.log("::::: registro de usuarios");
        this.setState({
            validateTipoDoc: true,
            validateDocumento: true,
            validateNombres: true,
            validateApellidos: true,
            validateGenero: true,
            validateEspecialidad: true,
            validateUsername: true,
            validatePassword: true,
        })
        console.log(this.esFormValido());
        if (this.esFormValido()) {
            this.props.createUser(this.state)
        } else {
            Alert.alert('Advertencia', 'Por favor valide los datos del formulario', [{
                text: 'Ok'
            }]);
        }
    }

    render() {
        return (
            <ScrollView style={stylesUser.container}>

                <Title style={{ fontFamily: this.props.theme.fonts.medium }}>Datos del Usuario</Title>

                <Dropdown
                    containerStyle={stylesUser.formControlDropdown}
                    label='Tipo de Documento'
                    data={properties.tipoDocProperties()}
                    onChangeText={(tipoDoc) => this.setTipoDoc({ tipoDoc })}
                />
                <HelperText
                    type="error"
                    visible={this.esInvalidoTipodoc()}>
                    El tipo de documento es requerido
                </HelperText>

                <TextInput
                    style={stylesUser.formControl}
                    label="Documento de Identidad"
                    autoCapitalize="none"
                    value={this.state.documento}
                    onChangeText={(documento) => this.setDocumento(documento)}
                />
                <HelperText
                    type="error"
                    visible={this.esInvalidoDocumento()}>
                    Registre un documento valido
                </HelperText>

                <TextInput
                    style={stylesUser.formControl}
                    label="Nombres"
                    autoCapitalize="none"
                    value={this.state.nombres}
                    onChangeText={(nombres) => this.setNombres(nombres)}
                />
                <HelperText
                    type="error"
                    visible={this.esInvalidoNombre()}>
                    El nombre es requerido
                </HelperText>

                <TextInput
                    style={stylesUser.formControl}
                    label="Apellidos"
                    autoCapitalize="none"
                    value={this.state.apellidos}
                    onChangeText={(apellidos) => this.setApellidos(apellidos)}
                />
                <HelperText
                    type="error"
                    visible={this.esInvalidoApellido()}>
                    El apellido es requerido
                </HelperText>

                <Dropdown
                    containerStyle={stylesUser.formControlDropdown}
                    label='Genero'
                    data={properties.generoProperties()}
                    onChangeText={(genero) => this.setGenero({ genero })}
                />
                <HelperText
                    type="error"
                    visible={this.esInvalidoGenero()}>
                    El genero es requerido
                </HelperText>

                <Dropdown
                    containerStyle={stylesUser.formControlDropdown}
                    label='Especialidad'
                    data={properties.especialidadProperties()}
                    onChangeText={(especialidad) => this.setEspecialidad({ especialidad })}
                />
                <HelperText
                    type="error"
                    visible={this.esInvalidoEspecialidad()}>
                    La especialidad es requerida
                </HelperText>

                <TextInput
                    style={stylesUser.formControl}
                    label="Nombre Usuario"
                    autoCapitalize="none"
                    value={this.state.username}
                    onChangeText={(text) => this.setUserName(text)}
                />
                <HelperText
                    type="error"
                    visible={this.esInvalidoUserName()}>
                    El Usuario es requerido de minimo 5 caracteres y sin espacios
                </HelperText>

                <TextInput
                    style={stylesUser.formControl}
                    label="Contraseña"
                    autoCapitalize="none"
                    value={this.state.password}
                    onChangeText={(text) => this.setPassword(text)}
                    secureTextEntry={true} />
                <HelperText
                    type="error"
                    visible={this.esInvalidoPassword()}>
                    La contraseña es requerida de minimo 6 caracteres
                </HelperText>


                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    ...stylesUser.formControl
                }} />

                <Button mode="contained" 
                    style={stylesUser.formControlButton}
                    color={this.props.theme.colors.accent}
                    onPress={() => this.registrarUsuario()}>
                    Guardar
                </Button>
                <Button mode="text" 
                    style={stylesUser.formControlButton}
                    color={this.props.theme.colors.accent}
                    onPress={() => this.props.cancelCreateUser()}>
                    Cancelar
                </Button>

                <View style={{ height: 20 }} />

            </ScrollView>
        )
    }
}

export default withTheme(CreateUserUI)