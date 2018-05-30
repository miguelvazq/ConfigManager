import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './container/App';
import { Entry } from './components/Entry';
import './assets/sass/styles.sass';
import 'bootstrap';

export class Index extends React.Component<any, any>{
    render() {
        //return <App />
        return <Entry />
    }
}
ReactDOM.render(
    //<App />,
    <Entry />,
    document.getElementById('root')
);