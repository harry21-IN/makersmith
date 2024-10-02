import React from "react";
import "./Title.css";

function Title() {
  return (
    <div className="Title">
      <div className="title-parent-div">
        <div>
          <div className="title-content">
            <span>MAKE IT HAPPEN WITH</span>
            <span>MAKER SMITH</span>
          </div>
          <div className="title-desc">
            <p>
              Transform your ideas into tangible creations with our high-quality
              3D printing devices
            </p>
          </div>
          <div className="title-btn">
            <button>Get Started</button>
          </div>
        </div>
        <div className="title-img">
        </div>
      </div>
    </div>
  );
}

export default Title;
