import * as React from "react";
import axios from "axios";
import {Form, Grid, Image, Divider, Dropdown} from "semantic-ui-react"
import ButtonControl from '../components/ButtonControl';
import DropdownControl from '../components/DropdownControl';
import InputControl from '../components/InputControl';
import homeIcon from "../assets/img/hpcc-logo.png";
import { NavLink } from "react-router-dom";

const URL = "http://10.239.20.71:8020/ws_config2"

class Entry extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            environments: [],
            environmentSelected: false,
            wizardEnvironment: false,
            blankEnvironment: false
        }
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleBlankEnvironment = this.handleBlankEnvironment.bind(this);
        this.handleWizardEnvironment = this.handleWizardEnvironment.bind(this);
    };

    handleFileChange(data, event) {
        this.setState({
            environmentSelected: event.value,
            wizardEnvironment: !event.value,
            blankEnvironment: !event.value
        });
    }

    handleBlankEnvironment(data, event) {
        // this.setState({
        //     environmentSelected: !event.value,
        //     wizardEnvironment: !event.value,
        //     blankEnvironment: event.value
        // });
        console.log(data, event)
    }

    handleWizardEnvironment(data, event) {
        // this.setState({
        //     environmentSelected: !event.value,
        //     wizardEnvironment: event.value,
        //     blankEnvironment: !event.value
        // });
        console.log(data, event)
    }


    async componentDidMount() {
        const files = [];
        const openSession = axios.get(URL+"/OpenSession.json", {});
        try {
            let response = await openSession;
            if (response.data.OpenSessionResponse.SessionId) {
                const sessionID = response.data.OpenSessionResponse.SessionId;
                const getEnvironments = axios.get(URL+"/GetEnvironmentFileList.json", {
                    params:{
                        SessionId: sessionID
                    }
                });
                const environmentResponse = await getEnvironments;
                const environmentList = environmentResponse.data.GetEnvironmentListResponse.EnvironmentFiles.EnvironmentFile
                environmentList.map((file) =>{
                    files.push({
                        text: file.Filename,
                        value: file.Filename,
                    });
                });
                Promise.all(files).then((response) => {
                    this.setState({
                        environments: response
                    });
                });
            }
        } catch (e) {
            console.log (e)
        }
    }

    render() {
        return (
            <div className="entryContainer">
                <div className="selectConfiguration">
                    <Image src={homeIcon} centered size='small' />
                    <h3>Configuration Manager 2.0</h3>
                    <p>Choose an option to create/view environment</p>
                    <Grid width={3}>
                        <Grid.Row>
                            <Grid.Column>
                                <Form>
                                    <Form.Field>
                                        <Dropdown label="Existing environment" placeholder='Select an environment' fluid selection label="Select an environment" options={this.state.environments} onChange={this.handleFileChange} />
                                    </Form.Field>
                                    <Divider horizontal>Or</Divider>
                                    <Form.Field>
                                        <label>Generate new environment using wizard</label>
                                        <input /*disabled={this.state.wizardEnvironment}*/ disabled="true" placeholder="Enter file name" onChange={this.handleWizardEnvironment} />
                                        {/* <InputControl label="Generate new environment using wizard" disabled={this.state.wizardEnvironment} placeholder="Enter file name" onChange={this.handleWizardEnvironment} /> */}
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Create blank environment</label>
                                        <input /*disabled={this.state.blankEnvironment}*/ disabled="true" placeholder="Enter file name" onChange={this.onChange} />
                                        {/* <InputControl label="Create blank environment" disabled={this.state.blankEnvironment} placeholder="Enter file name" onChange={this.onChange} /> */}
                                    </Form.Field>
                                    <NavLink to="/environment"><ButtonControl disabled={!this.state.environmentSelected} type="submit" color="blue" floated="right" text="Next" onClick={this.props.onClick}></ButtonControl></NavLink>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        )
    }
}
export default Entry;