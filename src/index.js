import React from "react";
import ReactDOM from "react-dom";
import { App } from "./container/App";
import 'semantic-ui-css/semantic.min.css';
import './assets/css/sass/styles.sass';

export class Index extends React.Component {
    render() {
        return <App />
    }
}

ReactDOM.render(<Index />, document.getElementById("index"));