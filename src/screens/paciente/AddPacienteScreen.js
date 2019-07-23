import React, { Component } from 'react'
import AddPacienteUI from '../../components/UI/paciente/AddPacienteUI'

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
            title: 'Crear Paciente',
            headerStyle: {
                backgroundColor: navigation.getParam('backgroundColor') || '#77C742'
            },
            headerTitleStyle: {
                color: 'white'
            }
        }
    }

    render() {
        return (
            <AddPacienteUI 
                setNavigationColor={this.setNavigationColor}/>
        );
    }
}