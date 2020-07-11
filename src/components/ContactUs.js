import React, { Component } from "react";

export default class ContactUs extends Component {
  render() {
    return (
      <React.Fragment>
        <section class="section-contact">
          <div class="row">
            <h2>We're happy to hear from you</h2>
          </div>
          <div class="row">
            <form method="post" action="#" class="contact-form">
              <div class="row">
                <div class="col span-33">
                  <label for="name">Name</label>
                </div>
                <div class="col span-66">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col span-33">
                  <label for="email">Email</label>
                </div>
                <div class="col span-66">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col span-33">
                  <label for="find-us">How did you find us?</label>
                </div>
                <div class="col span-66">
                  <select name="find-us" id="find-us">
                    <option value="friends" selected>
                      Friends
                    </option>
                    <option value="search">Search engine</option>
                    <option value="ad">Advertisement</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col span-33">
                  <label>Newsletter?</label>
                </div>
                <div class="col span-66">
                  <input type="checkbox" name="news" id="news" checked /> Yes,
                  please
                </div>
              </div>
              <div class="row">
                <div class="col span-33">
                  <label>Drop us a line</label>
                </div>
                <div class="col span-66">
                  <textarea placeholder="Your message"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col span-33">
                  <label>&nbsp;</label>
                </div>
                <div class="col span-66">
                  <input type="submit" value="Send it!" />
                </div>
              </div>
            </form>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
