import React from 'react';
import { Tab } from 'semantic-ui-react';

class TabNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    onTabChange (event, data) {
        console.log(event)
        console.log(data)
    }

    render() {
        return (
            <Tab panes={this.props.data} renderActiveOnly={false} onTabChange={this.onTabChange} />
        )
    }
}

export default TabNavigation