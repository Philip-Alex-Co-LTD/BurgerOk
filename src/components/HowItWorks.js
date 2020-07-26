import React from "react";
import Img from "../assets/images/burger.gif";
export default function HowItWorks() {
  return (
    <section className="section-steps" id="works">
      <div className="row">
        <h2>How it works &mdash; Simple as 1, 2, 3</h2>
      </div>
      <div className="section-works">
        <ol className="span-1-of-3 how-it-works-steps">
          <li>
            Login or create new account.
            <br /> Now you are ready to start!
          </li>
          <li>
            Build your own burger using any ingredient you like.
            <br /> Share with your friends!
          </li>
          <li>
            Fill in the contact form & submit.
            <br /> Check out your order in "orders" section!
          </li>
          <li>
            Enjoy your meal after less than 20 minutes.
            <br /> See you next time!
          </li>
        </ol>
        <img src={Img} alt="How It Works" className="img" />
      </div>
    </section>
  );
}
