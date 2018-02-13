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
    console.log(this.props.tabData)
    return <Tabs type="card">
     {this.props.tabData.map((item:any, idx:number) => {
       <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
      })}
  </Tabs>
  }
}