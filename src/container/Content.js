import React from 'react';
import axios from 'axios';
import TabNavigation from '../components/Tab';
import ComponentSet from '../components/ComponentSet';

const URL = "http://10.239.20.71:8020/ws_config2/GetNode.json"

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentState: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data){
            this.getTabComponents(nextProps.data);
        }
        this.getTabComponents(nextProps.data);
    }

    componentDidMount() {
        this.getTabComponents(this.props.data);
    }

    async makeNodeIdRequest(nodeId) {
        try {
            const response = axios.get(URL, {
                params: {
                    NodeId: nodeId,
                    SessionId: "0"
                }
            });
            return await response;
        } catch (e) {
            console.error(e);
        }
    }

     async getTabComponents(nodeId) {
        let result = await this.makeNodeIdRequest(nodeId);
        let data = [];

        result.data.GetNodeResponse.Children.Child.map(async(node, idx) => {
            let componentSet = await this.makeNodeIdRequest(node.NodeId);
            let componentSetData = componentSet.data.GetNodeResponse.Attributes.Attribute;
            //console.log(componentSet.data.GetNodeResponse.Attributes.Attribute)
            data.push({
                menuItem: node.NodeInfo.Name,
                pane: componentSetData
            });
        });
        this.setState({
            currentState: data
        });
    }

    render() {
        return (
            <div className="content">
                <TabNavigation data={this.state.currentState} />
            </div>
        )
    }

}

export default Content;