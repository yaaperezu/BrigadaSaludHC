import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'

class ConsultaHCScreen extends Component {

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
                <Text>Consulta HC Screen</Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    app: state.app,
    user: state.user
  });
const mapDispatchToProps = dispatch => ({
    doLogout: () => dispatch(actions.user.logout())
});
export default connect(mapStateToProps, mapDispatchToProps)(ConsultaHCScreen);