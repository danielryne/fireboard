import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import EditStaffContainer from "../../components/EditStaffContainer";
import CreateStaffContainer from "../../components/CreateStaffContainer";
import { Form, Checkbox, Table, Grid } from 'semantic-ui-react';

const options = [
  { key: 'y', text: 'Yes', value: 'Active' },
  { key: 'n', text: 'No', value: 'Inactive' },
];

class Firefighters extends Component {
  state = {
    firefighters: [],
    name: "",
    station: "",
    status: ""
  };

  componentDidMount() {
    this.loadFirefighters();
  }

  loadFirefighters = () => {
    API.getFirefighters()
      .then(res =>
        this.setState({ firefighters: res.data, name: "", station: "", status: "" })
      )
      .catch(err => console.log(err));
  };

  handleNameInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      name: value
    });
  };

  handleStationInputChange = event => {
    const { station, value } = event.target;
    this.setState({
      station: value
    });
  };

  handleStatusInputChange = (event, {value}) => {
    this.setState({
      status: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.station) {
      API.saveFirefighter({
        name: this.state.name,
        station: this.state.station,
        status: this.state.status
      })
        .then(res => this.loadFirefighters())
        .catch(err => console.log(err));
    }
  };


  render() {
    
    return (
      <Wrapper>
        <Grid columns={2} padded>
          <Grid.Row centered>
            <Grid.Column width={4}>
              <CreateStaffContainer>
                <Form onSubmit={this.handleFormSubmit}>
                  <Form.Field>
                    <Form.Input 
                      value={this.state.name}
                      onChange={this.handleNameInputChange}
                      fluid label='Name'
                      placeholder='Full Name'
                    />
                    <Form.Input
                      value={this.state.station}
                      onChange={this.handleStationInputChange}
                      fluid label='Station'
                      placeholder='Station Number'
                    />
                    <Form.Select
                      value={this.state.status}
                      onChange={this.handleStatusInputChange}
                      fluid label='Working'
                      options={options}
                      placeholder='Working'
                    />
                  </Form.Field>
                  
                  <Form.Button
                    content='Submit Firefighter'
                    disabled={!(this.state.name && this.state.station)}
                  />    
                </Form>
              </CreateStaffContainer>
            </Grid.Column>

            <Grid.Column>
              <EditStaffContainer>
                {this.state.firefighters.length ? (
                  <Table celled compact>
                    <Table.Header fullWidth>
                      <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Station</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    {this.state.firefighters.map(firefighter => (
                      <Table.Body key={firefighter._id}>
                        <Table.Row>
                          <Table.Cell>
                            <Link to={"/firefighters/" + firefighter._id}>
                              <strong>
                                {firefighter.name}
                              </strong>
                            </Link>
                          </Table.Cell>
                          <Table.Cell>
                            {firefighter.station}
                          </Table.Cell>
                          <Table.Cell>
                            {firefighter.status}
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>

                      
                    ))}
                  </Table>    
                  ) : (
                    <h3>No Results to Display</h3>
                  )}
              </EditStaffContainer>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Wrapper>

      
    );
  }
}

export default Firefighters;