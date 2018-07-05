import React from 'react'
import { Popup, Form} from 'semantic-ui-react'

class InputControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validationError: false,
            requiredCount: 0
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(event, data) {
        if (!data.value && this.props.required === true) {
            this.setState({
                validationError: true
            });
        } else {
            this.setState({
                validationError: false
            });
        }
    }

    render() {
        return (
            <Popup trigger={
                <Form.Field required={this.props.required} width={8}>
                    <label>{this.props.label}</label>
                    <Form.Input type={this.props.type} placeholder={this.props.placeholder} defaultValue={this.props.defaultValue} onChange={this.onChange} error={this.state.validationError} />
                </Form.Field>}
            content={this.props.tooltip}/>
        )
    }
}
export default InputControl