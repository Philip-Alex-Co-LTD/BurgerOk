import React from "react";
import { FaRegStar, FaUser, FaRegComments } from "react-icons/fa";
export default function Cities() {
  return (
    <div>
      <section className="section-cities" id="cities">
        <div className="row">
          <h2>We're currently in these cities</h2>
        </div>
        <div className="row">
          <div className="col span-1-of-4 box">
            <img
              src="resources/css/img/lisbon-3-min.jpg"
              alt="Lisbon"
              class="cities-photo"
            />
            <h3>Lisbon</h3>
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
                <a href="#" className="twitter-ref">
                  @omnifood_lx
                </a>
              </li>
            </ul>
          </div>
          <div className="col span-1-of-4 box">
            <img src="" alt="San Francisco" className="cities-photo" />
            <h3>San Francisco</h3>
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
                <a href="#" className="twitter-ref">
                  @omnifood_sf
                </a>
              </li>
            </ul>
          </div>
          <div className="col span-1-of-4 box">
            <img
              src="resources/css/img/berlin-min.jpg"
              alt="Berlin"
              className="cities-photo"
            />
            <h3>Berlin</h3>
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
                <a href="#" className="twitter-ref">
                  @omnifood_berlin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
