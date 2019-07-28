import React, { Component } from 'react'
import AddBrigadaUI from '../../components/UI/brigada/AddBrigadaUI'
import { connect } from 'react-redux'
import { Alert } from 'react-native'
import * as actions from '../../store/actions'

class AddBrigadaScreen extends Component {

    constructor(props) {
        super(props)
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
                registrarBrigada={this.registrarBrigada} />
        );
    }

    registrarBrigada = (brigada) => {
        console.log(':::::::::::  REG BRIGADA  :::::::::')
        console.log(brigada)
        this.props.registrarBrigada(brigada)

        if (this.props.brigada.listAllBrigada.length > 0) {
            Alert.alert(
                'Éxito',
                'Configuración registrada correctamente',
                [
                    {
                        text: 'Ok',
                        onPress: () => this.props.navigation.navigate('BrigadaNavigator'),
                    },
                ],
                { cancelable: false }
            )
        }
    }

}

const mapStateToProps = state => ({
    user: state.user,
    brigada: state.brigada
});
const mapDispatchToProps = dispatch => ({
    doLogout: () => dispatch(actions.user.logout()),
    registrarBrigada: brigada => dispatch(actions.brigada.registrarBrigada(brigada))
});
export default connect(mapStateToProps, mapDispatchToProps)(AddBrigadaScreen);