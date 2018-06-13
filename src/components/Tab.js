import React from 'react';
import { Tab } from 'semantic-ui-react'

class TabNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Tab panes={this.props.data} renderActiveOnly={false} />
        )
    }
}

export default TabNavigation