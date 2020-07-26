import React from 'react';
import { FaList } from "react-icons/fa";

const drawerToggle = (props) => (<FaList className="drawer-toggle"  onClick={props.clicked}/>);

export default drawerToggle;