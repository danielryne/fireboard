import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Wrapper from "../../components/Wrapper";
import DeleteBtn from "../../components/DeleteBtn";
import DetailStaffContainer from "../../components/DetailStaffContainer";
import { Form, Grid, Button } from 'semantic-ui-react';

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

  loadFirefighters = () => {
    API.getFirefighters()
      .then(res =>
        this.setState({ firefighters: res.data, name: "", station: "", status: "" })
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

  deleteFirefighter = id => {
    API.deleteFirefighter(id)
      .then(res => this.loadFirefighters())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Wrapper>
        <Grid columns={3} padded centered>
          <Grid.Column>
            <DetailStaffContainer>
              <h2 style={{ textAlign: 'center' }}>
                {this.state.firefighter.name} is Currently {this.state.firefighter.status}
              </h2>

              <Form onSubmit={this.updateFirefighter}>
                <Form.Field>
                  <Form.Select
                    id={this.state.firefighter._id}
                    value={this.state.status}
                    onChange={this.handleStatusInputChange}
                    options={options}
                    placeholder='Working'
                  />
                </Form.Field>
                
                <div style={{ textAlign: 'center' }}>
                  <Button content='Update Firefighter' />
                  <Link to="/working">
                    <Button
                      content='Delete Firefighter'
                      onClick={() => this.deleteFirefighter(this.state.firefighter._id)}
                    />
                  </Link>
                </div>
              </Form>
              
              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <Link to="/working">← Back to Staff Edit</Link>
              </div>
            </DetailStaffContainer>
          </Grid.Column>
        </Grid>
      </Wrapper>
    );
  }
}

export default Detail;
