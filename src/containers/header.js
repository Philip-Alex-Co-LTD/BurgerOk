import React from "react";

export default function header() {
  return (
    <header>
      <div className="hero-text-box">
        <h1>
          Goodbye regular burgers.
          <br /> Become burger designer on your own
        </h1>
        <a className="btn btn-full" href="#">
          I'm hungry
        </a>
        <a className="btn btn-ghost" href="#">
          Show me more
        </a>
      </div>
    </header>
  );
}
