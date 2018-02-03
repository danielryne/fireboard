import React from "react";
import "./StaffSmall.css";
import { Dropdown, Button, Menu } from 'semantic-ui-react';

const keyOptions = (stationsArray) => {
	
	let options = [];

	for (var i = 0; i < stationsArray.length; i++){
		options.push({ key: i, text: stationsArray[i].name, value: stationsArray[i].name }); 
	}

	return options; 

}

const Staff1 = props => (

<Button id="staffsmall">

    <p className="staff-name">Name: {props.name}</p>
    <p className="staff-station">Current Station: {props.station}</p>

  <Menu size="tiny" compact>
    <Dropdown text='Assign Station' onChange={(event, data) => props.updateFireFighter(props.id, data.value)} options={keyOptions(props.firestations)} simple item />
  </Menu>

</Button>

);

export default Staff1;