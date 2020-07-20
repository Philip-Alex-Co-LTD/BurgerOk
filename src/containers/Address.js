import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import InlineEdit from "../components/InlineEdit";

const address = (props) => {
  const { onGetAddress } = props;
  useEffect(() => {
    onGetAddress(props.token, props.userId);
  }, [onGetAddress]);
  useEffect(() => {
    setpersonalInfo((personalInfo) => ({ ...personalInfo, ...props.personal }));
  }, [props.personal]);
  const [personalInfo, setpersonalInfo] = useState({
    "First Name": "",
    "Last Name": "",
    Country: "",
    City: "",
    Street: "",
    "Zip code": "",
    "E-mail": "",
    "Delivery method": "fastest",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const Address = {
      Data: personalInfo,
      userId: props.userId,
    };
    props.onSubmitAddress(Address, props.token);
    props.history.push("/");
  };
  const handleInputChange = (event, el) => {
    const updatedFormElement = {
      ...personalInfo,
      ...{ [el]: event },
    };

    setpersonalInfo(updatedFormElement);
  };

  //   let orders = <Spinner />;

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
  //   console.log(val);
  return (
    <div className="address-section">
      <h2>Profile information</h2>
      {val}
      <button className="order-button" onClick={(event) => handleSubmit(event)}>
        SUBMIT
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
    personal: state.address.personalInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetAddress: (token, userId) =>
      dispatch(actions.getAddressData(token, userId)),
    onSubmitAddress: (personalInfo, token) =>
      dispatch(actions.submitPersonalInfo(personalInfo, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(address);
