import * as React from "react";
import '../assets/sass/sublevelnav.sass';
import axios from 'axios';

const IP = "http://10.239.20.71:8020/ws_config2/getNode.json";

export class SubLevelNav extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            subLevelItems: []
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
                topLevelItems: currentState
            });
        });
    }

    render() {
        return  <ul>
            { this.state.topLevelItems.map((item:any, idx:number) => {
                let isActive = (idx === 0) ? 'active' : '';
                console.log(item)
                return <li key={item.nodeId}><a href={item.nodeId} className={isActive}>{item.elementInfo.name}</a></li> })
            }
        </ul>
    }
}