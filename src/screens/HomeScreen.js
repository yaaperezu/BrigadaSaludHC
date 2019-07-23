import React, {Component} from 'react'
import { TabHomeNavigator } from '../navigators/TabHomeNavigator'
import { createAppContainer } from 'react-navigation'

const AppHomeContainer = createAppContainer(TabHomeNavigator);

export class HomeScreen extends Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null
        }
    }

    render() {

        return (
            <AppHomeContainer />
        )
    }

};
