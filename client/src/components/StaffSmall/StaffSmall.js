import React from "react";
import "./StaffSmall.css";
import { Dropdown, Button, Menu } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'Station 1', value: 1 },
  { key: 2, text: 'Station 2', value: 2 },
  { key: 3, text: 'Station 3', value: 3 },
]

const Staff1 = props => (

<Button id="staffsmall">

    <p className="staff-name">Name: {props.name}</p>
    <p className="staff-station">Current Station: {props.station}</p>

  <Menu size="tiny" compact>
    <Dropdown text='Assign Station' options={options} simple item />
  </Menu>

</Button>

);

export default Staff1;