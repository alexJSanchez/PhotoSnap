import React from "react";
import arrow from "../assets/shared/desktop/arrow.svg";
import facebook from "../assets/shared/desktop/facebook.svg";
import youtube from "../assets/shared/desktop/youtube.svg";
import twitter from "../assets/shared/desktop/twitter.svg";
import pinterest from "../assets/shared/desktop/pinterest.svg";
import instagram from "../assets/shared/desktop/instagram.svg";
import logo from "../assets/shared/desktop/logo.svg";
export default function Footer() {
	return (
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
	);
}
