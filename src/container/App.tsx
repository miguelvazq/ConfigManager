import * as React from "react";
import '../assets/sass/styles.sass';
import { Nav } from '../components/Nav';

export class App extends React.Component<any, any>{

    constructor(props:any) {
        super(props);
    }

    render() {
        return <Nav />
    }
    
}