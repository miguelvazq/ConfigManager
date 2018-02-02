import * as React from "react";
import { TreeNav } from './TreeNav';

export class SubLevelNav extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = {
        topLevelItems: [],
        clicked: null
    }
    //this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div className="subLevelDiv">
        <TreeNav />
      </div>
    );
  }
}
