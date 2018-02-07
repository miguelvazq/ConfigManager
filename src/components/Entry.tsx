import * as React from "react";
import { Select } from 'antd';
import * as hpccComms from "@hpcc-js/comms";
import * as util from "@hpcc-js/util";
// import * as logo from 'assets/img/hpcc-logo.png';
// import * as logo2 from './assets/img/hpcc-logo.png';
// import * as logo3 from '../assets/img/hpcc-logo.png';
// import logo4 from 'assets/img/hpcc-logo.png';
// import logo5 from './assets/img/hpcc-logo.png';
// import logo6 from '../assets/img/hpcc-logo.png';
//import * as logo from '*.png'
const Option = Select.Option;

export class Entry extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            environment: [],
        }
        this.openSession();
    };

    handleChange = (e:string) => {
        alert("You selected " + e);
    }

    openSession(){
        var connection = new hpccComms.Connection({ baseUrl: "http://10.239.20.71:8020", type: "post" });
        connection.send("ws_config2/getEnvironmentFileList.json", {
            sessionId: "0"
        }).then(response => {
            let environmentData = response.GetEnvironmentListResponse.environmentFiles.environmentFile;

            this.setState({
                environment: environmentData
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
                {/* <img src="../assets/img/hpcc-logo.png" alt="HPCC Logo" />
                {/* <img src={logo2} alt="HPCC Logo" /> */}
                {/* <img src={logo3} alt="HPCC Logo" /> */}
                {/* <img src={logo4} alt="HPCC Logo" /> */}
                {/* <img src={logo5} alt="HPCC Logo" /> */}
                {/* <img src={logo6} alt="HPCC Logo" /> */}
                <h3>HPCC Systems</h3>
                <p>Choose an option to create/view environment</p>
                <label>Pick a configuration file: </label>

                <Select defaultValue="Select an environment" style={{ width: 300 }} onChange={this.handleChange}>
                {this.state.environment.map((item:any, idx:number) => {
                    return <Option key={item.filename} value={item.filename}>{item.filename}</Option>
                })}
                </Select>
                <p>You can also create a blank environment file</p>
                
  </div>
            </div>
        </div>
    }
}