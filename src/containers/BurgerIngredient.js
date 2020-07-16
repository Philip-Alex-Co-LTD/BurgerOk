import React, { Component } from "react";
import PropTypes from "prop-types";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className="bread-bottom"></div>;
        break;
      case "bread-top":
        ingredient = <div className="bread-top"></div>;
        break;
      case "meat":
        ingredient = (
          <div
            className="meat"
            style={{ zIndex: 40 - this.props.zIndex }}
          ></div>
        );
        break;
      case "cheese":
        ingredient = (
          <div
            className="cheese"
            style={{ zIndex: 60 - this.props.zIndex }}
          ></div>
        );
        break;
      case "bacon":
        ingredient = (
          <div
            className="bacon"
            style={{
              zIndex: 80 - this.props.zIndex,
            }}
          ></div>
        );
        break;
      case "salad":
        ingredient = (
          <div
            className="salad"
            style={{ zIndex: 20 - this.props.zIndex }}
          ></div>
        );
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
