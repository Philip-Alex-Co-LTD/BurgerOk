import React from "react";
import  { connect } from 'react-redux';

import { FaArrowUp } from "react-icons/fa";
const Features = (props) =>  {

    return (
        <div>
            <section className = 'section-features'>
                <div className="row">
                    <h2>Get food fast &mdash; not fast food</h2>
                    <p className="long-copy">
                        Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!
                    </p>
                </div>
                <div className="row">
                    <div className = 'span-1-of-4 box'>
                        <FaArrowUp className = 'icon-big'/>
                        <h3>Up to 365 days/year</h3>
                        <p> 
                            Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
                        </p>
                    </div>
                    <div className = 'span-1-of-4 box'>
                        <FaArrowUp className = 'icon-big'/>
                        <h3>Up to 365 days/year</h3>
                        <p> 
                            Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
                        </p>
                    </div>
                    <div className = 'span-1-of-4 box'>
                        <FaArrowUp className = 'icon-big'/>
                        <h3>Up to 365 days/year</h3>
                        <p> 
                            Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
                        </p>
                    </div>
                    <div className = 'span-1-of-4 box'>
                        <FaArrowUp className = 'icon-big'/>
                        <h3>Up to 365 days/year</h3>
                        <p> 
                            Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        // ings: state.burgerBuilder.ingredients,
        // purchased: state.order.purchased
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // onInitPurchase: () => dispatch(actions.purchaseInit())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Features);

