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

        // var topLevel:Array<string> = [];

        // axios.get(IP, {
        //     params: {
        //         nodeId: ".",
        //         sessionId: "0"
        //     }
        // })
        // .then(function (response) {
        //     let parentComponent = response.data.GetNodeResponse.children.child;
            
        //     parentComponent.map((item:any, idx:number) => {
        //         if (item.elementInfo.name === "Hardware" || item.elementInfo.name == "Software") {
        //             topLevel.push(item.elementInfo.name)
        //         }
        //     });
        // }).catch(function (error) {
        //     console.log(error);
        // });

        // this.setState({
        //     topLevelItems: ["hi", "hello"]
        // });

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