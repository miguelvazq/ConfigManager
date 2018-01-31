import * as React from "react";
import '../assets/sass/styles.sass'

export interface AppProps { title: string; framework: string; }

export class App extends React.Component<AppProps, undefined> {
    render() {
        return <h1>Hello from {this.props.title} and {this.props.framework}!</h1>;
    }
}