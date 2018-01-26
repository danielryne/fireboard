import React from "react";
import { Link } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

const LoggedOutBtns = (
  <Menu.Menu position='right'>
      <Menu.Item className='item'>
      <Button as={Link} to='/login'>Log in</Button>
    </Menu.Item>
    <Menu.Item>
      <Button as={Link} to='/signup'>Sign Up</Button>
        </Menu.Item>
              </Menu.Menu>

)

const LoggedInBtns = (logout) => (
    <Menu.Menu position='right'>

          <Menu.Item className='item'>
          <Button onClick={logout}>Log out</Button>
        </Menu.Item>
                      </Menu.Menu>

        )

const Nav = (props) => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as={Link} to='/' active>Home</Menu.Item>
      <Menu.Item as={Link} to='/working'>Staff</Menu.Item>
      <Menu.Item as={Link} to='/scheduler'>Scheduler</Menu.Item>
      
        {
          props.isLoggedIn
           ? LoggedInBtns(props.logout)
           : LoggedOutBtns
        }
    </Container>
  </Menu>
)

export default Nav;