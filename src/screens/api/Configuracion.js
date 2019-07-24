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

    logoutUser = () => {
        this.props.doLogout()
        this.props.navigation.navigate('AuthLoading');
    }

    goPerfilUser = () => {
        this.props.navigation.navigate('HomeDrawer');
    }

    render() {
        return (
            <ConfiguracionAPIUI 
                setNavigationColor={this.setNavigationColor}/>
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