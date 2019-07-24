import React, { Component } from 'react'
import AddBrigadaUI from '../../components/UI/brigada/AddBrigadaUI'
import { connect } from 'react-redux'
import { actions, States } from '../../store'
import ConexionRealm from '../../data'
import * as SchemaBD from '../../data/schemas'
import { Alert } from 'react-native'
 
class AddBrigada extends Component {

    constructor(props) {
        super(props)

        this.listarBrigadaApp()
    }

    listarBrigadaApp = () => {
        let brigada = ConexionRealm.objects('Brigada')
        console.log("brigada:::  " + brigada)
        listBrigada = Object.values(brigada)
        console.log(listBrigada)
        return listBrigada
    }

    setNavigationColor = (color) => {
        this.props.navigation.setParams({
            backgroundColor: color
        })
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Configurar Brigada',
            headerStyle: {
                backgroundColor: '#6F9479'
            },
            headerTitleStyle: {
                color: 'white'
            }
        }
    }

    goBrigadaNavigator = () => {
        this.props.navigation.navigate('BrigadaNavigator')
    }

    render() {
        return (
            <AddBrigadaUI 
                setNavigationColor={this.setNavigationColor}
                goBrigadaNavigator={this.goBrigadaNavigator}
                registrarBrigada={this.registrarBrigada}/>
        );
    }

    registrarBrigada = (brigada) => {
        console.log(brigada)
        let brigadaNew = new SchemaBD.BrigadaModel();
        brigadaNew.descripcion = brigada.descripcion
        brigadaNew.lugar = brigada.lugar
        brigadaNew.ciudad = brigada.ciudad
        brigadaNew.fechai = new Date(brigada.fechaI)
        brigadaNew.fechaf = new Date(brigada.fechaF)
     

        ConexionRealm.write(() => {
            let registrosBrigada = ConexionRealm.objects('Brigada').sorted('id', true)
            var ID = registrosBrigada.length > 0
                ? registrosBrigada[0].id + 1
                : 1;
            
            brigadaNew.id = ID;
            brigadaNew.createdAt = new Date();
            brigadaNew.updatedAt = new Date();

            console.log(brigadaNew)
            ConexionRealm.create('Brigada', brigadaNew);
            Alert.alert(
                'Éxito',
                'Brigada registrada correctamente',
                [
                    {
                        text: 'Ok',
                        onPress: () => this.props.navigation.navigate('BrigadaNavigator'),
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

export const AddBrigadaScreen = connect(mapStateToProps, mapDispatchToProps)(AddBrigada)