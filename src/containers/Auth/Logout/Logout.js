import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class Logout extends Component {
    componentDidMount () {
        this.props.onLogout();
    }

    render () {
        return <Redirect to='/'/>;
    }
}

// const mapStateToProps = state => {
//     return {
//         loading: state.auth.loading,
//         error: state.auth.error
//     };
// };


// Function responsible for passing actions to the reducer
const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout()),
    };
}


export default connect(null, mapDispatchToProps)(Logout);