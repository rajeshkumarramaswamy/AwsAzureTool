import React, { Component } from 'react';
import { Grid, Card, Icon } from 'semantic-ui-react'


const description = [
    'Amy is a violinist with 2 years experience in the wedding industry.',
    'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')

const CardExampleExtraContent = () => (
    <Card>
        <Card.Content header='About Amy' />
        <Card.Content description={description} />
        <Card.Content extra>
            <Icon name='user' />
            4 Friends
      </Card.Content>
    </Card>
)

class SemMainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Grid columns={1} divided centered>
                <Grid.Row>
                <CardExampleExtraContent />
                </Grid.Row>
                <Grid.Row>
                <CardExampleExtraContent />
                </Grid.Row>
            </Grid>
        );
    }
}

export default SemMainComponent;