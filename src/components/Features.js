import React from "react";
import  { connect } from 'react-redux';
import { FaArrowUp, FaUser } from "react-icons/fa";

const Features = (props) =>  {

    return (
        <React.Fragment>
            <section className = 'section-features'>
                <div className="row">
                    <h2>Tired of buying burgers?<br/> 
                    Build your own!</h2>
                    <p className="long-copy">
                    Tired of eating same hamburgers, cheeseburgers, chickenburgers etc? No problem! Make your own with BurgerOk using a huge variety of top quality ingredients the way you want! You make - we cook!
                    </p>
                </div>
                <div className="row wrapper">
                    <div className = 'col span-1-of-3 box'>
                        <FaUser className = 'icon-big'/>
                        <h3>create your own burger</h3>
                        <p> 
                            Yes, you didn't overhear. We only supply. You create the burger you like. Put your craziest burger ideas into life! Triple cheese or quadruple beef? Pfff, no problem!  
                        </p>
                    </div>
                    <div className = 'col span-1-of-3 box'>
                        <FaArrowUp className = 'icon-big'/>
                        <h3>top ingredients together</h3>
                        <p> 
                            We have fruits delivered from Australia, spices from China and juicy vegetables from New Zealand. Irish tender roast beef and English cheese. All of them are brought to be in your burger.
                        </p>
                    </div>
                    <div className = 'col span-1-of-3 box'>
                        <FaArrowUp className = 'icon-big'/>
                        <h3>have it ready in 30 minutes</h3>
                        <p> 
                        You're only thirty minutes away from your delicious burger. The best chefs in each town make burgers to ensure that you're 100% happy.
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
