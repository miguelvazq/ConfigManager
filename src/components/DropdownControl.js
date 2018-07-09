import React from 'react';
import PropTypes from 'prop-types';
import { Form, Popup} from 'semantic-ui-react';

class DropdownControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [],
            id: ""
        }
    }

    componentDidMount() {
        this.props.options.map((option) => {
            this.state.options.push({
                key: option.Value,
                value: option.Value,
                text: option.DisplayName
            });
        });
    }

    render() {
        return (
            <Form.Field required={this.props.required} width={8}>
                <label>{this.props.label}</label>
                {this.props.tooltip ? <Popup trigger={<Form.Dropdown placeholder={this.props.placeholder} selection options={this.state.options}></Form.Dropdown>} content={this.props.tooltip}/> : <Form.Dropdown placeholder={this.props.placeholder} selection options={this.state.options}></Form.Dropdown>}
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


