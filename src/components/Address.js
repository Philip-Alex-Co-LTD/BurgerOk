import React, { useEffect, useState, useRef } from "react";
import { useKeyPress, useOnClickOutside } from "use-hooks";
import { connect } from "react-redux";

// import Input from "../components/Input";
import axios from "../axios-orders";
import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../store/actions/index";

const Address = (props) => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputValue, setInputValue] = useState(props.text);
  const wrapperRef = useRef(null);
  const textRef = useRef(null);
  const inputRef = useRef(null);
  const enter = useKeyPress("Enter");
  const esc = useKeyPress("Escape");
  // check to see if the user clicked outside of this component
  useOnClickOutside(wrapperRef, () => {
    if (isInputActive) {
      props.onSetText(inputValue);
      setIsInputActive(false);
    }
  });
  // focus the cursor in the input field on edit start
  useEffect(() => {
    if (isInputActive) {
      inputRef.current.focus();
    }
  }, [isInputActive]);
  useEffect(() => {
    if (isInputActive) {
      // if Enter is pressed, save the text and case the editor
      if (enter) {
        props.onSetText(inputValue);
        setIsInputActive(false);
      }
      // if Escape is pressed, revert the text and close the editor
      if (esc) {
        setInputValue(props.text);
        setIsInputActive(false);
      }
    }
  }, [enter, esc]); // watch the Enter and Escape key presses
  return (
    <span className="inline-text" ref={wrapperRef}>
      <span
        ref={textRef}
        onClick={() => setIsInputActive(true)}
        className={`inline-text_copy inline-text_copy--${
          !isInputActive ? "active" : "hidden"
        }`}
      >
        {props.text}
      </span>
      <input
        ref={inputRef}
        // set the width to the input length multiplied by the x height
        // it's not quite right but gets it close
        style={{ width: Math.ceil(inputValue.length * 0.9) + "ex" }}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className={`inline-text_input inline-text_input--${
          isInputActive ? "active" : "hidden"
        }`}
      />
    </span>
  );
};
//   if (!props.loading && props.orders) {
//     console.log(props.orders);
//     const lastOrder =
//       props.orders[
//         Object.keys(props.orders)[Object.keys(props.orders).length - 1]
//       ];
//     if (lastOrder) {
//       const inputTitle = Object.keys(lastOrder["orderData"]);
//       const InputField = Object.values(lastOrder["orderData"]);
//       console.log(inputTitle, InputField);
//       for (let i in inputTitle) {
//         output.push(
//           <div className="address" key={i + "z745"}>
//             <p className="span-1-of-3">{inputTitle[i]}</p>
//             <input
//               className="input-field span-2-of-3"
//               value={InputField[i]}
//             ></input>
//           </div>
//         );
//       }
//     }
//   }
//   return <div className="address-section">{output ? output : orders}</div>;
// };

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Address, axios));
