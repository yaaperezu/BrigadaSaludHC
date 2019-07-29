import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserUI from '../../components/UI/user/UserUI'
import * as actions from '../../store/actions'

class UserScreen extends Component {

    constructor(props) {
        super(props)

        this.listarAllUser()
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

    listarAllUser = () => {
        this.props.listarAllUser()
    }

    goAddUser = () => {
        this.props.navigation.navigate('AddUser')
    }

    goUpdateUser = (user) => {
        this.props.navigation.navigate('AddUser', {
            user: user
        })
    }

    deleteUser = (user) => {
        this.props.deleteUser(user)
    }

    updateBusqUser = (userName) => {
        this.props.busqUser(userName)
    }

    render() {
        return (
            <UserUI
                setNavigationColor={this.setNavigationColor}
                goAddUser={this.goAddUser} 
                goUpdateUser={this.goUpdateUser}
                dataListUser={this.props.user.listAllUser}
                deleteUser={this.deleteUser}
                updateBusqUser={this.updateBusqUser}/>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    brigada: state.brigada
});
const mapDispatchToProps = dispatch => ({
    doLogout: () => dispatch(actions.user.logout()),
    listarAllUser: () => dispatch(actions.user.listarAllUser()),
    deleteUser: user => dispatch(actions.user.deleteUser(user)),
    busqUser: userName => dispatch(actions.user.busqUser(userName))
});
export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);