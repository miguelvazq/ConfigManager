import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './container/App';
import './assets/styles.css';
//import { Hello } from './components/Hello';

ReactDOM.render(
    <App title='Configuration Manager' framework='React' />,
    document.getElementById('root')
);