import React, { Component } from 'react';
import SemFormComponent from './SemFormComponent';
import { Menu, Segment } from 'semantic-ui-react';

export default class SemNavbar extends Component {
  state = { activeItem: 'aws' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='Cloud' header/>
          
          <Menu.Menu position='right'>
          <Menu.Item
            name='aws'
            active={activeItem === 'aws'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='azure'
            active={activeItem === 'azure'}
            onClick={this.handleItemClick}
          />
          </Menu.Menu>
        </Menu>

        <SemFormComponent activeItem={activeItem} />
      </div>
    )
  }
}