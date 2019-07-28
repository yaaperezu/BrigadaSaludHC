import React, { Component } from 'react'
import { connect } from 'react-redux'
import BrigadaUI from '../../components/UI/brigada/BrigadaUI'
import * as actions from '../../store/actions'

class BrigadaScreen extends Component {

    constructor(props) {
        super(props)

        this.listarAllBrigada()
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

    listarAllBrigada = () => {
        this.props.listarAllBrigada()
    }

    goAddBrigada = () => {
        this.props.navigation.navigate('AddBrigada')
    }

    goUpdateBrigada = (brigada) => {
        this.props.navigation.navigate('AddBrigada', {
            brigada: brigada
        })
    }

    deleteBrigada = (brigada) => {
        this.props.deleteBrigada(brigada)
    }

    updateBusqBrigada = (descBrigada) => {
        this.props.busqBrigada(descBrigada)
    }

    render() {
        return (
            <BrigadaUI
                setNavigationColor={this.setNavigationColor}
                goAddBrigada={this.goAddBrigada} 
                goUpdateBrigada={this.goUpdateBrigada}
                dataListBrigada={this.props.brigada.listAllBrigada}
                deleteBrigada={this.deleteBrigada}
                updateBusqBrigada={this.updateBusqBrigada}/>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    brigada: state.brigada
});
const mapDispatchToProps = dispatch => ({
    doLogout: () => dispatch(actions.user.logout()),
    listarAllBrigada: () => dispatch(actions.brigada.listarAllBrigada()),
    deleteBrigada: brigada => dispatch(actions.brigada.deleteBrigada(brigada)),
    busqBrigada: descBrigada => dispatch(actions.brigada.busqBrigada(descBrigada))
});
export default connect(mapStateToProps, mapDispatchToProps)(BrigadaScreen);