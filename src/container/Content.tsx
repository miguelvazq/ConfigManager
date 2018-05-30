import * as React from "react";
import { TabNav } from '../components/TabNav';
import * as hpccComms from "@hpcc-js/comms";
import * as util from "@hpcc-js/util";

export class Content extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentState: ""
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps) {
            this.getTabComponents(nextProps.data);
        }
        this.getTabComponents(nextProps.data);
    }

    getTabComponents(nodeId: number) {
        var connection = new hpccComms.Connection({ baseUrl: "http://10.239.20.71:8020", type: "get" });
        connection.send("ws_config2/getNode.json", {
            nodeId: nodeId,
            sessionId: "0"
        }).then(response => {
            this.setState({
                currentState: response.GetNodeResponse.attributes.attribute
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.currentState.length !== 0 ? <TabNav tabData={this.state.currentState} /> : null}
            </div>
        )

    }




}