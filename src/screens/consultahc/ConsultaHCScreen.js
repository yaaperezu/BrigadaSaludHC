import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { connect } from 'react-redux'
import { actions, States } from '../../store'

class ConsultaHC extends Component {

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
            title: 'Consulta Historia Clínica',
            headerStyle: {
                backgroundColor: navigation.getParam('backgroundColor') || '#77C742'
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerRight: (
                <IconButton
                    icon="power-settings-new"
                    color="white"
                    onPress={navigation.getParam('logout')} />
            )
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({ logout: this.logoutUser });
    }

    logoutUser = () => {
        this.props.doLogout()
        this.props.navigation.navigate('AuthLoading');
    }

    render() {
        return (
            <View>
                <Text>Consulta HC Screen</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        app: state.app
    }
}
const mapDispatchToProps = dispatch => {
    return {
        doLogout: () => {
            dispatch(actions.user.logout())
        }
    }
}

export const ConsultaHCScreen = connect(mapStateToProps, mapDispatchToProps)(ConsultaHC)