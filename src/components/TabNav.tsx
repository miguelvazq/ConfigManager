import * as React from 'react';
import { Tabs } from 'antd';
import * as hpccComms from "@hpcc-js/comms";
import * as util from "@hpcc-js/util";
const TabPane = Tabs.TabPane;

export class TabNav extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
  }

  changeHandler(e:any) {
    this.props.onClick(e.key);
  }

  render() {
    console.log(this.props)
    return <Tabs type="card">
     {this.props.tabData.map((item:any, idx:number) => {
       return <TabPane tab={item.nodeInfo.name} key={idx}>Content of Tab Pane {idx}</TabPane>
      })}
  </Tabs>
  }
}