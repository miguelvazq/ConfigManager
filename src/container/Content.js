import React from 'react';
import axios from 'axios';
import TabNavigation from '../components/TabNavigation';
import ComponentSet from './ComponentSet';
import UtilityBar from '../components/UtilityBar';
import { Sticky } from 'semantic-ui-react';

const URL = "http://10.239.20.71:8020/ws_config2/GetNode.json"

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentState: [],
            key: ""
        }
        this.makeNodeIdRequest = this.makeNodeIdRequest.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props.data !== nextProps.data){
    //         this.renderTabs(nextProps.data);
    //     }
    // }

    componentDidMount() {
        this.renderTabs(this.props.data);
    }

    childClickEventHandler(data) {
        this.renderTabs(data);
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

    async renderTabs(nodeId)  {
        let result = await this.makeNodeIdRequest(nodeId);
        let data = [];
        let componentSetData = [];

        result.data.GetNodeResponse.Attributes.Attribute.map((node) => {
            if (!node.Hidden) {
                componentSetData.push(node);
            }
        });

        data.push({
            menuItem: "Attributes",
            pane: <ComponentSet key={result.data.GetNodeResponse.NodeId} data={componentSetData} />
        });

        Promise.all(componentSetData).then((response) => {
            result.data.GetNodeResponse.Children.Child.map((node, idx) => {
                let componentSetData = []
                let nodeIdResponse = this.makeNodeIdRequest(node.NodeId);
                componentSetData = nodeIdResponse.data.GetNodeResponse.Attributes.Attribute
                data.push({
                    menuItem: node.NodeInfo.Name,
                    pane: <ComponentSet key={node.NodeId} data={componentSetData} />
                });
            });
        });
        console.log(data)
        this.setState({
            currentState: data
        });

        // // this.setState({
        // //     currentState: data,
        // //     key: result.data.GetNodeResponse.NodeId
        // // });
        // result.data.GetNodeResponse.Children.Child.map((node, idx) => {
        //     let nodeIdResponse = this.makeNodeIdRequest(node.NodeId);
        //     componentSetData = nodeIdResponse.data.GetNodeResponse.Attributes.Attribute
        //     data.push({
        //         menuItem: node.NodeInfo.Name,
        //         pane: <ComponentSet key={node.NodeId} data={componentSetData} />
        //     });
        //     this.setState({
        //         currentState: data
        //     });
        // });
    }

    // async getTabComponents(nodeId) {
    //     let result = await this.makeNodeIdRequest(nodeId);
    //     let data = [];
    //     let componentSetData = [];

    //     data.push({
    //         menuItem: "Attributes",
    //         pane: <ComponentSet key={result.data.GetNodeResponse.NodeId} data={result.data.GetNodeResponse.Attributes.Attribute} />
    //     });

    //     result.data.GetNodeResponse.Children.Child.map(async(node, idx) => {
    //         let nodeIdResponse = await this.makeNodeIdRequest(node.NodeId);
    //         componentSetData = nodeIdResponse.data.GetNodeResponse.Attributes.Attribute
    //         data.push({
    //             menuItem: node.NodeInfo.Name,
    //             pane: <ComponentSet key={node.NodeId} data={componentSetData} />
    //         });
    //         this.setState({
    //             currentState: data
    //         });
    //     });
    // };

    render() {
        return (
            <div className="content" ref="contextRef">
                <UtilityBar/>
                <TabNavigation data={this.state.currentState} childClickEvent={this.childClickEventHandler} />
            </div>
        )
    }
}
export default Content;