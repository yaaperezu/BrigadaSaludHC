import React, { Component } from 'react'
import { connect } from 'react-redux'
import BrigadaUI from '../../components/UI/brigada/BrigadaUI'
import * as actions from '../../store/actions'

class BrigadaScreen extends Component {

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
            title: 'Brigada de Salud',
            headerStyle: {
                backgroundColor: '#6F9479'
            },
            headerTitleStyle: {
                color: 'white'
            }
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

    goAddBrigada = () => {
        this.props.navigation.navigate('AddBrigada')
    }

    render() {
        return (
            <BrigadaUI 
                setNavigationColor={this.setNavigationColor} 
                goAddBrigada={this.goAddBrigada}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(BrigadaScreen);