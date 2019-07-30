import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginUI from '../components/UI/LoginUI'
import { Alert } from 'react-native'
import * as actions from '../store/actions/'

class LoginScreen extends Component {

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

        return (
            <LoginUI
                authenticateUser={this.authenticateUser}
                setNavigationColor={this.setNavigationColor}
                goCreateUser={this.goCreateUser}
            />
        )
    }

    authenticateUser = async ({ username, password }) => {
        console.log('LOGIN ACTIONS')
        await this.props.doLogin(username, password)
        console.log(this.props.user.usuarioAut)
        if (this.props.user.usuarioAut === undefined || this.props.user.usuarioAut === null) {
            Alert.alert('Advertencia', 'El usuario/contraseña no corresponden', [{
                text: 'Ok'
            }]);
        }
        this.props.navigation.navigate((this.props.user.usuarioAut !== undefined && this.props.user.usuarioAut !== null) ? 'Home' : 'Auth');
    };

    goCreateUser = () => {
        this.props.navigation.navigate('CreateUser');
    };
};

const mapStateToProps = state => ({
    app: state.app,
    user: state.user
});
const mapDispatchToProps = dispatch => ({
    doLogin: (username, password) => dispatch(actions.user.login({ username, password })),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);