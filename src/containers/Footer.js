import React from "react";
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col span-1-of-2">
          <ul className="footer-nav">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">iOS App</a>
            </li>
            <li>
              <a href="#">Android App</a>
            </li>
          </ul>
        </div>
        <div className="col span-1-of-2">
          <ul className="social-links">
            <li>
              <a href="#">
                <FaFacebookSquare className="ion-social-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter className="ion-social-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaGooglePlusG className="ion-social-googleplus" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram className="ion-social-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p>
        Copyright &copy; 2020 by BurgerOk. All rights reserved.
      </p>
    </footer>
  );
}
