import React from "react";
import "./CreateStaffContainer.css";

const Container = props => 
	
	<div id="createStaffContainer">

	<h1 className="title">Add Firefighter</h1>

	{props.children}
			

	</div>;

export default Container;
