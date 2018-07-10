import * as React from "react";
import Navigation from "./Nav";
import Content from "./Content";
import Entry from "./Entry";
import Environment from "./Environment";
import RouteNotFound from "../components/RouteNotFound";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Grid, Responsive } from 'semantic-ui-react'

export class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Entry} />
                    <Route path="/environment" exact render={props => <Environment {...props} />} />
                    <Route component={RouteNotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}