import React from "react";
import "./StaffContainer.css";
import { Card } from 'semantic-ui-react';

const Container = props => 
	
	<Card fluid>
		<div style={{ overflow: "auto", height: "600px"}} id="staffcontainer">
			<h1 style={{ textAlign: 'center' }}>Staff</h1>
			{props.children}

		</div>
	</Card>

export default Container;
