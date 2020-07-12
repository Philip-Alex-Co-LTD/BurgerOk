import React from 'react';

import Logo from './Logo';
import NavigationItems from './NavigationItems';
import Backdrop from './Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = ["side-drawer", "close"];
    if (props.open) {
        attachedClasses = ["side-drawer", "open"];
    }
    return (
        <div>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>
            </div>
        </div>
    );
};

export default sideDrawer;