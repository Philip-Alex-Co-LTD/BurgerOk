import React from "react";
import  { connect } from 'react-redux';
import { FaArrowUp } from "react-icons/fa";

const Features = (props) =>  {

    return (
        <React.Fragment>
            <section className = 'section-features'>
                <div className="row">
                    <h2>Tired of buying burgers?<br/> 
                    Build your own!</h2>
                    <p className="long-copy">
                    This interactive activity challenges you to create your own BurgerOk using beef mince and a variety of vegetables, fruit, cheese, spices and herbs. You make - we cook!
                    </p>
                </div>
                <div className="row wrapper">
                    <div className = 'col span-1-of-3 box'>
                        <FaArrowUp className = 'icon-big'/>
                        <h3>create your own burger</h3>
                        <p> 
                            Yes, you didn't overhear. We only supply. You create the burger you like. Put your craziest burger ideas into life! Triple cheese or quadruple beef? Not a problem!  
                        </p>
                    </div>
                    <div className = 'col span-1-of-3 box'>
                        <FaArrowUp className = 'icon-big'/>
                        <h3>top ingredients together</h3>
                        <p> 
                            We have fruits delivered from Australia, spices from China and juicy vegetables from New Zealand. Irish tender roast beef and English cheese. All of them are brought to stay in your burger.
                        </p>
                    </div>
                    <div className = 'col span-1-of-3 box'>
                        <FaArrowUp className = 'icon-big'/>
                        <h3>have it ready in 30 minutes</h3>
                        <p> 
                        You're only thirty minutes away from your burger. The best chefs in each town make burgers to ensure that you're 100% happy.
                        </p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
  return {
    // ings: state.burgerBuilder.ingredients,
    // purchased: state.order.purchased
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onInitPurchase: () => dispatch(actions.purchaseInit())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Features);
