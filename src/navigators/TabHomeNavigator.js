import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import PacienteScreen from '../screens/paciente/PacienteScreen'
import AddPacienteScreen from '../screens/paciente/AddPacienteScreen'
import AtencionScreen from '../screens/atencion/AtencionScreen'
import ConsultaHCScreen from '../screens/consultahc/ConsultaHCScreen'
import { View } from 'react-native' 
import Icon from 'react-native-vector-icons/Ionicons';

const PacienteStack = createStackNavigator({
    Paciente: PacienteScreen,
    AddPaciente: AddPacienteScreen
})

PacienteStack.navigationOptions = {
    tabBarLabel: 'Paciente',
    tabBarIcon: ({ focused }) => (
        <View>
            <Icon color={focused ? '#77C742' : '#ccc'} size={25} name={'ios-person'} />
        </View>
    ),
};

const AtencionStack = createStackNavigator({
    Antencion: AtencionScreen
});

AtencionStack.navigationOptions = {
    tabBarLabel: 'Atención', 
    tabBarIcon: ({ focused }) => (
        <View>
            <Icon color={focused ? '#77C742' : '#ccc'} size={25} name={'ios-create'} />
        </View>
    ),
};

const ConsultaHCStack = createStackNavigator({
    ConsultaHC: ConsultaHCScreen
});

ConsultaHCStack.navigationOptions = {
    tabBarLabel: 'Consulta HC',
    tabBarIcon: ({ focused }) => (
        <View>
            <Icon color={focused ? '#77C742' : '#ccc'} size={25} name={'ios-document'} />
        </View>
    ),
};

export default createBottomTabNavigator(
    {
        PacienteStack,
        AtencionStack,
        ConsultaHCStack
    },
    {
        initialRouteName: 'PacienteStack',
    }
);
