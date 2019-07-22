import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions, States } from '../store'
import LoginUI from '../components/UI/LoginUI'
import { Alert } from 'react-native'

class Login extends Component {

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
            header: () => null
        }
    }

    render() {
        const { loading, doLogin } = this.props

        return (
            <LoginUI
                authenticateUser={this.authenticateUser}
                setNavigationColor={this.setNavigationColor}
                goCreateUser={this.goCreateUser}
            />
        )
    }

    authenticateUser = ({ username, password }) => {
        this.props.doLogin(username, password)

        actions.user.getDataAsyncStorage('userToken').then((userToken) => {
            this.props.navigation.navigate(userToken !== null ? 'Home' : 'Auth');
        }).catch(error => {
            this.setState({ error })
        })

        Alert.alert('Advertencia', 'El usuario/contraseña no corresponden', [{
            text: 'Ok'
        }]);
    };

    goCreateUser = () => {
        this.props.navigation.navigate('CreateUser');
    };
};

const mapStateToProps = state => {
    return {
        loading: state.app.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        doLogin: (username, password) => {
            dispatch(actions.user.login(username, password))
        }
    }
}
export const LoginScreen = connect(mapStateToProps, mapDispatchToProps)(Login);