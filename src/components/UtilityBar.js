import React, { Component } from "react"
import { Button, Dropdown, Menu, Icon } from "semantic-ui-react"
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
        data.icon === "lock" ? this.setState({locked: "lock open", lockStatus: "Unlocked"}) : this.setState({locked: "lock", lockStatus: "Locked"});
    }

  render() {
    const utilityBarStyle = {
      margin: '20px 0 0 0',
    };
    return (
        <Menu inverted color="blue" size="small" style={utilityBarStyle}>
          <Menu.Item color="green" icon={this.state.locked} name={this.state.lockStatus} onClick={this.handleLockClick} />
          <Menu.Item icon="save" name="save" onClick={this.handleLockClick} />
          <Menu.Item icon="pencil" name="save as" onClick={this.handleLockClick} />
          <Menu.Item icon="plus" name="Add a component" onClick={this.handleLockClick} />
          <Menu.Item icon="copy" name="compare environments" onClick={this.handleLockClick} />
          <Menu.Menu position="right">
            <Dropdown item trigger={<span><Icon name="info"/>Error/Warnings</span>}>
              <Dropdown.Menu>
                <Dropdown.Item color="red">Errors</Dropdown.Item>
                <Dropdown.Item color="orange">Warnings</Dropdown.Item>
                <Dropdown.Item color="yellow">Information</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item name="XML Mode" icon="code" onClick={this.handleLockClick} />
            <Menu.Item>
              <Button primary><Icon name="check"/>Validate Envionment</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
    )
  }
}