import React from 'react'
import { Card, Title, Paragraph, Button, withTheme } from 'react-native-paper';
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
                <Button>Editar</Button>
            </Card.Actions>
        </Card>
    )
}

export default withTheme(ConfApiCardUI)