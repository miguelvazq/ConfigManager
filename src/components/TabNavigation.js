import React from 'react';
import { Tab } from 'semantic-ui-react';

class TabNavigation extends React.Component {
    constructor(props) {
        super(props);

        this.onTabChange = this.onTabChange.bind(this);
    }

    onTabChange (event, data) {
        let activeTab = data.activeIndex;
        this.props.childClickEvent(data.panes[activeTab].pane.key);
        //console.log(event)
        
        //console.log(data)
    }

    render() {
        return (
            <Tab panes={this.props.data} renderActiveOnly={false} defaultActiveIndex={0} onTabChange={this.onTabChange} />
        )
    }
}

export default TabNavigation