import * as React from "react";
import { TopLevelNav } from './TopLevelNav';
import { SubLevelNav } from './SubLevelNav';

//export interface Nav { any:any }

export class Nav extends React.Component<any, any> {
    render() {
        return  <nav>
                    <TopLevelNav />
                    <SubLevelNav />
                </nav>
    }
}