import * as React from "react";
import Navigation from "../components/Nav";
import Content from "../components/Content";

export class App extends React.Component{
    render() {
            return (
                <div style="border:solid 1px #000;">
                    <Navigation />
                    <Content />
                </div>
            )
    }
}