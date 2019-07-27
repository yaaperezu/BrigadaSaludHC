import React, { Component } from 'react'
import PacienteUI from '../../components/UI/paciente/PacienteUI'
import { IconButton } from 'react-native-paper'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'

class PacienteScreen extends Component {

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
        console.log('ooooooooooooooooooooooooooooooooooooooo')
        console.log(actions)
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

const mapStateToProps = state => ({
    app: state.app,
    user: state.user
  });
const mapDispatchToProps = dispatch => ({
    doLogout: () => dispatch(actions.user.logout())
});
export default connect(mapStateToProps, mapDispatchToProps)(PacienteScreen);