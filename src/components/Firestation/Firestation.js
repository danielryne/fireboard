import React from "react";
import "./Firestation.css";

const Firestation = props => (
  <div 
    className="firestation" 
    value={props.id} 
    onClick={() => props.handleClick(props.id)}
  >
  
  <h2>{props.name}</h2>

  </div>
);

export default Firestation;