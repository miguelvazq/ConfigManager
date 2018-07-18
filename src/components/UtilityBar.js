import React, { Component } from "react"
import {Icon, Popup, Button} from "semantic-ui-react"
import DialogControl from './DialogControl';

export default class MenuExampleSizeSmall extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeItem: "home",
            locked: "lock",
            lockStatus: "locked"
        }
        this.handleLockClick = this.handleLockClick.bind(this);
    }

    // handleItemClick (e, { name }) {
    //     this.setState({ activeItem: name })
    // }

    handleLockClick (e, data) {
        console.log(data)
        //data.icon === "lock" ? this.setState({locked: "lock open", lockStatus: "Unlocked"}) : this.setState({locked: "lock", lockStatus: "Locked"});
    }

  render() {
    // const utilityBarStyle = {
    //   margin: '20px 0 0 0',
    // };
    return (
      <div className="utilityBar">
        <div className="iconContainer">
          <Icon size="large" icon={this.state.locked} link name={this.state.locked} inverted color='blue' onClick={this.handleLockClick}/> 
          <div className="iconDescription">locked</div>
        </div>
        <div className="iconContainer">
          <Icon size="large" icon="save" link name='save' inverted color='blue' />
          <div className="iconDescription">save environment</div>
        </div>
        <div className="iconContainer">
          <Icon size="large" icon="pencil alternate" link name='pencil alternate' inverted color='blue'/>
          <div className="iconDescription">save as</div>
        </div>
        <div className="iconContainer">
          <Icon size="large" icon="plus" link name='plus' inverted color='blue'/>
          <div className="iconDescription">add component</div>
        </div>
        <div className="iconContainer">
          <Icon size="large" icon="code" link name='code' inverted color='blue'/>
          <div className="iconDescription">xml mode</div>
        </div>
        <div className="iconContainer">
          <Icon size="large" icon="check" link name='check' inverted color='blue'/>
          <div className="iconDescription">validate</div>
        </div>
        <div className="iconContainer">
          <Icon size="large" icon="copy" link name='copy' inverted color='blue'/> 
        </div>
          <div className="iconDescription">compare environments</div>
      </div>
        // <Menu inverted color="blue" size="small" style={utilityBarStyle}>
        //   <Menu.Item color="green" icon={this.state.locked} name={this.state.lockStatus} onClick={this.handleLockClick} />
        //   <Menu.Item icon="save" name="save" onClick={this.handleLockClick} />
        //   <Menu.Item icon="pencil" name="save as" onClick={this.handleLockClick} />
        //   <Menu.Item icon="plus" name="Add a component" onClick={this.handleLockClick} />
        //   <Menu.Item icon="copy" name="compare environments" onClick={this.handleLockClick} />
        //   <Menu.Menu position="right">
        //     <Dropdown item trigger={<span><Icon name="info"/>Error/Warnings</span>}>
        //       <Dropdown.Menu>
        //         <Dropdown.Item color="red">Errors</Dropdown.Item>
        //         <Dropdown.Item color="orange">Warnings</Dropdown.Item>
        //         <Dropdown.Item color="yellow">Information</Dropdown.Item>
        //       </Dropdown.Menu>
        //     </Dropdown>
        //     <Menu.Item name="XML Mode" icon="code" onClick={this.handleLockClick} />
        //     <Menu.Item>
        //       <Button primary><Icon name="check"/>Validate Envionment</Button>
        //     </Menu.Item>
        //   </Menu.Menu>
        // </Menu>
    )
  }
}