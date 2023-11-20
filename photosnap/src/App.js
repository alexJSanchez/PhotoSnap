import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Stories from "./pages/Stories";
import Features from "./pages/Features";
import logo from "./assets/shared/desktop/logo.svg";
import mobile_menu from "./assets/shared/mobile/menu.svg";
import arrow from "./assets/shared/desktop/arrow.svg";
import facebook from "./assets/shared/desktop/facebook.svg";
import youtube from "./assets/shared/desktop/youtube.svg";
import twitter from "./assets/shared/desktop/twitter.svg";
import pinterest from "./assets/shared/desktop/pinterest.svg";
import instagram from "./assets/shared/desktop/instagram.svg";

import "./App.css";
import "./index.css";

function App() {
	return (
		<BrowserRouter>
			<nav className="dropdown">
				<div className="nav">
					<div className="nav-left">
						<img src={logo} />
					</div>
					<div className="nav-right">
						<img src={mobile_menu} />
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
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="pricing" element={<Pricing />} />
				<Route path="stories" element={<Stories />} />
				<Route path="features" element={<Features />} />
			</Routes>
			<footer>
				<img className="logo-light" src={logo} />
				<div>
					<img src={facebook} />
					<img src={youtube} />
					<img src={twitter} />
					<img src={pinterest} />
					<img src={instagram} />
				</div>
				<ol>
					<li>home</li>
					<li>stories</li>
					<li>features</li>
					<li>pricing</li>
				</ol>
				<div className="btn-four-box">
					<button className="btn-four">
						Get An Invite
						<img className="arrow-img-light" src={arrow} />
					</button>
				</div>
				<p>Copyright 2023. All Rights Reserved</p>
			</footer>
		</BrowserRouter>
	);
}

export default App;
