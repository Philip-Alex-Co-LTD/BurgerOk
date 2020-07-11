import React from 'react';
import Logo from './Logo';
import NavigationItems from './NavigationItems';
import DrawerToggle from './DrawerToggle';

const toolbar = (props) => (
    <header className="toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <Logo height="80%"/>
        <nav className="desktop-only">
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;