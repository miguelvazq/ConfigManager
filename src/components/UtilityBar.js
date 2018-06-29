import React, { Component } from 'react'
import { Button, Dropdown, Menu, Icon } from 'semantic-ui-react'

export default class MenuExampleSizeSmall extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeItem: 'home'
        }
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    

    handleItemClick (e, { name }) {
        this.setState({ activeItem: name })
    }

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='small'>
        <Menu.Item icon="save" name='save' active={activeItem === 'save'} onClick={this.handleItemClick} />
        <Menu.Item
            icon="plus"
            name='Add a component'
            active={activeItem === 'Add a component'}
            onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Dropdown item trigger={<span><Icon name="info"/>Error/Warnings</span>}>
            <Dropdown.Menu>
              <Dropdown.Item color="red">Errors</Dropdown.Item>
              <Dropdown.Item color="orange">Warnings</Dropdown.Item>
              <Dropdown.Item color="yellow">Information</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item name='XML Mode' icon="code"active={activeItem === 'XML Mode'} onClick={this.handleItemClick} />
          <Menu.Item>
            <Button primary><Icon name="check"/>Validate Envionment</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}