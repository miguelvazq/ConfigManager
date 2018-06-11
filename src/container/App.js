import * as React from "react";
import Navigation from "../components/Nav";
import Content from "../components/Content";

export class App extends React.Component{
    render() {
            return (
                <div className="container">
                    <Navigation />
                    <Content />
                </div>
            )
    }
}