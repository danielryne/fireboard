import React from "react";
import "./StationContainer.css";

const StationContainer = props => 
	
	<div className="col-7" id="stationcontainer">

	<h1 className="title">Stations</h1>

	{props.children}

	</div>;

export default StationContainer;
