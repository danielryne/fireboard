import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Container, Grid, Header, Icon, Image, List, Segment
} from 'semantic-ui-react';
import thumbsUpGuy from '../../assets/images/thumbs-up.png';

export default class HomepageLayout extends Component {
  state = {}

  render() {

    return (
      <div>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Container text>
              <Header
                as='h1'
                content='FireBoard'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='The easy way to put out your scheduling fires!'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button as={Link} to='/login' size='huge' color='orange'>
                Get Started
                <Icon name='right arrow' />
              </Button>
            </Container>
          </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>We Help Local Fire Departments</Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your station superpowers to do things that you never thought possible!
                  Schedule your staff with ease, everymorning, right from your computer.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>It's Free, and Always Will Be</Header>
                <p style={{ fontSize: '1.33em' }}>
                  We love helping those who help us, so using the site is free.
                  It is also updated by the open source community, so you will keeping seeing improvements to help your stations.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  
                  rounded
                  size='large'
                  src= {thumbsUpGuy}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button as={Link} to='/login' size='huge'>Check It Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}>Breaking The Grind, Saving You Time</Header>
            <p style={{ fontSize: '1.33em' }}>
              Instead of focusing on whiteboard scheduling, we have learned how to master the art of scheduling
              with little to no effort. Just click on your staff, schedule them at the station, and you're set!
              Easily export your schedule as well, and send it to your staff.
            </p>
            <Button as='a' size='large'>Learn More</Button>
            
          </Container>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Developers</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>All the Fires</List.Item>
                    <List.Item as='a'>How To Party</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>Extra space to hang out and be cool.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}