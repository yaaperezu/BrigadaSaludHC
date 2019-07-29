import React, { Component } from 'react'
import PacienteUI from '../../components/UI/paciente/PacienteUI'
import { IconButton } from 'react-native-paper'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'

class PacienteScreen extends Component {

    constructor(props) {
        super(props)

        this.listarAllPaciente()
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
            headerLeft: (
                <IconButton
                    icon="perm-identity"
                    color="white"
                    onPress={navigation.getParam('goPerfilUser')} 
                    size={28}/>
            ),
            headerRight: (
                <IconButton
                    icon="power-settings-new"
                    color="white"
                    onPress={navigation.getParam('logout')}
                    size={28} />
            ) 
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({ 
            logout: this.logoutUser, 
            goPerfilUser: this.goPerfilUser 
        });
    }

    listarAllPaciente = () => {
        this.props.listarAllPaciente()
    }

    logoutUser = () => {
        this.props.doLogout()
        this.props.navigation.navigate('AuthLoading');
    }

    goPerfilUser = () => {
        this.props.navigation.navigate('HomeDrawer');
    }

    goAddPaciente = () => {
        this.props.navigation.navigate('AddPaciente')
    }

    goUpdatePaciente = (paciente) => {
        this.props.navigation.navigate('AddPaciente', {
            paciente: paciente
        })
    }

    deletePaciente = (paciente) => {
        this.props.deletePaciente(paciente)
    }

    updateBusqPaciente = (nombrePaciente) => {
        this.props.busqPaciente(nombrePaciente)
    }

    render() {
        return (
            <PacienteUI
                setNavigationColor={this.setNavigationColor}
                goAddPaciente={this.goAddPaciente} 
                goUpdatePaciente={this.goUpdatePaciente}
                dataListPaciente={this.props.paciente.listAllPaciente}
                deletePaciente={this.deletePaciente}
                updateBusqPaciente={this.updateBusqPaciente}/>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    paciente: state.paciente
  });
const mapDispatchToProps = dispatch => ({
    doLogout: () => dispatch(actions.user.logout()),
    listarAllPaciente: () => dispatch(actions.paciente.listarAllPaciente()),
    deletePaciente: paciente => dispatch(actions.paciente.deletePaciente(paciente)),
    busqPaciente: nombrePaciente => dispatch(actions.paciente.busqPaciente(nombrePaciente))
});
export default connect(mapStateToProps, mapDispatchToProps)(PacienteScreen);