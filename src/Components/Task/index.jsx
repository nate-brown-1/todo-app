import React from 'react';

import { Card, Text, Badge, Button, Group, CardSection, Container } from '@mantine/core';

function Task(props) {

    return (
        <Card>

            <Card.Section>
                <Group className="taskHeader" position="apart">
                    <Group spacing="xl">
                        {props.item.complete
                            ?
                            <Badge color="coral" variant="filled">Complete</Badge>
                            :
                            <Badge color="green" variant="filled">Incomplete</Badge>
                        }
                        <Text fw={500}>{props.item.assignee}</Text>
                    </Group>

                    <Button color="blue" size="small" onClick={() => props.deleteItem(props.item.id)}> X </Button>
                </Group>
            </Card.Section>

            <Card.Section>
                <Container>
                    <Text>{props.item.text}</Text>
                    <Text align="right">Difficulty: {props.item.difficulty}</Text>
                </Container>

            </Card.Section>

            <CardSection>
                <Group position="right" >
                    <Button onClick={() => props.toggleComplete(props.item.id)}>Mark Complete</Button>
                </Group>
            </CardSection>
        </Card>
    )

}

export default Task;