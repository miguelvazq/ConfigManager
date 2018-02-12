import * as React from 'react';
import { Tabs } from 'antd';
import * as hpccComms from "@hpcc-js/comms";
import * as util from "@hpcc-js/util";
const TabPane = Tabs.TabPane;

export class TabNav extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
  }

  render() {
    return <Tabs type="card">
      {this.props.tabData.map((item:any, idx:number) => {
        <TabPane tab={item.nodeInfo.name} key={item.nodeId}>Generate Controls here:</TabPane>
      })}
  </Tabs>
  }
}