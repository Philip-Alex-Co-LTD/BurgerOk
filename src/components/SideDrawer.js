import React from 'react';
import NavigationElements from './NavigationElements';
import Backdrop from './Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = ["side-drawer", "close"];
    console.log(props.open)
    if (props.open) {
        attachedClasses = ["side-drawer", "open"];
    }
    return (
        <div>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} >
                <nav>
                    <NavigationElements isAuthenticated={props.isAuth} isToggle={props.open}/>
                </nav>
            </div>
        </div>
    );
};
 
export default sideDrawer;
// onClick={props.closed}