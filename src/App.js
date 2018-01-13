import React, { Component } from "react";
import Firestation from "./components/Firestation";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";

// We will replace this import with a call from our mongo db to pull in the list of Firestations
import firestations from "./firestations.json";


// Function to randomly shuffle the friends in the friends array 
function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Starts the app 
class App extends Component {
  
  // Sets the state for each item we'll need to keep track, including which images have been clicked  
  state = {
    firestations: firestations
  };



  // Renders the actual application in JSX 
  render() {

    return (
      <Wrapper>

        <Header>
          Header Goes Here
        </Header>

        <Nav>
          Nav Goes Here
        </Nav>

        <Container>
          <Row>
            {this.state.firestations.map(firestation => (
              <Column size="md-3 sm-6">
                <Firestation
                  key={firestation.id}
                  id={firestation.id}
                  name={firestation.name}
                />
              </Column>
            ))}
          </Row>
        </Container>

      </Wrapper>
    );
  }
}

export default App;