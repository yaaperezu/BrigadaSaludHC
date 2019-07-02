import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { actions, States } from '../store'
import { Login } from './login'
import { Button } from '../components'

class MainLoginApp extends Component {
    render() {
        const { doLogout, loggedIn, fullName } = this.props

        if (!loggedIn) {
            return (
                <View>
                    <Login />
                </View>
            )
        }

        return (
            <View>
                <Text>Welcome {fullName}!</Text>
                <Button
                    onPress={() => {
                        doLogout()
                    }}
                >
                    Logout
                </Button>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.user.loggedIn,
        fullName: state.user.fullName
    }
}
const mapDispatchToProps = dispatch => {
    return {
        doLogout: ()  => {
            dispatch(actions.user.logout())
        }
    }
}
export const Main = connect(mapStateToProps, mapDispatchToProps)(MainLoginApp);