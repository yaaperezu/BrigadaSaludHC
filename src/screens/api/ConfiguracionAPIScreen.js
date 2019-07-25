import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions, States } from '../../store'
import ConfiguracionAPIUI from '../../components/UI/api/ConfiguracionAPIUI'

class ConfiguracionAPI extends Component {

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

    goAddConfApi = () => {
        this.props.navigation.navigate('AddConfiguracionAPI')
    }

    render() {
        return (
            <ConfiguracionAPIUI 
                setNavigationColor={this.setNavigationColor} 
                goAddConfApi={this.goAddConfApi}/>
        );
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

export const ConfiguracionAPIScreen = connect(mapStateToProps, mapDispatchToProps)(ConfiguracionAPI)