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
		<footer className="flex flex-col py-[3.5rem] bg-black">
			<img className="logo-light" src={logo} />
			<div className="mt-[2rem] mb-[3rem] gap-[0.7rem] flex">
				<img src={facebook} />
				<img src={youtube} />
				<img src={twitter} />
				<img src={pinterest} />
				<img src={instagram} />
			</div>
			<ol className="text-white text-center text-[12px] font-[700] tracking-[2px] uppercase list-none">
				<li>home</li>
				<li>stories</li>
				<li>features</li>
				<li>pricing</li>
			</ol>
			<div className="btn-four-box mt-[2rem] mb-[3rem]">
				<button className="btn-four">
					Get An Invite
					<img className="arrow-img-light" src={arrow} />
				</button>
			</div>
			<p className="text-white text-[15px] opacity-[0.5]">
				Copyright 2023. All Rights Reserved
			</p>
		</footer>
	);
}
