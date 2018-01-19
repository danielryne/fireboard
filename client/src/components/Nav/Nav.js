import React from "react";
import { Link } from 'react-router-dom';
import {
  Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Visibility,
} from 'semantic-ui-react';

const Nav = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Item as='a'>Developers</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <Button as={Link} to='/login'>Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as='a' primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default Nav;
