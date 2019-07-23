import React, { Component } from 'react'
import AddPacienteUI from '../../components/UI/paciente/AddPacienteUI'
import { IconButton } from 'react-native-paper'
import { connect } from 'react-redux'
import { actions, States } from '../../store'

class AddPaciente extends Component {

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
            title: 'Crear Paciente',
            headerStyle: {
                backgroundColor: navigation.getParam('backgroundColor') || '#77C742'
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerRight: (
                <IconButton
                    icon="power-settings-new"
                    color="white"
                    onPress={navigation.getParam('logout')} />
            )
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({ logout: this.logoutUser });
    }

    logoutUser = () => {
        this.props.doLogout()
        this.props.navigation.navigate('AuthLoading');
    }

    render() {
        return (
            <AddPacienteUI 
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

export const AddPacienteScreen = connect(mapStateToProps, mapDispatchToProps)(AddPaciente)