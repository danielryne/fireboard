import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Firefighters extends Component {
  state = {
    firefighters: [],
    name: "",
    working: "",
    notes: ""
  };

  componentDidMount() {
    this.loadFirefighters();
  }

  loadFirefighters = () => {
    API.getFirefighters()
      .then(res =>
        this.setState({ firefighters: res.data, name: "", working: "", notes: "" })
      )
      .catch(err => console.log(err));
  };

  deleteFirefighter = id => {
    API.deleteFirefighter(id)
      .then(res => this.loadFirefighters())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.working) {
      API.saveFirefighter({
        name: this.state.name,
        working: this.state.working,
        notes: this.state.notes
      })
        .then(res => this.loadFirefighters())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Firefighters Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                value={this.state.working}
                onChange={this.handleInputChange}
                name="working"
                placeholder="Is working (required)"
              />
              <TextArea
                value={this.state.notes}
                onChange={this.handleInputChange}
                name="notes"
                placeholder="Notes (Optional)"
              />
              <FormBtn
                disabled={!(this.state.working && this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Submit Firefighter
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Firefighters On My List</h1>
            </Jumbotron>
            {this.state.firefighters.length ? (
              <List>
                {this.state.firefighters.map(firefighter => (
                  <ListItem key={firefighter._id}>
                    <Link to={"/firefighters/" + firefighter._id}>
                      <strong>
                        {firefighter.name} by {firefighter.working}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteFirefighter(firefighter._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Firefighters;
