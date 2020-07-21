import React from "react";

export default function header() {
  return (
    <header>
      <div className="hero-text-box">
        <h1>
          Goodbye regular burgers.
          <br /> Become burger designer on your own
        </h1>
        <a className="button button-full">I'm hungry</a>
        <a className="button button-ghost">Show me more</a>
      </div>
    </header>
  );
}
