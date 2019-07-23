import React, { Component } from 'react'
import PacienteUI from '../../components/UI/paciente/PacienteUI'

export default class PacienteScreen extends Component {

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
            }
        }
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