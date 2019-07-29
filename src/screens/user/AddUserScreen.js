import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddUserUI from '../../components/UI/user/AddUserUI'
import { Alert } from 'react-native'
import * as actions from '../../store/actions'

class AddUserScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userParam: null
        }

        if (this.props.navigation.getParam('user') !== undefined) {
            this.state = {
                userParam: this.props.navigation.getParam('user')
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
            title: 'Usuarios Aplicación',
            headerStyle: {
                backgroundColor: navigation.getParam('backgroundColor') || '#77C742'
            },
            headerTitleStyle: {
                color: 'white'
            }
        }
    }

    goUserNavigator = () => {
        this.props.navigation.navigate('UserNavigator')
    }


    render() {

        return (
            <AddUserUI
                setNavigationColor={this.setNavigationColor}
                goUserNavigator={this.goUserNavigator}
                registrarUser={this.registrarUser}
                cancelAddUser={this.cancelAddUser}
                userParam={this.state.userParam} />
        )
    }

    registrarUser = (user) => {
        this.props.registrarUser(user)

        if (this.props.user.listAllUser.length > 0) {
            Alert.alert(
                'Éxito',
                'Usuario registrado correctamente',
                [
                    {
                        text: 'Ok',
                        onPress: () => this.props.navigation.navigate('UserNavigator'),
                    },
                ],
                { cancelable: false }
            )
        }
    }

    cancelAddUser = () => {
        this.props.navigation.navigate('UserNavigator')
    };
};

const mapStateToProps = state => ({
    app: state.app,
    user: state.user
});
const mapDispatchToProps = dispatch => ({
    doLogout: () => dispatch(actions.user.logout()),
    registrarUser: user => dispatch(actions.user.registrarUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(AddUserScreen);