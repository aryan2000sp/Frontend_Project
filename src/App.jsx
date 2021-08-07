import React from "react";
import "./scss/main.scss";
import image from "./images/image-header-desktop.jpg";
const App = () => {
  return (
    <section className="background">
      <article className="stat-container">
        <div className="col col-info">
          <h1>
            Get
            <span style={{ color: "hsl(277, 64%, 61%)" }}> insights </span>
            that help your bussiness grow.
          </h1>
          <p>
            Discover the benefits of data analytics and make better decision
            regarding revenue, customer experience and overall efficiency.
          </p>

          <div className="stat-number">
            <div>
              <h4>10k+</h4>
              <p>COMPANIES</p>
            </div>
            <div>
              <h4>314</h4>
              <p>TEMPLATES</p>
            </div>
            <div>
              <h4>12M+</h4>
              <p>QUERIES</p>
            </div>
          </div>
        </div>
        <div className="col img-col">
          <img src={image} alt="" className="image" />
        </div>
      </article>
    </section>
  );
};

export default App;
