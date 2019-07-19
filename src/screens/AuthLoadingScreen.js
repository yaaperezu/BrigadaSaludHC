import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { connect } from 'react-redux'
import { actions, States } from '../store'

class AuthLoading extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor() {
        super();
    }

    componentDidMount() {
        this._bootstrapAsync();
    }

    _bootstrapAsync = () => {
        actions.user.getDataAsyncStorage('userToken').then((userToken) => {
            console.log('--------   _bootstrapAsync' +  userToken);
            this.props.navigation.navigate(userToken !== null ? 'Home' : 'Auth');
        }).catch(error => {
            this.setState({ error })
        })

    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
export const AuthLoadingScreen = connect(mapStateToProps, mapDispatchToProps)(AuthLoading);