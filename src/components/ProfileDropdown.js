import React from "react";
import DropdownContent from "./DropdownContent";

const profileDropdown = (props) => {
    // Declare a new state variable, which we'll call "count"
    const [hover, toggleHover] = useState(0);

    const toggleHover = () => {

    };

    return (
        <div className ="dropdown">
            <button onMouseEnter={() => toggleHover()} className="dropbtn">Dropdown</button>
            <DropdownContent/>
        </div>
    );
};

export default profileDropdown;