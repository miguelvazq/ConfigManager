import React from 'react';
import { Tab } from 'semantic-ui-react';

class TabNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.onTabChange = this.onTabChange.bind(this);

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.setState({
            loading: false
        });
    }

    onTabChange (event, data) {
        let activeTab = data.activeIndex;
        this.props.childClickEvent(data.panes[activeTab].pane.key);
    }
    
    render() {
        return (
            <Tab panes={this.props.data} renderActiveOnly={false} defaultActiveIndex={0} loading={this.state.loading === true ? "loading" : ""} />
        )
    }
}

export default TabNavigation