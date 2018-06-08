import React from 'react';
import { Select } from 'semantic-ui-react';

class SelectControl extends React.Component {
    render() {
        return (
            <Select placeholder={this.props.placeholder} options={this.props.options}></Select>
        )
    }
}

export default SelectControl;