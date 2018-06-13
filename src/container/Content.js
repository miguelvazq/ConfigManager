import React from 'react';
import axios from 'axios';
import TabNavigation from '../components/Tab';
const URL = "http://10.239.20.71:8020/ws_config2/GetNode.json"
class Content extends React.Component {
    constructor(props) {
        
        super(props);
        
        this.state = {
            currentState: []
        }
        console.log(this.props.data);
        //this.getTabCompoents(this.props.data);
    }

    componentDidMount() {
        this.getTabCompoents(this.props.data);
    }

    getTabCompoents(nodeId){
        axios.get(URL, {
            params: {
                NodeId: nodeId,
                SessionId: "0",
            }
        }).then(res => {
            var data = [];
            res.data.GetNodeResponse.Attributes.Attribute.map((node, idx) => {
                console.log(node);
                data.push({
                    menuItem: node.DisplayName,
                    pane: node.DisplayName
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