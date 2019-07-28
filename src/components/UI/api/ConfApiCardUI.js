import React from 'react'
import { Card, Title, Paragraph, Button, withTheme,Colors  } from 'react-native-paper';
import styleBase from '../../../stylesheets/base.stylesheets'

let ConfApiCardUI = (props) => {
    return (
        <Card style={styleBase.card}>
            <Card.Content>
                <Title>
                    {props.confApi.protocolo}://{props.confApi.server}:{props.confApi.port}
                </Title>
                <Paragraph>
                    {props.confApi.server}
                </Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button icon="delete" uppercase={false}
                    color={Colors.grey600}
                    onPress={() => props.deleteConfAPI(props.confApi)}>
                    Eliminar
                </Button>
                <Button icon="edit" uppercase={false}
                    color={props.theme.colors.accent}
                    onPress={() => props.goUpdateConfAPI(props.confApi)}>
                    Editar
                </Button>
            </Card.Actions>
        </Card>
    )
}

export default withTheme(ConfApiCardUI)