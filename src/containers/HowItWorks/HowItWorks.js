import React from "react";
export default function HowItWorks() {
  return (
    <div>
      <section className="section-steps" id="works">
        <div className="row">
          <h2>How it works &mdash; Simple as 1, 2, 3</h2>
        </div>
        <div className="row">
          <div className="col span-2-of-2 box-steps">
            <div className="works-step">
              <p>
                1 Choose the subscription plan that best fits your needs and
                sign up today.
              </p>
            </div>
            <div className="works-step">
              <p>
                2 Order your delicious meal using our mobile app or website. Or
                you can even call us!
              </p>
            </div>
            <div className="works-step">
              <p>
                3 Enjoy your meal after less than 20 minutes. See you the next
                time!
              </p>
            </div>
            <a href="#" className="btn-app"></a>
          </div>
        </div>
      </section>
    </div>
  );
}
