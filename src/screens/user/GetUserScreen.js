import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions, States } from '../../store'
import CreateUserUI from '../../components/UI/user/CreateUserUI'
import ConexionRealm from '../../data'
import * as SchemaBD from '../../data/schemas'
import { Alert } from 'react-native'

class GetUser extends Component {

    constructor(props) {
        super(props)

        this.listarUsuariosApp()
    }

    setNavigationColor = (color) => {
        this.props.navigation.setParams({
            backgroundColor: color
        })
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Usuario',
            headerStyle: {
                backgroundColor: '#6F9479'
            },
            headerTitleStyle: {
                color: 'white'
            }
        }
    }

    listarUsuariosApp = () => {
        let usuarios = ConexionRealm.objects('Usuario')
        console.log("usuarios:::  " + usuarios)
        listUsuarios = Object.values(usuarios)
        console.log(listUsuarios)
        return listUsuarios
    }

    render() {

        return (
            <CreateUserUI
                createUser={this.createUser}
                setNavigationColor={this.setNavigationColor}
                cancelCreateUser={this.cancelCreateUser}
            />
        )
    }

    createUser = (user) => {
        let userModelNew = new SchemaBD.UserModel();
        userModelNew.tipoDoc = user.tipoDoc.tipoDoc
        userModelNew.numeroDocumento = user.documento
        userModelNew.nombre = user.nombres
        userModelNew.apellido = user.apellidos
        userModelNew.genero = user.genero.genero
        userModelNew.especialidad = user.especialidad.especialidad
        userModelNew.nombreUsuario = user.username
        userModelNew.contrasena = user.password

        ConexionRealm.write(() => {
            var ID = ConexionRealm.objects('Usuario').sorted('id', true).length > 0
                ? ConexionRealm.objects('Usuario').sorted('id', true)[0].id + 1
                : 1;

            userModelNew.id = ID;
            userModelNew.createdAt = new Date();
            userModelNew.updatedAt = new Date();

            ConexionRealm.create('Usuario', userModelNew);
            Alert.alert(
                'Éxito',
                'Usuario registrado correctamente',
                [
                    {
                        text: 'Ok',
                        onPress: () => this.props.navigation.goBack(),
                    },
                ],
                { cancelable: false }
            );
        });
    }

    cancelCreateUser = () => {
        this.props.navigation.goBack()
    };
};

const mapStateToProps = state => {
    return {
        loading: state.app.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        doLogin: (username, password) => {
            dispatch(actions.user.login(username, password))
        }
    }
}
export const GetUserScreen = connect(mapStateToProps, mapDispatchToProps)(GetUser);