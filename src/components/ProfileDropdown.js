import React, { useState } from "react";
import DropdownContent from "./DropdownContent";
import { FaUser } from "react-icons/fa";

const profileDropdown = (props) => {
    const [hover, toggleHover] = useState(false);

    return (
        <div className ="dropdown">
            <button 
                onMouseEnter={() => toggleHover(true)}
                onMouseLeave={() => toggleHover(false)} 
                className={["dropbtn", `${hover ? "active" : ""}`].join(' ')}
            >
                <FaUser className = 'icon-profile'/>
            </button>
            <DropdownContent isDisplayed = {hover}/>
        </div>
    );
};

export default profileDropdown;