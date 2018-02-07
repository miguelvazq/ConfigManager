import * as React from "react";
import '../assets/sass/styles.sass';
import { Nav } from './Nav';
import { Entry } from '../components/Entry';
import { Content } from './Content';

export class App extends React.Component<any, any>{

    constructor(props:any) {
        super(props);
    }

    render() {
        return (
        <div>
            <Nav />
            <Content />
        </div>
        )
    }
}