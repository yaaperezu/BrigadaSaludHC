import React, { Component } from 'react'
import { View } from 'react-native'
import { withTheme, FAB, Searchbar } from 'react-native-paper'
import styleBase from '../../../stylesheets/base.stylesheets'
import { FlatList } from 'react-native-gesture-handler'
import Empty from '../utilities/Empty'
import BrigadaCardUI from './BrigadaCardUI'

class BrigadaUI extends Component {

    constructor(props) {
        super(props)

        this.state = {
            descBrigada: ''
        }
    }

    componentDidMount() {
        this.props.setNavigationColor(this.props.theme.colors.primary)
    }

    updateBusqBrigada = (text) => {
        this.setState({ descBrigada: text })
        this.props.updateBusqBrigada(text)
    }

    render() {
        return (
            <View style={styleBase.container}>
                <Searchbar
                    placeholder="Buscar Brigada"
                    onChangeText={this.updateBusqBrigada}
                    value={this.state.descBrigada}
                />

                <FlatList
                    data={this.props.dataListBrigada}
                    ListEmptyComponent={Empty}
                    style={{ width: '100%' }}
                    renderItem={({ item }) => <BrigadaCardUI
                        deleteBrigada={this.props.deleteBrigada}
                        goUpdateBrigada={this.props.goUpdateBrigada}
                        key={item.id} brigada={item} />}
                    keyExtractor={(item, index) => index.toString()} />

                <FAB
                    style={{backgroundColor: this.props.theme.colors.accent, ...styleBase.fab}}
                    icon="add"
                    color="white"
                    onPress={() => this.props.goAddBrigada()}
                />
            </View>
        )
    }
}

export default withTheme(BrigadaUI)