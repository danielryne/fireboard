import React from "react";
import { Button, Header, Modal } from 'semantic-ui-react';
import "./Firestation.css";

const Firestation = props => (
<div>
	<Modal size="tiny" trigger={
  		<Button type="button" id="firestation">
    	  	<p id="stationname">{props.name}</p>
    	  	<p id="staffCount"> Staff Count: {props.staffCount}</p>
      		<p id="staffMin">Required: {props.staffMin}</p>
    	</Button>
  	}
  >
    <Modal.Header>{props.name}</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Active Staff</Header>
		    {props.currentStaff.map((number, index) => <li key={index}>{number}</li>)}
      </Modal.Description>
    </Modal.Content>
  </Modal>

</div>

);

export default Firestation;