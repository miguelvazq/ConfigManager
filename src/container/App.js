import * as React from "react";
import Entry from "./Entry";
import Navigation from "./Nav";
import Content from "./Content";

import { Grid, Responsive } from 'semantic-ui-react'

export class App extends React.Component {
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

    render() {
        return (
			<Grid>
                <Grid.Row stretched>
                    <Grid.Column width={3}>
                        <Navigation onClick={this.onUpdate} />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        {this.state.childID !== "" ? <Content data={this.state.childID} breadCrumb={this.state.breadCrumb} /> : null }
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            // <div className="container">
            //     <Navigation onClick={this.onUpdate} />
            //     {this.state.childID !== "" ? <Content data={this.state.childID} breadCrumb={this.state.breadCrumb} /> : null }
            //     <div className="footer"></div>
            // </div>
        )
    }
}