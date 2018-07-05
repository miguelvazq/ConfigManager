import React from 'react';
import PropTypes from 'prop-types';
import { Form, Popup, Dropdown } from 'semantic-ui-react';

class DropdownControl extends React.Component {
    render() {
        return (
            <Form.Field required={this.props.required} width={8}>
                <label>{this.props.label}</label>
                <Form.Dropdown placeholder={this.props.placeholder} selection options={this.props.options}></Form.Dropdown>
            </Form.Field>
            
        )
    }
}

DropdownControl.propTypes = {
    placeholder: PropTypes.string.isRequired
}

DropdownControl.defaultProps = {
    placeholder: "Please make a selection"
}

export default DropdownControl;


