import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchData } from '../../actions'
import ShowListStyle from './showList.style'

class ShowListComponent extends Component {

    componentWillMount() {
        this.props.fetchData()
    }

    getTvShows() {
        const { dataUsers } = this.props;

        if (dataUsers) {
            return dataUsers.data.map((user, index) => {
                return (
                    <View key={index} style={ShowListStyle.itemList}>
                        <Text>{user.name}</Text>
                    </View>
                );
            })
        }
    }

    render() {
        return (
            <View style={ShowListStyle.containerList}>
                <ScrollView>
                    {this.props.dataUsers.isFeching && <Text>Loading</Text>}
                    {this.props.dataUsers.data.length
                        ? this.getTvShows()
                        : null}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        dataUsers: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => {
            return dispatch(fetchData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowListComponent);