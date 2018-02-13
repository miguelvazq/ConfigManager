import * as React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;

export class TreeNav extends React.Component<any, any> {
  // handleClick = (e:any) => {
  //   console.log('click ', e);
  //   this.props.callbackFromParent(e.key);
  // }
  clickHandler = (e:any) => {
    console.log('click ', e);
    this.props.changeHandler(e.key);
  }
  // handleOpenChange = (e:any) => {
  //   console.log('click ', e);
  //   //this.props.callbackFromParent(e.key);
  // }
  render() {
    return (
        <Menu
            onClick={this.clickHandler}
            style={{ width: 276 }}
            mode="inline"
            //onOpenChange={this.handleOpenChange}
            defaultOpenKeys={['6']}
        >
        {this.props.topLevelTreeData.map((item:any, idx:number) => {
          return item.children ? //&& !item. to hide elements that are not required
          <SubMenu /*onTitleClick={this.subMenuClick}*/ key={item.nodeId} title={<span><span>{item.nodeInfo.name}</span></span>}>
            {item.children.node.map((member:any, idx:number) => { return <Menu.Item key={member.nodeId}>{member.nodeInfo.name}</Menu.Item>})}
          </SubMenu> : <Menu.Item key={item.nodeId+idx}>{item.nodeInfo.name}</Menu.Item>
        })}
      </Menu>
    );
  }
}