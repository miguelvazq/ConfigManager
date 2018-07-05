import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Segment } from 'semantic-ui-react';

class BreadcrumbControl extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Segment>
                <Breadcrumb size="large">
                    <Breadcrumb.Section>{this.props.data[0].parent}</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section>{this.props.data[0].component}</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section active>{this.props.data[0].node}</Breadcrumb.Section>
                </Breadcrumb>
            </Segment>
        )
    }
}

export default BreadcrumbControl;


