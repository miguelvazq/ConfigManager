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

    getTabComponents(nodeId){
        axios.get(URL, {
            params: {
                NodeId: nodeId,
                SessionId: "0",
            }
        }).then(res => {
            var data = [];
            res.data.GetNodeResponse.Children.Child.map((node, idx) => {
                data.push({
                    menuItem: node.NodeInfo.Name,
                    pane: node.NodeInfo.Name,
                })
            });

            this.setState({
                currentState: data
            })
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