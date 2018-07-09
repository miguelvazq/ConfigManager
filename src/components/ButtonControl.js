import React from 'react';
import { Button } from 'semantic-ui-react';

class ButtonControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onClick(event, data) {
        console.log(event, data)
    }

    render() {
        return (
            <Button type={this.props.type} disabled={this.props.disabled} color={this.props.color} floated={this.props.floated} onClick={this.onClick}>{this.props.text} </Button>
        )
    }
}

export default ButtonControl;