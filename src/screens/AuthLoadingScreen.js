import React from 'react';
import { connect } from 'react-redux'
import ActivityIndicatorUI from '../components/UI/utilities/ActivityIndicatorUI';

class AuthLoadingScreen extends React.Component {
    
    constructor() {
        super();
    }

    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        this._bootstrapAsync();
    }

    _bootstrapAsync = () => {
        this.props.navigation.navigate((this.props.user.usuarioAut !== undefined && this.props.user.usuarioAut !== null) ? 'Home' : 'Auth');
    };

    render() {
        return (
            <ActivityIndicatorUI />
        );
    }
}

const mapStateToProps = state => ({
    app: state.app,
    user: state.user
});
export default connect(mapStateToProps, null)(AuthLoadingScreen);