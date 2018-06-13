import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

class DropdownControl extends React.Component {
    render() {
        return (
            <Dropdown placeholder={this.props.placeholder} compact selection options={this.props.options}></Dropdown>
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


