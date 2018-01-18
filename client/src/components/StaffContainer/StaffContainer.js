import React from "react";
import "./StaffContainer.css";

const Container = props => 
	
	<div id="staffcontainer">

	<h1 className="title">Staff</h1>

	{props.children}
			

	</div>;

export default Container;
