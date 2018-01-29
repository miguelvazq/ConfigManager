import * as React from "react";
import '../assets/sass/nav.sass';
import { TopLevelNav } from './TopLevelNav';
import { SubLevelNav } from './SubLevelNav';

//export interface Nav { any:any }

export class Nav extends React.Component<any, any> {
    render() {
        return <div className="leftPanel">
                    <nav>
                        <TopLevelNav />
                        {/* <SubLevel /> */}
                    </nav>
                </div>
    }
}