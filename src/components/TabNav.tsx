import * as React from 'react';
import { Tabs } from 'antd';
import * as hpccComms from "@hpcc-js/comms";
import * as util from "@hpcc-js/util";
const TabPane = Tabs.TabPane;

export class TabNav extends React.Component<any, any> {

  render() {
    return <Tabs type="card">
      <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
      <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
      <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
  </Tabs>
  }
}