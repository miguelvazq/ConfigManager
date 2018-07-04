import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'semantic-ui-react';

class BreadcrumbControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }
    }

    render() {
        return (
            // <Dropdown placeholder={this.props.placeholder} compact selection options={this.props.options}></Dropdown>
            <Breadcrumb>
                <Breadcrumb.Section link>Home</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right angle' />
                <Breadcrumb.Section link>Home</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right angle' />
                <Breadcrumb.Section link>Home</Breadcrumb.Section>
            </Breadcrumb>
        )
    }
}

export default BreadcrumbControl;


