import React, { useRef, useEffect } from "react";
import { FaRegStar, FaUser, FaRegComments } from "react-icons/fa";
import bobr from "../assets/images/bobr.jpg";
import minsk from "../assets/images/minsk.jpg";
import gz from "../assets/images/gz.jpg";
import * as navigationActions from "../store/actions/index";
import { connect } from "react-redux";


const Cities = () => {
  
  const myRef = useRef(null);

  useEffect(() => {
      props.onAddingReference(['section-cities', myRef])
  }, [myRef]);


  return (
    <React.Fragment>
      <section className="section-cities" id="cities" ref={myRef}>
        <div className="row">
          <h2>Find us in these cities</h2>
        </div>
        <div className="row">

          <div className="cities">
            <div className="col span-1-of-3 box">
              <img src={bobr} alt="Bobruisk" className="cities-photo" />
              <h3>Bobruisk</h3>
              <ul className="cities-details">
                <li>
                  <FaUser className="icon-small" />
                  600+ happy eaters
                </li>
                <li>
                  <FaRegStar className="icon-small" />
                  60+ top chefs
                </li>
                <li>
                  <FaRegComments className="icon-small" />
                  <a className="twitter-ref">@burgerok_bk</a>
                </li>
              </ul>
            </div>

            <div className="col span-1-of-3 box">
              <img src={minsk} alt="Minsk" className="cities-photo" />
              <h3>Minsk</h3>
              <ul className="cities-details">
                <li>
                  <FaUser className="icon-small" />
                  3700+ happy eaters
                </li>
                <li>
                  <FaRegStar className="icon-small" />
                  160+ top chefs
                </li>
                <li>
                  <FaRegComments className="icon-small" />
                  <a className="twitter-ref">@burgerok_ms</a>
                </li>
              </ul>
            </div>

            <div className="col span-1-of-3 box">
              <img src={gz} alt="Guangzhou" className="cities-photo" />
              <h3>Guangzhou</h3>
              <ul className="cities-details">
                <li>
                  <FaUser className="icon-small" />
                  2300+ happy eaters
                </li>
                <li>
                  <FaRegStar className="icon-small" />
                  110+ top chefs
                </li>
                <li>
                  <FaRegComments className="icon-small" />
                  <a className="twitter-ref">@burgerok_gz</a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>
    </React.Fragment>
  );
}

// Function responsible for passing actions to the reducer
const mapDispatchToProps = (dispatch) => {
  return {
    onAddingReference: (referenceAndClassName) =>
      dispatch(navigationActions.addReference(referenceAndClassName))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Cities);
