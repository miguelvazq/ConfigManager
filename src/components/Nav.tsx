import * as React from "react";
import '../assets/sass/nav.sass';
import axios from 'axios';

const IP = "http://10.239.20.71:8020/ws_config2/getNode.json";

//export interface Nav {  }

export class Nav extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            topLevelItems: []
        }
    }

    componentWillMount() {
        axios.get(IP, {
            params: {
                nodeId: ".",
                sessionId: "0"
            }
        }).then(res => {
            let defaultState = this.state.topLevelItems;
            let currentState = res.data.GetNodeResponse.children.child;
            this.setState({
                topLevelItems: currentState})
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
        return  <div className="leftPanel">
                    <nav>
                        {/* <section><span>Configuration Manager 2.0</span></section> */}
                        <ul>
                            { this.state.topLevelItems.map((item:any, idx:number) => {
                                let isActive = (idx === 0) ? 'active' : '';
                                return <li key={item.nodeId}><a href="#" className={isActive}>{item.elementInfo.name}</a></li> })
                            }
                        </ul>
                    </nav>
                </div>
    }
}