import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import StaffContainer from "../../components/StaffContainer";
import CreateStaffContainer from "../../components/CreateStaffContainer";
import { Form, List } from 'semantic-ui-react';

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

  deleteFirefighter = id => {
    API.deleteFirefighter(id)
      .then(res => this.loadFirefighters())
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

        <StaffContainer>
          {this.state.firefighters.length ? (
            <List>
                {this.state.firefighters.map(firefighter => (
                  <List.Item key={firefighter._id}>
                    <Link to={"/firefighters/" + firefighter._id}>
                      <strong>
                        {firefighter.name} is {firefighter.status}
                      </strong>
                    </Link>
                    <DeleteBtn
                      style={{cursor: 'pointer'}}
                      onClick={() => this.deleteFirefighter(firefighter._id)}
                    />
                  </List.Item>
                ))}
            </List>    
            ) : (
              <h3>No Results to Display</h3>
            )}
        </StaffContainer>
      </Wrapper>

      
    );
  }
}

export default Firefighters;