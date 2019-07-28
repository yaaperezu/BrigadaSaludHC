import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { withTheme, FAB, Searchbar } from 'react-native-paper'
import styleBase from '../../../stylesheets/base.stylesheets'
import { FlatList } from 'react-native-gesture-handler'
import Empty from '../utilities/Empty';
import ConfApiCardUI from './ConfApiCardUI'

class ConfiguracionAPIUI extends Component {

    constructor(props) {
        super(props)

        this.state = {
            serverBusq: ''
        }
    }

    componentDidMount() {
        this.props.setNavigationColor(this.props.theme.colors.primary)
    }

    updateBusqConfApi = (text) => {
        this.setState({ serverBusq: text })
        console.log(text)
        this.props.updateBusqConfApi(text)
    }


    render() {
        
        return (
            <View style={styleBase.container}>

                <Searchbar
                    placeholder="Buscar Servidor"
                    onChangeText={this.updateBusqConfApi}
                    value={this.state.serverBusq}
                />

                <FlatList
                    data={this.props.dataListConfAPI}
                    ListEmptyComponent={Empty}
                    style={{ width: '100%' }}
                    renderItem={({ item }) => <ConfApiCardUI
                        deleteConfAPI={this.props.deleteConfAPI}
                        goUpdateConfAPI={this.props.goUpdateConfAPI}
                        key={item.id} confApi={item} />}
                    keyExtractor={(item, index) => index.toString()} />


                <FAB
                    style={{ backgroundColor: this.props.theme.colors.accent, ...styleBase.fab }}
                    icon="add"
                    color="white"
                    onPress={() => this.props.goAddConfApi()}
                />
            </View>
        )
    }
}

export default withTheme(ConfiguracionAPIUI)