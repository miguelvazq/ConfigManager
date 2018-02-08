import * as React from "react";
import { TreeNav } from '../components/TreeNav';
import { TabNav } from '../components/TabNav';
import * as hpccComms from "@hpcc-js/comms";
import * as util from "@hpcc-js/util";
import { open } from "fs";

export class Nav extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            topLevelData: [],
            subLevelData: [],
            tabData: []
        }
    };

    componentDidMount() {
        var connection = new hpccComms.Connection({ baseUrl: "http://10.239.20.71:8020", type: "get" });
        connection.send("ws_config2/getNode.json", {
            nodeId: ".",
            sessionId: "0"
        }).then(response => {
            response.GetNodeResponse.children.child.forEach((item:any, idx:number) => {
                if (response.GetNodeResponse.children.child[idx].nodeInfo.name === "Software") {
                    this.getSubLevelComponents(item.nodeId);
                    this.getTabComponents(item.nodeId);
                }
            })
            let defaultState = this.state.topLevelData;
            let currentState = response.GetNodeResponse.children.child;
            this.setState({
                topLevelData: currentState,
            });
        });
    }

    subMenuCallback = (dataFromClick:number, open:boolean) => {
        this.getSubLevelComponents(dataFromClick)
        this.getTabComponents(dataFromClick)
    }

    // tabMenuCallback = (dataFromClick:number) => {
    //     this.setState({
    //         tabData: dataFromClick
    //     });
    // }

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

    getTabComponents(nodeId:number){
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
                    <section className="logo"><div className="logoContainer">CM</div><span className="strong">Configuration Manager</span></section>
                    <section className="configuring"><span>Currently editing: </span><p className="strong">environment.xml</p></section>
                    <TreeNav topLevelTreeData={this.state.topLevelData} subLevelData={this.state.subLevelData} callbackFromSubMenu={this.subMenuCallback} />
                    <TabNav tabData={this.state.tabData} callbackFromTabMenu={this.tabMenuCallback} />
                </nav>
    }
}