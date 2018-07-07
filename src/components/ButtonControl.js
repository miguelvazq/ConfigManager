import React from 'react';
import { Button } from 'semantic-ui-react';

class ButtonControl extends React.Component {
    render() {
        return (
            <Button type={this.props.type} disabled={this.props.disabled} color={this.props.color} floated={this.props.floated}>{this.props.text}</Button>
        )
    }
}

export default ButtonControl;