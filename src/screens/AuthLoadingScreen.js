import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { connect } from 'react-redux'
import * as actions from '../store/actions'

class AuthLoadingScreen extends React.Component {
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


const mapStateToProps = state => ({
    app: state.app,
    user: state.user
  });
const mapDispatchToProps = dispatch => ({
    doLogin: (username, password) => dispatch(actions.user.login({ username, password })),
    doLogout: () => dispatch(actions.user.logout())
});
export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);