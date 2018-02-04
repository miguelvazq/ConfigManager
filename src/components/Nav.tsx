import * as React from "react";
import { TreeNav } from './TreeNav';
import * as hpccComms from "@hpcc-js/comms";
import * as util from "@hpcc-js/util";

export class Nav extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            topLevelData: [],
            subLevelData: []
        }
        this.getTopLevelComponents();
    };

    myCallback = (dataFromClick:number, open:boolean) => {
        this.getSubLevelComponents(dataFromClick)
    }

    getTopLevelComponents(){
        var connection = new hpccComms.Connection({ baseUrl: "http://10.239.20.71:8020", type: "get" });
        connection.send("ws_config2/getNode.json", {
            nodeId: ".",
            sessionId: "0"
        }).then(response => {
            let defaultState = this.state.topLevelData;
            let currentState = response.GetNodeResponse.children.child;
            this.setState({
                topLevelData: currentState,
            });
        });
    }

    getSubLevelComponents(nodeId:number){
        var connection = new hpccComms.Connection({ baseUrl: "http://10.239.20.71:8020", type: "get" });
        connection.send("ws_config2/getNode.json", {
            nodeId: nodeId,
            sessionId: "0"
        }).then(response => {
            let defaultState = this.state.subLevelData;
            let currentState = response.GetNodeResponse.children.child;
            this.setState({
                subLevelData: currentState
            });
        });
    }

    render() {
        return  <nav>
                <TreeNav topLevelTreeData={this.state.topLevelData} subLevelData={this.state.subLevelData} callbackFromParent={this.myCallback} />
            </nav>
    }
}