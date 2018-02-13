import * as React from "react";
import '../assets/sass/styles.sass';
import { Nav } from './Nav';
import { Entry } from '../components/Entry';
import { Content } from './Content';

export class App extends React.Component<any, any>{

    constructor(props:any) {
        super(props);
        this.state = {
            childID: ""
        }
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(value:any) {
        this.setState({
            childID: value
        });
    }

    render() {
        return (
        <div>
            <Nav onClick={this.changeHandler} />
            {this.state.childID !== "" ? <Content data={this.state.childID} /> : null }
        </div>
        )
    }
}