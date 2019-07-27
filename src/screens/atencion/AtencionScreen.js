import React, { Component } from 'react';
import { Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'

class AtencionScreen extends Component {

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
            title: 'Atención de Pacientes',
            headerStyle: {
                backgroundColor: navigation.getParam('backgroundColor') || '#77C742'
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerLeft: (
                <IconButton
                    icon="perm-identity"
                    color="white"
                    onPress={navigation.getParam('goPerfilUser')} 
                    size={28}/>
            ),
            headerRight: (
                <IconButton
                    icon="power-settings-new"
                    color="white"
                    onPress={navigation.getParam('logout')}
                    size={28} />
            )
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({ 
            logout: this.logoutUser, 
            goPerfilUser: this.goPerfilUser 
        });
    }

    logoutUser = () => {
        this.props.doLogout()
        this.props.navigation.navigate('AuthLoading');
    }

    goPerfilUser = () => {
        this.props.navigation.navigate('HomeDrawer');
    }

    render() {
        return (
            <View>
                <Text>AtencionScreen Screen</Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    app: state.app,
    user: state.user
  });
const mapDispatchToProps = dispatch => ({
    doLogin: (username, password) => dispatch(actions.user.login({ username, password })),
    doLogout: () => dispatch(actions.confApi.logout())
});
export default connect(mapStateToProps, mapDispatchToProps)(AtencionScreen);