import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './container/App';
import './assets/sass/styles.sass';
import 'bootstrap';

export class Index extends React.Component<any, any>{
    render() {
        return <App />
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);