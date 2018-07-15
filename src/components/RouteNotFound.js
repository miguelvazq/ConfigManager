import React from "react";
import homeIcon from "../assets/img/hpcc-logo.png";
import {Image, Header, Divider} from "semantic-ui-react"
import ButtonControl from '../components/ButtonControl';
import { NavLink } from "react-router-dom";

const RouteNotFound = () => {
    return (
        <div className="errorContainer">
            <div className="routeNotFoundError">
                <Image src={homeIcon} centered size='medium' />
                <Header size="huge" textAlign='center'>404</Header>
                <Header as='h4'>The page you are looking for does not exist </Header>
                <div className="centered">
                    <NavLink to="/"><ButtonControl color="blue" text="HOME" /></NavLink>
                </div>
            </div>
        </div>
    );
};

export default RouteNotFound;