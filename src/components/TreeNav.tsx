import * as React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;

export class TreeNav extends React.Component<any, any> {
  handleClick = (e:any) => {
    console.log('click ', e);
    this.props.callbackFromParent(e.key);
  }
  handleParentClick = (e:any) => {
    console.log('click ', e);
    this.props.callbackFromParent(e.key);
  }
  // handleOpenChange = (e:any) => {
  //   console.log('click ', e);
  //   //this.props.callbackFromParent(e.key);
  // }
  render() {
    return (
        <Menu
            onClick={this.handleClick}
            style={{ width: 276 }}
            mode="inline"
            //onOpenChange={this.handleOpenChange}
            defaultOpenKeys={['5']}
        >
        {this.props.topLevelTreeData.map((item:any, idx:number) => {
          return item.numChildren > 0  ? //&& !item. to hide elements that are not required
          <SubMenu onTitleClick={this.handleParentClick} key={item.nodeId} title={<span><span>{item.elementInfo.name}</span></span>}>
            {this.props.subLevelData.map((member:any, idx:number) =>{ return <Menu.Item key={member.nodeId}>{member.elementInfo.name}</Menu.Item>})}
          </SubMenu> : <Menu.Item key={item.nodeId+idx}>{item.elementInfo.name}</Menu.Item>
        })}
      </Menu>
    );
  }
}