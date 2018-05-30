import * as React from "react";
import { Select, Input, Button, Radio } from 'antd';
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
const RadioGroup = Radio.Group;

export class Entry extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            environment: [],
        }
        this.openSession();
    };

    handleChange = (e: string) => {
        alert("You selected " + e);
    }

    openSession() {
        var connection = new hpccComms.Connection({ baseUrl: "http://10.239.20.71:8020", type: "post" });
        connection.send("ws_config2/getEnvironmentFileList.json", {
            sessionId: "2"
        }).then(response => {
            let environmentData = response.GetEnvironmentListResponse.environmentFiles.EnvironmentFile;

            this.setState({
                environment: environmentData
            });
        });
    }

    // myCallback = (dataFromClick: number, open: boolean) => {
    //     this.getSubLevelComponents(dataFromClick)
    // }

    render() {
        return <div className="entryDiv">
            <div className="selectConfiguration">
                <div>
                    {/* <img src="../assets/img/hpcc-logo.png" alt="HPCC Logo" />
                {/* <img src={logo2} alt="HPCC Logo" /> */}
                    {/* <img src={logo3} alt="HPCC Logo" /> */}
                    {/* <img src={logo4} alt="HPCC Logo" /> */}
                    {/* <img src={logo5} alt="HPCC Logo" /> */}
                    {/* <img src={logo6} alt="HPCC Logo" /> */}
                    <h3>Configuration Manager</h3>
                    <p>Choose an option to view/create environment</p>
                    <label>Pick a configuration file: </label>
                    <Select defaultValue="Select an environment" style={{ width: 300 }} onChange={this.handleChange}>
                        {this.state.environment.map((item: any, idx: number) => {
                            return <Option key={item.filename} value={item.filename}>{item.filename}</Option>
                        })}
                    </Select>
                    <RadioGroup>
                        <Radio value={1}>Summary View</Radio>
                        <Radio value={2}>Advanced View</Radio>
                    </RadioGroup>
                    <hr />
                    <p>You can also create an environment file</p>
                    <label>Using the wizard: </label> <Input className="wizard" placeholder="Enter a file name" style={{ width: 300 }} />
                    <label>Blank environment: </label> <Input className="new" placeholder="Enter a file ame" style={{ width: 300 }} />
                    <Button className="wizardBtn" type="primary">Create</Button>
                </div>
            </div>
        </div >
    }
}