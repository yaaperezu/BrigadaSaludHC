import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions, States } from '../../store'
import CreateUserUI from '../../components/UI/user/CreateUserUI'

class CreateUser extends Component {

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
            title: 'Usuarios Aplicación',
            headerStyle: {
                backgroundColor: navigation.getParam('backgroundColor') || '#222'
            }, 
            headerTitleStyle: {
                color: 'white'
            }
        } 
    }

    render() {
        
        return (
            <CreateUserUI 
                createUser={this.createUser}
                setNavigationColor={this.setNavigationColor}
                cancelCreateUser={this.cancelCreateUser}
            />
        )
    }

    createUser = (user) => {
        console.log(user)
        console.log(this.props.navigation)
        this.props.navigation.goBack()
    };

    cancelCreateUser = () => {
        this.props.navigation.goBack()
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
export const CreateUserScreen = connect(mapStateToProps, mapDispatchToProps)(CreateUser);