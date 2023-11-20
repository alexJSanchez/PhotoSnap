import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import mobile_menu from "../assets/shared/mobile/menu.svg";

export default function Navigation() {
	return (
		<nav className="dropdown">
			<div className="nav">
				<div className="nav-left">
					<img src={logo} />
				</div>
				<div className="nav-right">
					<img className="link" src={mobile_menu} />
				</div>
			</div>
			<div className="dropdown-menu flex flex-col items-center">
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
			</div>
		</nav>
	);
}
