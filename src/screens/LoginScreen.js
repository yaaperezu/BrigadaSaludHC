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

    authenticateUser = ({ username, password }) => {
        this.props.doLogin(username, password)
        actions.user.getDataAsyncStorage('userToken').then((userToken) => {
            if (userToken === null) {
                Alert.alert('Advertencia', 'El usuario/contraseña no corresponden', [{
                    text: 'Ok'
                }]);
            }
            this.props.navigation.navigate(userToken !== null ? 'Home' : 'Auth');

        }).catch(error => {
            this.setState({ error })
        })
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
    doLogout: () => dispatch(actions.confApi.logout())
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);