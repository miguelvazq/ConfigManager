import * as React from "react";
import Navigation from "./Nav";
import Content from "./Content";
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
        )
    }
}
export default Environment;