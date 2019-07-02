import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Image,
    ActivityIndicator
} from 'react-native'
import { TextField } from 'react-native-material-textfield';
import { connect } from 'react-redux'
import { actions, States } from '../store'
import { Button } from '../components'

class LoginApp extends Component {
    
    static navigationOptions = {
        headerTintColor: '#FFFFFF',
        title: 'Brigada de Salud',
        headerStyle: {
            backgroundColor: '#00699a',
        },
    };
    
    constructor(props) {
        super(props)

        this.state = {
            username: 'admin',
            password: 'secret'
        }
    }

    render() {
        const { loading, doLogin } = this.props

        if (loading) {
            return <ActivityIndicator />
        }

        return (
            <View style={styles.container}>
                <Image
                    style={styles.logoKeraltyImage}
                    source={require('../assets/images/Keralty.jpg')} />
               
                <TextField
                    label="Nombre Usuario"
                    autoCapitalize="none"
                    value={this.state.username}
                    onChangeText={username => this.setState({ username })} />

                <TextField
                    label="Contraseña"
                    autoCapitalize="none"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    secureTextEntry={true} />

                <Button 
                    onPress={() => {
                        doLogin(this.state.username, this.state.password)
                    }}
                >
                    Login
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
        margin: 10,
    },
    logoKeraltyImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: 100,
    },
    getStartedText: {
        fontSize: 17,
        textAlign: 'center'
    },

});

const mapStateToProps = state => {
    return {
        loading: state.app.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        doLogin: (username, password) => {
            dispatch(actions.user.login(username, password))
        }
    }
}
export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginApp);