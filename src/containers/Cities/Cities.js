import React from "react";
import { FaRegStar, FaUser, FaRegComments } from "react-icons/fa";
import bobr from "../../assets/images/bobr.jpg";
import minsk from "../../assets/images/minsk.jpg";
import gz from "../../assets/images/gz.jpg";
export default function Cities() {
  return (
    <div>
      <section className="section-cities" id="cities">
        <div className="row">
          <h2>We're currently in these cities</h2>
        </div>
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
                <a href="#" className="twitter-ref">
                  @omnifood_lx
                </a>
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
                <a href="#" className="twitter-ref">
                  @omnifood_sf
                </a>
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
