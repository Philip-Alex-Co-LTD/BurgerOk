import React from 'react';
import Backdrop from './Backdrop';

const modal = (props) => (
    <div>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div 
            className={["modal", `${props.show ? "visible" : ""}`].join(" ")}
        >
            {props.children}
        </div>
    </div>
);

export default modal;