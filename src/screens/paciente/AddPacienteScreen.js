import React, { Component } from 'react'
import AddPacienteUI from '../../components/UI/paciente/AddPacienteUI'
import { IconButton } from 'react-native-paper'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'

class AddPacienteScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pacienteParam: null
        }

        if (this.props.navigation.getParam('paciente') !== undefined) {
            this.state = {
                pacienteParam: this.props.navigation.getParam('paciente')
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
            title: 'Crear Paciente',
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

    logoutUser = () => {
        this.props.doLogout()
        this.props.navigation.navigate('AuthLoading');
    }

    goPerfilUser = () => {
        this.props.navigation.navigate('HomeDrawer');
    }

    goPacienteNavigator = () => {
        this.props.navigation.navigate('Paciente')
    }

    render() {
        return (
            <AddPacienteUI 
                setNavigationColor={this.setNavigationColor}
                goPacienteNavigator={this.goPacienteNavigator}
                registrarPaciente={this.registrarPaciente}
                cancelAddPaciente={this.cancelAddPaciente}
                pacienteParam={this.state.pacienteParam}/>
        );
    }

    registrarPaciente = (paciente) => {
        this.props.registrarPaciente(paciente)

        if (this.props.paciente.listAllPaciente.length > 0) {
            Alert.alert(
                'Éxito',
                'Paciente registrado correctamente',
                [
                    {
                        text: 'Ok',
                        onPress: () => this.props.navigation.navigate('Paciente'),
                    },
                ],
                { cancelable: false }
            )
        }
    }

    cancelAddPaciente = () => {
        this.props.navigation.navigate('Paciente')
    };
}

const mapStateToProps = state => ({
    app: state.app,
    paciente: state.paciente
  });
const mapDispatchToProps = dispatch => ({
    doLogout: () => dispatch(actions.user.logout()),
    registrarPaciente: paciente => dispatch(actions.paciente.registrarPaciente(paciente))
});
export default connect(mapStateToProps, mapDispatchToProps)(AddPacienteScreen);