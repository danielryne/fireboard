import React from "react";
import "./StationContainer.css";
import { Card } from 'semantic-ui-react';

const StationContainer = props => 
	
	<Card fluid>	
		<div id="stationcontainer">
			<h1 style={{ textAlign: 'center' }}>Fire Stations</h1>
			{props.children}

		</div>
	</Card>

export default StationContainer;
