import * as React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from "axios";
import {Form, Grid, Image, Divider} from "semantic-ui-react"
import ButtonControl from '../components/ButtonControl';
import DropdownControl from '../components/DropdownControl';
import InputControl from '../components/InputControl';
import homeIcon from "../assets/img/hpcc-logo.png";

const URL = "http://10.239.20.71:8020/ws_config2"

export class Entry extends React.Component{
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
                const files = [];
                environmentList.map((file) =>{
                    files.push({
                        DisplayName: file.Filename,
                        Value: file.Filename,
                    });
                });
                this.setState({
                    environments: files
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
                                        <DropdownControl label={"Existing environment"} placeholder='Select an environment' fluid selection label="Select an environment" options={this.state.environments} onChange={this.handleFileChange} />
                                    </Form.Field>
                                    <Divider horizontal>Or</Divider>
                                    <Form.Field>
                                        <InputControl label="Generate new environment using wizard" disabled={this.state.wizardEnvironment} placeholder="Enter file name" onChange={this.handleWizardEnvironment} />
                                    </Form.Field>
                                    <Form.Field>
                                        <InputControl label="Create blank environment" disabled={this.state.blankEnvironment} placeholder="Enter file name" onChange={this.onChange} />
                                    </Form.Field>
                                    <ButtonControl disabled={!this.state.environmentSelected} type="submit" color="blue" floated="right" text="Next"></ButtonControl>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        )
    }
}