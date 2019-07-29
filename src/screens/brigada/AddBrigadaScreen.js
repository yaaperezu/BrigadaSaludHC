import React, { Component } from 'react'
import AddBrigadaUI from '../../components/UI/brigada/AddBrigadaUI'
import { connect } from 'react-redux'
import { Alert } from 'react-native'
import * as actions from '../../store/actions'

class AddBrigadaScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            brigadaParam: null
        }
        
        if( this.props.navigation.getParam('brigada') !== undefined ) {
            this.state = {
                brigadaParam: this.props.navigation.getParam('brigada')
            }
        }
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
                registrarBrigada={this.registrarBrigada} 
                brigadaParam={this.state.brigadaParam}/>
        );
    }

    registrarBrigada = (brigada) => {
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