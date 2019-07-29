import React, { Component } from 'react'
import { View } from 'react-native'
import { withTheme, FAB, Searchbar } from 'react-native-paper'
import styleBase from '../../../stylesheets/base.stylesheets'
import { FlatList } from 'react-native-gesture-handler'
import Empty from '../utilities/Empty'
import UserCardUI from './UserCardUI'

class UserUI extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: ''
        }
    }

    componentDidMount() {
        this.props.setNavigationColor(this.props.theme.colors.primary)
    }

    updateBusqUser = (text) => {
        this.setState({ userName: text })
        this.props.updateBusqUser(text)
    }

    render() {
        return (
            <View style={styleBase.container}>
                <Searchbar
                    placeholder="Buscar Usuario"
                    onChangeText={this.updateBusqUser}
                    value={this.state.userName}
                />

                <FlatList
                    data={this.props.dataListUser}
                    ListEmptyComponent={Empty}
                    style={{ width: '100%' }}
                    renderItem={({ item }) => <UserCardUI
                        deleteUser={this.props.deleteUser}
                        goUpdateUser={this.props.goUpdateUser}
                        key={item.id} user={item} />}
                    keyExtractor={(item, index) => index.toString()} />

                <FAB
                    style={{backgroundColor: this.props.theme.colors.accent, ...styleBase.fab}}
                    icon="add"
                    color="white"
                    onPress={() => this.props.goAddUser()}
                />
            </View>
        )
    }
}

export default withTheme(UserUI)