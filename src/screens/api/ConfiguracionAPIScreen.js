import React, { Component } from 'react'
import { connect } from 'react-redux'
import ConfiguracionAPIUI from '../../components/UI/api/ConfiguracionAPIUI'
import * as actions from '../../store/actions'

class ConfiguracionAPIScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            listConfAPI: {}
        }
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
        console.log("------listarConfAPI  ")
        this.props.listarAllConfAPI()
        console.log(this.props.confApi.listConfAPI)
    }

    goAddConfApi = () => {
        this.props.navigation.navigate('AddConfiguracionAPI')
    }

    render() {
        return (
            <ConfiguracionAPIUI 
                setNavigationColor={this.setNavigationColor} 
                goAddConfApi={this.goAddConfApi}
                dataListConfAPI={this.props.confApi.listAllConfAPI}/>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    confApi: state.confApi
  });
const mapDispatchToProps = dispatch => ({
    doLogout: () => dispatch(actions.user.logout()),
    listarAllConfAPI: () => dispatch(actions.confApi.listarAllConfAPI())
});
export default connect(mapStateToProps, mapDispatchToProps)(ConfiguracionAPIScreen);