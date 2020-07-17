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
              <a>About us</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Press</a>
            </li>
            <li>
              <a>iOS App</a>
            </li>
            <li>
              <a>Android App</a>
            </li>
          </ul>
        </div>
        <div className="col span-1-of-2">
          <ul className="social-links">
            <li>
              <a>
                <FaFacebookSquare className="ion-social-facebook" />
              </a>
            </li>
            <li>
              <a>
                <FaTwitter className="ion-social-twitter" />
              </a>
            </li>
            <li>
              <a>
                <FaGooglePlusG className="ion-social-googleplus" />
              </a>
            </li>
            <li>
              <a>
                <FaInstagram className="ion-social-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p>Copyright &copy; 2020 by BurgerOk. All rights reserved.</p>
    </footer>
  );
}
