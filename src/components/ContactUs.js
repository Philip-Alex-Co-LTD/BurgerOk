import React, { Component } from "react";

export default class ContactUs extends Component {
  render() {
    return (
      <section className="section-contact">
        <div className="row">
          <h2>We're happy to hear from you</h2>
        </div>
        <div className="row">
          <form method="post" action="#" className="contact-form">
            <div className="row">
              <div className="col span-33">
                <label htmlFor="name">Name</label>
              </div>
              <div className="col span-66">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col span-33">
                <label htmlFor="email">Email</label>
              </div>
              <div className="col span-66">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col span-33">
                <label htmlFor="find-us">How did you find us?</label>
              </div>
              <div className="col span-66">
                <select name="find-us" id="find-us" defaultValue="friends">
                  <option value="friends">Friends</option>
                  <option value="search">Search engine</option>
                  <option value="ad">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col span-33">
                <label>Newsletter?</label>
              </div>
              <div className="col span-66">
                <input
                  type="checkbox"
                  name="news"
                  id="news"
                  defaultChecked="checked"
                />{" "}
                Yes, please
              </div>
            </div>
            <div className="row">
              <div className="col span-33">
                <label>Drop us a line</label>
              </div>
              <div className="col span-66">
                <textarea placeholder="Your message"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col span-33">
                <label>&nbsp;</label>
              </div>
              <div className="col span-66">
                <input type="submit" value="Send it!" />
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
