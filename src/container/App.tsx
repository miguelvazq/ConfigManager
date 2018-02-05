import * as React from "react";
import '../assets/sass/styles.sass';
import { Nav } from '../components/Nav';
import { Entry } from '../components/Entry';

export class App extends React.Component<any, any>{

    constructor(props:any) {
        super(props);
    }

    render() {
        return <Entry />//<Nav />
    }
    
}