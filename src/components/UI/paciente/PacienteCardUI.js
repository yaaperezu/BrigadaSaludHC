import React from 'react'
import { Card, Title, Button, withTheme, Colors, Paragraph  } from 'react-native-paper';
import styleBase from '../../../stylesheets/base.stylesheets'

let PacienteCardUI = (props) => {
    return (
        <Card style={styleBase.card}>
            <Card.Content>
                <Title>
                    {props.paciente.nombre} {props.paciente.apellido}
                </Title>
                <Paragraph>{props.paciente.tipoDoc}: {props.paciente.numeroDocumento}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button icon="delete" uppercase={false}
                    color={Colors.grey600}
                    onPress={() => props.deletePaciente(props.paciente)}>
                    Eliminar
                </Button>
                <Button icon="edit" uppercase={false}
                    color={props.theme.colors.accent}
                    onPress={() => props.goUpdatePaciente(props.paciente)}>
                    Editar
                </Button>
            </Card.Actions>
        </Card>
    )
}

export default withTheme(PacienteCardUI)