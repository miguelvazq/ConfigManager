import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './container/App';
import { Hello } from './components/Hello';
import { Nav } from './components/Nav';
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'

ReactDOM.render(
    <Nav />,
    document.getElementById('root')
);