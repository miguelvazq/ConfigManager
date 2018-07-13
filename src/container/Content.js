import React from 'react';
import axios from 'axios';
import TabNavigation from '../components/TabNavigation';
import ComponentSet from './ComponentSet';
import UtilityBar from '../components/UtilityBar';
import { Label, Menu } from 'semantic-ui-react'
import BreadcrumbControl from '../components/BreadCrumb';

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

    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data){
            this.renderTabs(nextProps.data);
        }
    }

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
                    SessionId: "39"
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
        let attributeSetData = [];

        result.data.GetNodeResponse.Attributes.Attribute.map((node) => {
            if (!node.Hidden) {
                attributeSetData.push(node);
            }
        });

        data.push({
            menuItem: (
                <Menu.Item key="Attributes">
                    Attributes <Label color="red">1</Label>
                </Menu.Item>
            ),
            pane: {
                key: result.data.GetNodeResponse.NodeId,
                content: <ComponentSet id={result.data.GetNodeResponse.NodeId} data={attributeSetData} />
            }
        });

        Promise.all(attributeSetData).then((response) => {
            result.data.GetNodeResponse.Children.Child.map(async(node, idx) => {
                let componentSetData = []
                let nodeIdResponse = await this.makeNodeIdRequest(node.NodeId);
                componentSetData = nodeIdResponse.data.GetNodeResponse.Attributes.Attribute
                data.push({
                    menuItem: (
                        <Menu.Item key={node.NodeId}>
                            {node.NodeInfo.Category} {/*<Label color="red">15</Label>*/}
                        </Menu.Item>
                    ),
                    pane: {
                        key: node.NodeId,
                        content: <ComponentSet id={node.NodeId} data={componentSetData} />
                    }
                });
                this.setState({
                    currentState: data
                });
            });
        });
    }

    render() {
        return (
            <div className="content" ref="contextRef">
                <UtilityBar/>
                <BreadcrumbControl data={this.props.breadCrumb} />
                <TabNavigation data={this.state.currentState} childClickEvent={this.childClickEventHandler} />
            </div>
        )
    }
}
export default Content;