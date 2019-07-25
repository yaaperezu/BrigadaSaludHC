import React, { Component } from 'react'
import AddConfiguracionAPIUI from '../../components/UI/api/AddConfiguracionAPIUI'
import { connect } from 'react-redux'
import { actions, States } from '../../store'
import ConexionRealm from '../../data'
import * as SchemaBD from '../../data/schemas'
import { Alert } from 'react-native'
 
class AddConfiguracionAPI extends Component {

    constructor(props) {
        super(props)

        this.listarConfAPI()
    }

    listarConfAPI = () => {
        let servidorApi = ConexionRealm.objects('ServidorAPI')
        console.log("servidorApi:::  " + servidorApi)
        let listServApi = Object.values(servidorApi)
        console.log(listServApi)
        return listServApi
    }

    setNavigationColor = (color) => {
        this.props.navigation.setParams({
            backgroundColor: color
        })
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Configurar Servidor API',
            headerStyle: {
                backgroundColor: '#6F9479'
            },
            headerTitleStyle: {
                color: 'white'
            }
        }
    }

    goConfAPINavigator = () => {
        this.props.navigation.navigate('ConfAPINavigator')
    }

    render() {
        return (
            <AddConfiguracionAPIUI 
                setNavigationColor={this.setNavigationColor}
                goConfAPINavigator={this.goConfAPINavigator}
                registrarConfAPI={this.registrarConfAPI}/>
        );
    }

    registrarConfAPI = (server) => {
        console.log(server)
        let servAPINew = new SchemaBD.ServidorAPIModel();
        servAPINew.protocolo = server.protocolo.protocolo
        servAPINew.server = server.server
        servAPINew.port = server.port
        servAPINew.estado = server.estado.estado
        
        ConexionRealm.write(() => {
            let regConfAPI = ConexionRealm.objects('ServidorAPI').sorted('id', true)
            var ID = regConfAPI.length > 0 ? (regConfAPI[0].id + 1) : 1;
            
            servAPINew.id = ID;
            servAPINew.createdAt = new Date();
            servAPINew.updatedAt = new Date();

            console.log(servAPINew)
            ConexionRealm.create('ServidorAPI', servAPINew);
            Alert.alert(
                'Éxito',
                'Configuración registrada correctamente',
                [
                    {
                        text: 'Ok',
                        onPress: () => this.props.navigation.navigate('ConfAPINavigator'),
                    },
                ],
                { cancelable: false }
            );
        });
    }
}

const mapStateToProps = state => {
    return {
        app: state.app
    }
}
const mapDispatchToProps = dispatch => {
    return {
        doLogout: () => {
            dispatch(actions.user.logout())
        }
    }
}

export const AddConfiguracionAPIScreen = connect(mapStateToProps, mapDispatchToProps)(AddConfiguracionAPI)