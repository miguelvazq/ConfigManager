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
      <div>
        {this.props.topLevelTreeData.map((item:any, idx:number) => {
          return !item.nodeInfo.isHidden ? <h5 key={item.nodeId}>{item.nodeInfo.name}</h5> : ""
        })}
        {this.props.topLevelTreeData.map((menuItem:any, idx:number) =>{
          <SubMenu /*onTitleClick={this.subMenuClick}*/ key={menuItem.nodeId} title={<span><span>{menuItem.nodeInfo.name}</span></span>}>
            {/* {menuItem.children.node.map((member:any, idx:number) => { return <Menu.Item key={member.nodeId}>{member.nodeInfo.name}</Menu.Item>})} */}
          </SubMenu>
        })}
      </div>
    );
    
  }
}