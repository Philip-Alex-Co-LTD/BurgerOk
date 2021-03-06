import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../components/Button";
import Spinner from "../components/Spinner";
import axios from "../axios-orders";
import Input from "../components/Input";
import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../store/actions/index";
import ThankYouModal from "../components/thankYouModal";
class ContactData extends Component {
  state = {
    orderForm: {
      "First Name": {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "First Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      "Last Name": {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Last Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      Country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      City: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "City",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      Street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      "Zip code": {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP code",
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 7,
        },
        valid: false,
        touched: false,
      },
      "E-mail": {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your E-Mail",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      "Delivery method": {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "fastest",
        validation: {},
        valid: true,
      },
    },
    formIsValid: false,
    personalInfo: {},
    active: false,
    show: false,
  };

  componentDidMount() {
    this.props.onGetAddress(this.props.token, this.props.userId);
  }
  componentWillUnmount() {
    this.props.onCancelPurchasing();
  }

  showModal = () => {
    this.setState({ show: true });
  };

  togglePersonal = () => {
    this.setState((prevState) => {
      return { active: !prevState.active };
    });
    this.setState((prevState) => {
      return { formIsValid: !prevState.formIsValid };
    });
  };

  orderHandler = (event) => {
    event.preventDefault();
    const formData = {};
    if (this.state.active) {
      for (let formElementIdentifier in this.props.personal) {
        formData[formElementIdentifier] = this.props.personal[
          formElementIdentifier
        ];
      }
    } else {
      for (let formElementIdentifier in this.state.orderForm) {
        formData[formElementIdentifier] = this.state.orderForm[
          formElementIdentifier
        ].value;
      }
    }
    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderData: formData,
      userId: this.props.userId,
    };

    this.props.onOrderBurger(order, this.props.token);
    window.location.reload();
  };

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.minLength && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };

  render() {
    let personal;
    if (Object.values(this.props.personal).length) {
      let e = this.props.personal;
      personal = (
        <div className="personal-CD">
          <p>
            Name: {e["First Name"]} {e["Last Name"]}
            <br></br>
            E-mail: {e["E-mail"]}
            <br></br>
            Address: {e["Country"]}, {e["City"]}, {e["Street"]}, {e["Zip code"]}
            <br></br>
            Delivery method: {e["Delivery method"]}
          </p>
        </div>
      );
    }
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <div>
        <form >
          {formElementsArray.map((formElement) => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={(event) =>
                this.inputChangedHandler(event, formElement.id)
              }
            />
          ))}
        </form>
          <Button btnType="success" disabled={!this.state.formIsValid} clicked={this.showModal}>
            ORDER
          </Button>
      </div>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    return (
      <div>
        <h2 style={{ paddingTop: "40px" }}>
          Complete your Contact data to order
        </h2>

        <ThankYouModal
          show={this.state.show}
          closed={(event) => this.orderHandler(event)}
        />
        {personal && (
          <div>
            <h3 className = "center">
              You can also choose information based on your previous order
            </h3>
            <div
              onClick={this.togglePersonal}
              className={`personal-ContactData-${
                this.state.active && "active"
              }`}
            >
              {personal}
              <input
                className="checkbox-CD"
                type="checkbox"
                checked={this.state.active}
              ></input>
            </div>
          </div>
        )}
        <div className="contact-data">
          {!this.state.active ? (
            form
          ) : (
            <Button
              btnType="success"
              disabled={!this.state.formIsValid}
              clicked={this.showModal}
            >
              ORDER
            </Button>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
    personal: state.address.personalInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData, token) =>
      dispatch(actions.purchaseBurger(orderData, token)),
    onGetAddress: (token, userId) =>
      dispatch(actions.getAddressData(token, userId)),
    onCancelPurchasing: () => dispatch(actions.cancelPurchasing()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
