import React, { Component } from 'react'
import AddConfiguracionAPIUI from '../../components/UI/api/AddConfiguracionAPIUI'
import { connect } from 'react-redux'
import { Alert } from 'react-native'
import * as actions from '../../store/actions'

class AddConfiguracionAPIScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            confApiParam: null
        }

        if( this.props.navigation.getParam('confApi') !== undefined ) {
            this.state = {
                confApiParam: this.props.navigation.getParam('confApi')
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
                registrarConfAPI={this.registrarConfAPI} 
                confApiParam={this.state.confApiParam}/>
        );
    }

    registrarConfAPI = async (server) => {
        await this.props.registrarConfAPI(server)
        
        if( this.props.confApi.listAllConfAPI.length > 0 ) {
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
            )
        }
    }
}

const mapStateToProps = state => ({
    user: state.user,
    confApi: state.confApi
  });
const mapDispatchToProps = dispatch => ({
    doLogout: () => dispatch(actions.user.logout()),
    registrarConfAPI: conf => dispatch(actions.confApi.registrarConfAPI(conf))
});
export default connect(mapStateToProps, mapDispatchToProps)(AddConfiguracionAPIScreen);