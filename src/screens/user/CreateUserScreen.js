import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateUserUI from '../../components/UI/user/CreateUserUI'
import ConexionRealm from '../../data'
import * as SchemaBD from '../../data/schemas'
import { Alert } from 'react-native'
import * as actions from '../../store/actions'

class CreateUserScreen extends Component {

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
            title: 'Usuarios Aplicación',
            headerStyle: {
                backgroundColor: navigation.getParam('backgroundColor') || '#77C742'
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
        
        let usuariosApp = ConexionRealm.objects('Usuario').sorted('id', true)

        ConexionRealm.write(() => {
            var ID = usuariosApp.length > 0 ? usuariosApp[0].id + 1 : 1;
            
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

const mapStateToProps = state => ({
    app: state.app,
    user: state.user
  });
const mapDispatchToProps = dispatch => ({
    doLogout: () => dispatch(actions.user.logout())
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateUserScreen);