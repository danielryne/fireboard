import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Wrapper from "../../components/Wrapper";
import StaffContainer from "../../components/StaffContainer";
import { Form } from 'semantic-ui-react';

const options = [
  { key: 'y', text: 'Yes', value: 'Active' },
  { key: 'n', text: 'No', value: 'Inactive' },
];

class Detail extends Component {
  state = {
    firefighter: {}
  };
  
  componentDidMount() {
    this.loadFirefighter();
  }

  loadFirefighter = () => {
    API.getFirefighter(this.props.match.params.id)
      .then(res =>
        this.setState({ firefighter: res.data })
      )
      .catch(err => console.log(err));
  };

  handleStatusInputChange = (event, {value}) => {
    this.setState({
      status: value
    });
  };

  updateFirefighter = event => {
    event.preventDefault();
    API.updateFirefighter(this.state.firefighter._id, {
      status: this.state.status
      })
      .then(this.loadFirefighter)
      .catch(err => console.log(err));
    };

  render() {
    return (
      <Wrapper>
        <StaffContainer>
          <h2>
            {this.state.firefighter.name} is {this.state.firefighter.status}
          </h2>

          <Form onSubmit={this.updateFirefighter}>
            <Form.Field>
              <Form.Select
                id={this.state.firefighter._id}
                value={this.state.status}
                onChange={this.handleStatusInputChange}
                fluid label='Working'
                options={options}
                placeholder='Working'
              />
            </Form.Field>
            
            <Form.Button content='Update Firefighter' />
          </Form>
          
          <br/>

          <Link to="/working">← Back to Staff Edit</Link>
        </StaffContainer>
      </Wrapper>
    );
  }
}

export default Detail;
