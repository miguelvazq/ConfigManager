import * as React from "react";
import * as hpccComms from "@hpcc-js/comms";
import * as util from "@hpcc-js/util";

export class SubLevelNav extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            subLevelItems: []
        }
    }

    componentWillMount() {
    }

    render() {
        return <div className="subLevelDiv">
        </div>
    }
}