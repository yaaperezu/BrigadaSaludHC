import React, { Component } from 'react'
import { View } from 'react-native'
import { Title, withTheme } from 'react-native-paper';
import stylePaciente from '../../../stylesheets/paciente.stylesheets'

class SincronizacionUI extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.setNavigationColor(this.props.theme.colors.primary)
    }

    render() {
        return (
            <View style={stylePaciente.container}>
                <Title>Sincronizar Información</Title>
          
            </View>
        )
    }
}

export default withTheme(SincronizacionUI)