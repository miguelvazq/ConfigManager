// import * as React from "react";
// import { TabNav } from '../components/TabNav';
// import * as hpccComms from "@hpcc-js/comms";
// import * as util from "@hpcc-js/util";

// export class Content extends React.Component<any, any> {
//     constructor(props:any) {
//         super(props);
//         this.state = {
//             tabData: []
//         }
//     };

//     myCallback = (dataFromClick:number, open:boolean) => {
//         this.getTabCompoents(dataFromClick)
//     }

//     getTabCompoents(nodeId:number){
//         var connection = new hpccComms.Connection({ baseUrl: "http://10.239.20.71:8020", type: "get" });
//         connection.send("ws_config2/getNode.json", {
//             nodeId: nodeId,
//             sessionId: "0"
//         }).then(response => {
//             let defaultState = this.state.subLevelData;
//             let currentState = response.GetNodeResponse.children.child;
//             this.setState({
//                 subLevelData: currentState
//             });
//         });
//     }

//     render() {
//         return  <TabNav tabData={this.state.tabData} callbackFromParent={this.myCallback} />
//     }




// }