import React from "react";
import "./Features.css";
import  { connect } from 'react-redux';
// import Burger from '../../components/Burger/Burger';
// import BuildControls from '../../components/Burger/BuildControls/BuildControls';
// import Modal from '../../components/UI/Modal/Modal';
// import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
// import Spinner from '../../components/UI/Spinner/Spinner';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
// import * as burgerBuiderActions from '../../store/actions/index';
// import axios from '../../axios-orders';

const Features = (props) =>  {

    return (
        <div className = 'features'>
            <div className = 'span-1-of-4'>
                <i class="ion-ios-infinite-outline icon-big"></i>
                <h3>Up to 365 days/year</h3>
                <p> 
                    Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
                </p>
            </div>
            <div className = 'span-1-of-4'>
                <i class="ion-ios-infinite-outline icon-big"></i>
                <h3>Up to 365 days/year</h3>
                <p> 
                    Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
                </p>
            </div>
            <div className = 'span-1-of-4'>
                <i class="ion-ios-infinite-outline icon-big"></i>
                <h3>Up to 365 days/year</h3>
                <p> 
                    Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
                </p>
            </div>
            <div className = 'span-1-of-4'>
                <i class="ion-ios-infinite-outline icon-big"></i>
                <h3>Up to 365 days/year</h3>
                <p> 
                    Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
                </p>
            </div>
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

