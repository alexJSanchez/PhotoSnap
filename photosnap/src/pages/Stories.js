import React from "react";
import moon from "../assets/stories/mobile/moon-of-appalacia.jpg";
import arrow from "../assets/shared/desktop/arrow.svg";
export default function Stories() {
  return (
    <div>
      <div className="main-card">
        <div className="main-card-top">
          <img className="w100" src={moon} />
        </div>
        <div className="main-card-bottom">
          <h4>LAST MONTH’S FEATURED STORY</h4>
          <h2>HAZY FULL MOON OF APPALACHIA </h2>
          <div className="flex sub-text">
            <p className="text-[13px]">March 2nd 2020</p>
            <p>by John Appleseed</p>
          </div>
          <p>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <div className="btn-four-box">
            <button className="btn-four">
              Get An Invite
              <img className="arrow-img-light" src={arrow} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
