import React, { Component } from 'react'
import { View } from 'react-native'
import { Title, withTheme, FAB } from 'react-native-paper'
import stylePaciente from '../../../stylesheets/paciente.stylesheets'

class BrigadaUI extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.setNavigationColor(this.props.theme.colors.primary)
    }

    render() {
        return (
            <View style={stylePaciente.container}>
                <Title>Paciente</Title>

                <FAB
                    style={{backgroundColor: this.props.theme.colors.accent, ...stylePaciente.fab}}
                    icon="add"
                    color="white"
                    onPress={() => this.props.goAddBrigada()}
                />
            </View>
        )
    }
}

export default withTheme(BrigadaUI)