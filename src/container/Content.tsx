import * as React from "react";
import { TabNav } from '../components/TabNav';
import * as hpccComms from "@hpcc-js/comms";
import * as util from "@hpcc-js/util";

export class Content extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            currentState: null
        }
        console.log(this.props.data)
    }

    componentDidMount() {
        this.getTabCompoents(this.props.childID);
    }

    getTabCompoents(nodeId:number){
        var connection = new hpccComms.Connection({ baseUrl: "http://10.239.20.71:8020", type: "get" });
        connection.send("ws_config2/getNode.json", {
            nodeId: this.props.data,
            sessionId: "0"
        }).then(response => {
            this.setState({
                currentState: response.GetNodeResponse.nodeInfo
            });
        });
    }

    render() {
        return {this.state.childID !== "" ? <TabNav tabData={this.state.currentState} /> : null }
        
    }




}