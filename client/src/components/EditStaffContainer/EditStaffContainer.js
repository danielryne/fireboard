import React from "react";
import "./EditStaffContainer.css";
import { Card } from 'semantic-ui-react';

const EditStaffContainer = props => 
	
	<Card fluid>
		<div style={{ overflow: "auto", height: "600px"}} id="editStaffContainer">

			{props.children}

		</div>
	</Card>

export default EditStaffContainer;
