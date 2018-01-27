import React from "react";
import "./DetailStaffContainer.css";
import { Card } from 'semantic-ui-react';

const DetailStaffContainer = props => 
	<Card fluid color='green'>
		<div id="detailStaffContainer">
			<h1 style={{ textAlign: 'center' }}>Update Staff</h1>
			{props.children}

		</div>
	</Card>

export default DetailStaffContainer;
