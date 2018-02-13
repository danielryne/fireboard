import React from "react";
import "./CreateStaffContainer.css";
import { Card } from 'semantic-ui-react';

const Container = props => 
	<Card fluid color='red'>
		<div id="createStaffContainer">

			<h1 className="title" style={{ textAlign: 'center' }}>Add Firefighter</h1>
			{props.children}
				
		</div>
	</Card>

export default Container;