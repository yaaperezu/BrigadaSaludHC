import React from 'react'
import { Card, Title, Button, withTheme, Colors, Paragraph  } from 'react-native-paper';
import styleBase from '../../../stylesheets/base.stylesheets'

let UserCardUI = (props) => {
    return (
        <Card style={styleBase.card}>
            <Card.Content>
                <Title>
                    {props.user.nombre} {props.user.apellido}
                </Title>
                <Paragraph>{props.user.tipoDoc}: {props.user.numeroDocumento}</Paragraph>
                <Paragraph>Nombre de Usuario: {props.user.nombreUsuario}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button icon="delete" uppercase={false}
                    color={Colors.grey600}
                    onPress={() => props.deleteUser(props.user)}>
                    Eliminar
                </Button>
                <Button icon="edit" uppercase={false}
                    color={props.theme.colors.accent}
                    onPress={() => props.goUpdateUser(props.user)}>
                    Editar
                </Button>
            </Card.Actions>
        </Card>
    )
}

export default withTheme(UserCardUI)