import React from 'react'
import { Input, Popup, Form } from 'semantic-ui-react'

class InputControl extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Popup trigger={<Form.Input type={this.props.type} placeholder={this.props.placeholder} label={this.props.label}  />} content={this.props.tooltip} width={6} />
        )
    }
}
export default InputControl