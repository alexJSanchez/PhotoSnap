import { React, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import mobile_menu from "../assets/shared/mobile/menu.svg";

export default function Navigation() {
  const [dropdown, SetDropdown] = useState(false);
  return (
    <nav className="dropdown">
      <div className="bg-white flex justify-between mt-[1.7rem] mr-[1.5rem] mb-[1.7rem] ml-[1rem]">
        <div className="nav-left">
          <img src={logo} />
        </div>
        <div className="flex justify-center items-center">
          <img
            className="link"
            onClick={() => {
              SetDropdown(!dropdown);
            }}
            src={mobile_menu}
            alt="dropdown hamburger button"
          />
        </div>
      </div>
      {dropdown ? (
        <div className="dropdown-menu dropdown-font flex flex-col items-center px-[2rem]">
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="stories">
            <h2>Stories</h2>
          </Link>
          <Link to="features">
            <h2>Features</h2>
          </Link>
          <Link to="pricing">
            <h2>Pricing</h2>
          </Link>
          <div className="line bg-black px-4"> </div>
          <button className="py-[1rem] text-white bg-black w-full">
            Get An Invite
          </button>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}
