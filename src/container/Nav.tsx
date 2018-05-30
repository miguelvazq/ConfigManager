import * as React from "react";
import { TreeNav } from '../components/TreeNav';
import { TabNav } from '../components/TabNav';
import * as hpccComms from "@hpcc-js/comms";
import * as util from "@hpcc-js/util";
import { open } from "fs";

export class Nav extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            topLevelData: []
        }
    };

    componentDidMount() {
        var connection = new hpccComms.Connection({ baseUrl: "http://10.239.20.71:8020", type: "get" });
        connection.send("ws_config2/getTree.json", {
            nodeId: "2",
            sessionId: "519",
            includeAttributes: true,
            numLevels: 2
        }).then(response => {
            let currentState = response.GetTreeResponse.tree.children.node;
            this.setState({
                topLevelData: currentState,
            });
        });
    }

    subMenuCallback = (dataFromClick: number, open: boolean) => { //only for children of submenu click to affect tabs
        this.props.onClick(dataFromClick);
    }

    render() {
        return <nav>
            <section className="logo"><div className="logoContainer">CM</div><span className="strong">Configuration Manager</span></section>
            <section className="configuring"><span>Currently editing: </span><p className="strong">environment.xml</p></section>
            <TreeNav topLevelTreeData={this.state.topLevelData} subLevelData={this.state.subLevelData} changeHandler={this.subMenuCallback} />
        </nav>
    }
}