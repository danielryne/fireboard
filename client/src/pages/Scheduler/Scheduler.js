import React, { Component } from "react";
import API from "../../utils/API";
import Wrapper from "../../components/Wrapper";
import StaffContainer from "../../components/StaffContainer";
import StaffSmall from "../../components/StaffSmall";
import StationContainer from "../../components/StationContainer";
import Firestation from "../../components/Firestation";

// Starts the app 
class Scheduler extends Component {

  // Creates keys for state object. We will assign variables to this later. 
  state = {
    staff: [],
    stations: {},
    stationsArray: []
  };

  refreshData = () => {
    var fireFighterPromise = this.loadFirefighters();
    var fireStationPromise = this.loadFirestations(); 

    Promise.all([fireFighterPromise, fireStationPromise]).then(this.staffToStations);
  }

  componentDidMount() {
    this.refreshData(); 
  };

  // Loads firefighters from MongoDB
  loadFirefighters = () => {
    return API.getFirefighters()
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err));
  };

  // Loads firestations from MongoDB
  loadFirestations = () => {
    return API.getFirestations()
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err));
  };

  updateFireFighter = (fireFighterId, stationName) => {
     API.updateFirefighter(fireFighterId, {
      station: stationName
     })
     .then(this.refreshData)
     .catch(err => console.log(err));
   };

  // Fucntion to set the state and assign staff to station
  staffToStations = (values) => { 
    const staff = values[0];
    const stations = values[1];

    // Set state for staff and stationArray
    this.setState({ staff: staff, stationsArray: stations });

    // Create object of stations, with the station name as the key 
    const stationsMap = {};
    stations.forEach((station)=>{
      stationsMap[station.name] = station;
    })

    // Iterates through staff list and assigns staff to each station 
    for (let i = 0; i < staff.length; i ++){
      stationsMap[staff[i].station].staff.push(staff[i].name);  
    }

    // Set state for staff and stationArray
    this.setState({ stations: stationsMap });

  }

  // Renders the actual application in JSX 
  render() {

    return (
      <Wrapper>

        {/* Calls Conatiner for staff */} 
        <StaffContainer>
            {this.state.staff.map((staff, index) => (
                <StaffSmall
                  key={`${staff.id}-${index}`}
                  id={staff._id}
                  name={staff.name}
                  station={staff.station}
                  updateFireFighter={this.updateFireFighter}
                  firestations={this.state.stationsArray}
                />
            ))}
        </StaffContainer>

        {/* Call sConatiner for Stations */}        
        <StationContainer>
            {Object.keys(this.state.stations).map((key) => (
                <Firestation
                  key={this.state.stations[key]._id}
                  id={this.state.stations[key]._id}
                  name={this.state.stations[key].name}
                  staffMin={this.state.stations[key].staffMin}
                  currentStaff={this.state.stations[key].staff}
                />

            ))}
          </StationContainer>

      </Wrapper>
    );
  }
}

export default Scheduler;