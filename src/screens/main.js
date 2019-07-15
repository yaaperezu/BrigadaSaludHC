import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { actions } from '../store'
import { Login } from './login'
import { Button } from '../components'

class MainLoginApp extends Component {
    render() {
        const { doLogout, fullName } = this.props

        let userToken
        const data = actions.user.getDataAsyncStorage('userToken')
        data.then((token) => {
            console.log('token:');
            console.log(token);

            userToken = token
        });
        
        console.log(userToken)
        if (!userToken) {
            return (
                <Login />
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
        fullName: state.user.fullName
    }
}
const mapDispatchToProps = dispatch => {
    return {
        doLogout: () => {
            dispatch(actions.user.logout())
        }
    }
}
export const Main = connect(mapStateToProps, mapDispatchToProps)(MainLoginApp);