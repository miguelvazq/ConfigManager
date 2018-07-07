import React from 'react'
import { Checkbox, Form, Popup } from 'semantic-ui-react'

class CheckBoxControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: this.props.checked ? "enabled" : "disabled"
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(event, data){
        this.setState({
            checked: this.state.checked === "enabled" ? "disabled" : "enabled"
        })
    }

    render() {
        return (
            <Popup trigger={
                <Form.Field required={this.props.required} width={8}>
                    <label>{this.props.label}</label>
                    <Checkbox label={" (" + this.state.checked +")" }  defaultChecked={this.props.checked} toggle onChange={this.onChange} />
                </Form.Field>}
            content={this.props.tooltip}/>
        )
    }
}
export default CheckBoxControl