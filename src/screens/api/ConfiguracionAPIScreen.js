import React, { Component } from 'react'
import { connect } from 'react-redux'
import ConfiguracionAPIUI from '../../components/UI/api/ConfiguracionAPIUI'
import * as actions from '../../store/actions'

class ConfiguracionAPIScreen extends Component {

    constructor(props) {
        super(props)
        
        this.listarConfAPI()
    }

    setNavigationColor = (color) => {
        this.props.navigation.setParams({
            backgroundColor: color
        })
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Configuración API',
            headerStyle: {
                backgroundColor: '#6F9479'
            },
            headerTitleStyle: {
                color: 'white'
            }
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({
            logout: this.logoutUser,
            goPerfilUser: this.goPerfilUser
        });
    }

    listarConfAPI = () => {
        this.props.listarAllConfAPI()
    }

    goAddConfApi = () => {
        this.props.navigation.navigate('AddConfiguracionAPI')
    }

    goUpdateConfAPI = (confApi) => {
        this.props.navigation.navigate('AddConfiguracionAPI', {
            confApi: confApi
        })
    }

    deleteConfAPI = (confApi) => {
        this.props.deleteConfAPI(confApi)
    }

    updateBusqConfApi = (server) => {
        this.props.updateBusqConfApi(server)
    }

    render() {
        return (
            <ConfiguracionAPIUI
                setNavigationColor={this.setNavigationColor}
                goAddConfApi={this.goAddConfApi}
                dataListConfAPI={this.props.confApi.listAllConfAPI}
                goUpdateConfAPI={this.goUpdateConfAPI} 
                deleteConfAPI={this.deleteConfAPI}
                updateBusqConfApi={this.updateBusqConfApi}/>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    confApi: state.confApi
});
const mapDispatchToProps = dispatch => ({
    doLogout: () => dispatch(actions.user.logout()),
    listarAllConfAPI: () => dispatch(actions.confApi.listarAllConfAPI()),
    deleteConfAPI: conf => dispatch(actions.confApi.deleteConfAPI(conf)),
    updateBusqConfApi: server => dispatch(actions.confApi.busqServerConfApi(server))
});
export default connect(mapStateToProps, mapDispatchToProps)(ConfiguracionAPIScreen);