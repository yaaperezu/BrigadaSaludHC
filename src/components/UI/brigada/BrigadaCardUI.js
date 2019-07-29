import React from 'react'
import { Card, Title, Button, withTheme, Colors, Paragraph  } from 'react-native-paper';
import styleBase from '../../../stylesheets/base.stylesheets'

let BrigadaCardUI = (props) => {
    return (
        <Card style={styleBase.card}>
            <Card.Content>
                <Title>
                    {props.brigada.lugar} - {props.brigada.ciudad}
                </Title>
                <Paragraph>{props.brigada.descripcion}</Paragraph>
                <Paragraph>{(props.brigada.fechai).toLocaleDateString()}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button icon="delete" uppercase={false}
                    color={Colors.grey600}
                    onPress={() => props.deleteBrigada(props.brigada)}>
                    Eliminar
                </Button>
                <Button icon="edit" uppercase={false}
                    color={props.theme.colors.accent}
                    onPress={() => props.goUpdateBrigada(props.brigada)}>
                    Editar
                </Button>
            </Card.Actions>
        </Card>
    )
}

export default withTheme(BrigadaCardUI)