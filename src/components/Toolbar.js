import React from 'react';
import Logo from './Logo';
import NavigationElements from './NavigationElements';
import DrawerToggle from './DrawerToggle';

const toolbar = (props) => (
    <header className="toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <Logo height="80%"/>
        <nav className="desktop-only">
            <NavigationElements isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;