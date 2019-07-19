import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions, States } from '../store'
import LoginUI from '../components/UI/LoginUI'
import { IconButton } from 'react-native-paper'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'admin',
            password: 'secret'
        }
    }

    setNavigationColor = (color) => {
        this.props.navigation.setParams({
            backgroundColor: color
        })
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Brigada de Salud',
            headerStyle: {
                backgroundColor: navigation.getParam('backgroundColor') || '#222'
            }, 
            headerTitleStyle: {
                color: 'white'
            },
            headerRight: (
                <IconButton
                    icon="power-settings-new"
                    color='white'
                    />
            ),
        }
    }

    setUserName = (username) => {
        this.setState({
            username
        })
    }

    setPassword = (password) => {
        this.setState({
            password
        })
    }

    render() {
        const { loading, doLogin } = this.props

        return (
            <LoginUI setUserName={this.setUserName}
                setPassword={this.setPassword}
                authenticateUser={this.authenticateUser}
                setNavigationColor={this.setNavigationColor}
            />
        )
    }

    authenticateUser = () => {
        console.log(':::::::::::::::::: _authenticateUser')
        this.props.doLogin(this.state.username, this.state.password)
        actions.user.getDataAsyncStorage('userToken').then((userToken) => {
            console.log('--------   is _authenticateUser' + userToken);
            this.props.navigation.navigate(userToken !== null ? 'Home' : 'Auth');
        }).catch(error => {
            this.setState({ error })
        })
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