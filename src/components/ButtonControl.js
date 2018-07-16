import React from 'react';
import { Button } from 'semantic-ui-react';

export default class ButtonControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick(event, data) {
        this.props.onClick(data)
    }

    render() {
        return (
            <Button type={this.props.type} disabled={this.props.disabled} color={this.props.color} floated={this.props.floated} onClick={this.onClick}>{this.props.text} </Button>
        )
    }
}