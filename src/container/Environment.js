import * as React from "react";
import Navigation from "./Nav";
import Content from "./Content";
import BannerControl from "../components/BannerControl";
import UtilityBar from '../components/UtilityBar';
import { Grid } from 'semantic-ui-react'

class Environment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childID: ""
        }
        this.onUpdate = this.onUpdate.bind(this);
    }

    onUpdate (value, breadCrumb) {
        this.setState({
            childID: value,
            breadCrumb: breadCrumb
        });
    }

    onBannerUpdate (message) {

    }

    render() {
        return (
            <div className="container">
                <UtilityBar />
                <Navigation onClick={this.onUpdate} />    
                {this.state.childID !== "" ? <Content data={this.state.childID} breadCrumb={this.state.breadCrumb} /> : null }
            </div>
        )
    }
}
export default Environment;