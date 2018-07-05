import * as React from "react";
import Navigation from "./Nav";
import Content from "./Content";

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
            <div className="container">
                <Navigation onClick={this.onUpdate} />
                {this.state.childID !== "" ? <Content data={this.state.childID} breadCrumb={this.state.breadCrumb} /> : null }
                <div className="footer"></div>
            </div>
        )
    }
}