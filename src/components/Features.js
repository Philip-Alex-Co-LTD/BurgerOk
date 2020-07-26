import React from "react";
import { FaRegClock, FaPalette, FaFistRaised, FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import { Waypoint } from 'react-waypoint';

const Features = (props) =>  {

    return (
        <React.Fragment>
            <section className = 'section-features' id="features">
                <Waypoint
                    onEnter={({ previousPosition, currentPosition}) => {
                        if (previousPosition === "above" && currentPosition === "inside") props.onMakingNavigationSticky(false)
                    }}
                    onLeave={({ previousPosition, currentPosition}) => {
                        if (previousPosition === "inside" && currentPosition === "above") props.onMakingNavigationSticky(true)
                    }}
                />
                <div className="row">
                    <h2>Tired of buying burgers?<br/> 
                    Build your own!</h2>
                    <p className="long-copy">
                    Tired of eating same hamburgers, cheeseburgers or chickenburgers? No problem! Make your own with BurgerOk using a huge variety of top quality ingredients the way you want! You make - we cook!
                    </p>
                </div>
                <div className="row wrapper">   
                    <div className = 'col span-1-of-4 box'>
                        <FaPalette className = 'icon-big'/>
                        <h3>create your own</h3>
                        <p> 
                            Yes, you didn't overhear. We only supply. You create the burger you like. Put your craziest burger ideas into life! Triple cheese or quadruple beef? Pfff, no problem!  
                        </p>
                    </div>
                    <div className = 'col span-1-of-4 box'>
                        <FaFistRaised className = 'icon-big'/>
                        <h3>top ingredients together</h3>
                        <p> 
                            We have fruits delivered from Australia, spices from China and juicy vegetables from New Zealand. Irish tender roast beef and English cheese. All of them are brought to be in your burger.
                        </p>
                    </div>
                    <div className = 'col span-1-of-4 box'>
                        <FaRegClock className = 'icon-big'/>
                        <h3>ready in 30 minutes</h3>
                        <p> 
                        You're only thirty minutes away from your delicious burger. The best chefs in each town make burgers to ensure that you're 100% happy.
                        </p>
                    </div>
                    <div className = 'col span-1-of-4 box'>
                        <FaShoppingCart className = 'icon-big'/>
                        <h3>UP TO 365 DAYS/YEAR</h3>
                        <p> 
                        Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage.
                        </p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
      onMakingNavigationSticky: (isSticky) =>
        dispatch(actions.makingNavigationSticky(isSticky)),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Features);


