import * as React from "react";
import Context from "./Context";
import Entry from "./Entry";
import Environment from "./Environment";
import RouteNotFound from "../components/RouteNotFound";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact render={(...props) => <Entry />} />
                    <Route path="/environment" exact render={(...props) => <Environment {...props} /> } />
                    <Route component={RouteNotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}