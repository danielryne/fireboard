import React, { Component } from "react";
import API from "../../utils/API";
import Wrapper from "../../components/Wrapper";
import StaffContainer from "../../components/StaffContainer";
import StaffSmall from "../../components/StaffSmall";
import StationContainer from "../../components/StationContainer";
import Firestation from "../../components/Firestation";

// Starts the app 
class Scheduler extends Component {

  state = {
    staff: [],
    stations: []
  };

  componentDidMount() {
    this.loadFirefighters();
    this.loadFirestations();
  }

  loadFirefighters = () => {
    API.getFirefighters()
      .then(res =>
        this.setState({ staff: res.data })
      )
      .catch(err => console.log(err));
  };

  loadFirestations = () => {
    API.getFirestations()
      .then(res =>
        this.setState({ stations: res.data })
      )
      .catch(err => console.log(err));
  };

  // Renders the actual application in JSX 
  render() {

    return (
      <Wrapper>

        {/* Calls Conatiner for staff */} 
        <StaffContainer>
            {this.state.staff.map((staff, index) => (
                <StaffSmall
                  key={`${staff.id}-${index}`}
                  id={staff.id}
                  name={staff.name}
                  station={staff.station}
                />
            ))}
        </StaffContainer>

        {/* Call sConatiner for Stations */}        
        <StationContainer>
            {this.state.stations.map(firestation => (
                <Firestation
                  key={firestation.id}
                  id={firestation.id}
                  name={firestation.name}
                  staffMin={firestation.staffMin}
                  staffCount={firestation.staff.length}
                  currentStaff={firestation.staff}
                />

            ))}
          </StationContainer>

      </Wrapper>
    );
  }
}

export default Scheduler;