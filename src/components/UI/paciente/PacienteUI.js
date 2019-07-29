import React, { Component } from 'react'
import { View } from 'react-native'
import { withTheme, FAB, Searchbar } from 'react-native-paper'
import { FlatList } from 'react-native-gesture-handler'
import styleBase from '../../../stylesheets/base.stylesheets'
import PacienteCardUI from './PacienteCardUI'
import Empty from '../utilities/Empty'

class PacienteUI extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nombrePaciente: ''
        }
    }

    componentDidMount() {
        this.props.setNavigationColor(this.props.theme.colors.primary)
    }

    updateBusqPaciente = (text) => {
        this.setState({ nombrePaciente: text })
        this.props.updateBusqPaciente(text)
    }

    render() {
        return (
            <View style={styleBase.container}>
                <Searchbar
                    placeholder="Buscar Paciente"
                    onChangeText={this.updateBusqPaciente}
                    value={this.state.nombrePaciente}
                />

                <FlatList
                    data={this.props.dataListPaciente}
                    ListEmptyComponent={Empty}
                    style={{ width: '100%' }}
                    renderItem={({ item }) => <PacienteCardUI
                        deletePaciente={this.props.deletePaciente}
                        goUpdatePaciente={this.props.goUpdatePaciente}
                        key={item.id} paciente={item} />}
                    keyExtractor={(item, index) => index.toString()} />

                <FAB
                    style={{backgroundColor: this.props.theme.colors.accent, ...styleBase.fab}}
                    icon="add"
                    color="white"
                    onPress={() => this.props.goAddPaciente()}
                />
            </View>
        )
    }
}

export default withTheme(PacienteUI)