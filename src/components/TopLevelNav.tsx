import * as React from "react";
import * as hpccComms from "@hpcc-js/comms";
import * as util from "@hpcc-js/util";
import '../assets/sass/styles.sass'

export class TopLevelNav extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            topLevelItems: [],
            clicked: null
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (nodeId:any) => {
        this.setState({ clicked: nodeId });
        console.log(this.state.clicked);
      }

    componentWillMount() {
        var connection = new hpccComms.Connection({ baseUrl: "http://10.239.20.71:8020", type: "get" });
        connection.send("ws_config2/getNode.json", {
            nodeId: ".",
            sessionId: "0"
        }).then(response => {
            let defaultState = this.state.topLevelItems;
            let currentState = response.GetNodeResponse.children.child;
            this.setState({
                topLevelItems: currentState
            });
        });
    }

    render() {
        return  <div className="topLevelNav">
            <ul>
                { this.state.topLevelItems.map((item:any, idx:number) => {
                    let isActive = (idx === 0) ? 'active' : '';
                    return <li key={item.nodeId}><a href={item.nodeId} className={isActive} onClick={() => this.handleClick(item.nodeId)}>{item.elementInfo.name}</a></li> })
                }
            </ul>
        </div>
    }
}