import * as React from "react";
import { Select } from 'antd';
import * as hpccComms from "@hpcc-js/comms";
import * as util from "@hpcc-js/util";

const Option = Select.Option;

export class Entry extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            environtment: "",
        }
    };

    handleChange = (e:string) => {
        alert("You selected " + e);
    }

    openSession(){
        var connection = new hpccComms.Connection({ baseUrl: "http://10.239.20.71:8020", type: "post" });
        connection.send("ws_config2/getNode.json", {
        }).then(response => {
            let environment = this.state.environment;
            let environmentData = response.GetNodeResponse.children.child;
            this.setState({
                emnvironement: environmentData
            });
        });
    }

    // myCallback = (dataFromClick:number, open:boolean) => {
    //     this.getSubLevelComponents(dataFromClick)
    // }

    render() {
        return  <div className="entryDiv">
            <div className="selectConfiguration">
            <div>
                <img src="hpcc-logo.png" alt="HPCC Logo" />
                <label>Pick a configuration file: </label>
                <Select defaultValue="" style={{ width: 300 }} onChange={this.handleChange}>
                    <Option value="environtment.xml">environtment.xml</Option>
                </Select>
  </div>
            </div>
        </div>
    }
}