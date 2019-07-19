import React from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import { connect } from 'react-redux'
import { actions, States } from '../store'
import { TextInput, Button } from 'react-native-paper'

class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'admin',
            password: 'secret'
        }
    }

    componentDidMount() {
        this._cargarInfoUser();
    }

    _cargarInfoUser = () => {
        actions.user.getDataAsyncStorage('userToken').then((userToken) => {
            console.log(':: Usuario autenticado:  ' +  userToken);
            
        }).catch(error => {
            this.setState({ error })
        })

    };

    static navigationOptions = {
        headerTintColor: '#FFFFFF',
        title: 'Home Brigada de Salud',
        headerStyle: {
            backgroundColor: '#00699a',
        },
    };

    render() {
        const { loading, doLogin } = this.props

        return (
            <View style={styles.container}>
               
                <TextInput
                    label="Nombre Usuario"
                    autoCapitalize="none"
                    value={this.state.username}
                    onChangeText={username => this.setState({ username })} />

                <TextInput
                    label="Contraseña"
                    autoCapitalize="none"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    secureTextEntry={true} />

                <Button mode="contained" 
                    onPress={() => {
                        this._logoutUser()
                    }}
                >
                    Logout
                </Button>
            </View>
        )
    }

    _logoutUser = () => {
        this.props.doLogout()
        this.props.navigation.navigate('AuthLoading');
    };
};

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
        doLogout: () => {
            dispatch(actions.user.logout())
        }
    }
}
export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);