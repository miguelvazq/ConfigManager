import * as React from "react";
import Entry from "./Entry";
import Environment from "./Environment";
import RouteNotFound from "../components/RouteNotFound";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Entry} />
                    <Route path="/environment" exact component={Environment} />
                    <Route component={RouteNotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}