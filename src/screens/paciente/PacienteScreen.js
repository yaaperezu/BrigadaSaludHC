import React, { Component } from 'react'
import PacienteUI from '../../components/UI/paciente/PacienteUI'
import { IconButton } from 'react-native-paper'
import { connect } from 'react-redux'
import { actions, States } from '../../store'

class Paciente extends Component {

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
            title: 'Pacientes',
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

    goAddPaciente = () => {
        this.props.navigation.navigate('AddPaciente')
    }

    render() {
        return (
            <PacienteUI
                setNavigationColor={this.setNavigationColor}
                goAddPaciente={this.goAddPaciente} />
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

export const PacienteScreen = connect(mapStateToProps, mapDispatchToProps)(Paciente)