import React from 'react'
import { Popup, Form} from 'semantic-ui-react'

export default class InputControl extends React.Component {
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
        return data.value;
    }

    render() {
        return (
            this.props.tooltip ? <Popup trigger={<Form.Input type={this.props.type} placeholder={this.props.placeholder} defaultValue={this.props.defaultValue} onChange={this.onChange} error={this.state.validationError} />} content={this.props.tooltip}/> : <Form.Input type={this.props.type} placeholder={this.props.placeholder} defaultValue={this.props.defaultValue} onChange={this.onChange} error={this.state.validationError} />
        )
    }
}