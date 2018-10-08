import * as React from "react";
import axios from 'axios';
import Navigation from "./Nav";
import Content from "./Content";
import BannerControl from "../components/BannerControl";
import UtilityBar from '../components/UtilityBar';
import { Grid } from 'semantic-ui-react'

const URL = "http://10.239.20.71:8020/ws_config2"

class Environment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childID: "",
            sessionId: null,
            fileLoaded: false
        }
        this.onUpdate = this.onUpdate.bind(this);
    }

    onUpdate (value, breadCrumb) {
        this.setState({
            childID: value,
            breadCrumb: breadCrumb
        });
    }
    x1
    async loadEnvironmentFile() {
        const loadFile = axios.get(URL+"/OpenEnvironmentFile.json", {
            params:{
                SessionId: this.props[0].location.state.sessionId,
                Filename: this.props[0].location.state.environmentSelected
            }
        });
        try {
            let response = await loadFile;
            if (response.data.OpenEnvironmentFileResponse.RootNodeId) {
                this.setState({
                    RootNodeId: response.data.OpenEnvironmentFileResponse.RootNodeId
                })
                this.setState({
                    fileLoaded: true
                });
            }
        } catch (e) {
            console.log (e)
        }
    }

    async componentDidMount() {
        await this.loadEnvironmentFile().then((status) =>{});
    }

    render() {
        if (!this.state.fileLoaded) return null;
        const session = this.props[0].location.state.sessionId;
        return (
            <div className="container">
                <div className="navContainer">
                    <UtilityBar sessionId={session} />
                    <Navigation sessionId={session} rootNodeId={this.state.RootNodeId} onClick={this.onUpdate} />
                </div>
                <div className="contentContainer">
                    {this.state.childID !== "" ? <Content data={this.state.childID} sessionId={session} breadCrumb={this.state.breadCrumb} /> : null }
                </div>
            </div>
        )
    }
}
export default Environment;