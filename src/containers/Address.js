import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import Spinner from "../components/Spinner";
import InlineEdit from "../components/InlineEdit";

const address = (props) => {
  const { onFetchOrders } = props;
  useEffect(() => {
    onFetchOrders(props.token, props.userId);
  }, [onFetchOrders]);
  const [personalInfo, setpersonalInfo] = useState({
    "First Name": "",
    "Last Name": "",
    Country: "",
    City: "",
    Street: "",
    "Zip code": "",
    "E-mail": "",
  });

  const handleInputChange = (event, el) => {
    const updatedFormElement = {
      ...personalInfo,
      ...{ [el]: event },
    };

    setpersonalInfo(updatedFormElement);
  };

  if (!props.loading) {
  }
  let orders = <Spinner />;

  let key = Object.keys(personalInfo);
  let val = key.map((el) => {
    return (
      <div className="address" key={el + "z745"}>
        <p className="span-1-of-3">{el}</p>
        <InlineEdit
          text={personalInfo[el] ? personalInfo[el] : "enter your info"}
          onSetText={(event) => handleInputChange(event, el)}
        />
      </div>
    );
  });
  console.log(val);
  return <div className="address-section">{val}</div>;
};

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, userId) =>
      dispatch(actions.fetchOrders(token, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(address);
