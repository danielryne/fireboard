import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

export default class Navy extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state

    return (
      <Menu fixed='top' size='large'>
        <Container>
          <Menu.Item name='home' as={Link} to='/' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='staff' as={Link} to='/working' active={activeItem === 'staff'} onClick={this.handleItemClick} />
          <Menu.Item name='scheduler' as={Link} to='/scheduler' active={activeItem === 'scheduler'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item className='item'>
              <Button as={Link} to='/login' active={activeItem === ''} onClick={this.handleItemClick}>Log in</Button>
            </Menu.Item>
            <Menu.Item>
              <Button as='a' primary active={activeItem === ''} onClick={this.handleItemClick}>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}