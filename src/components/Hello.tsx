import * as React from "react";
import '../assets/sass/hello.sass';

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return <h1 className='text'>Hello from Miguel {this.props.compiler} and {this.props.framework}!</h1>;
    }
}