import React from "react";
import "./Header.css";

const Header = props => <div>
	<h1 className="title">{props.children}</h1>
	</div>;

export default Header;