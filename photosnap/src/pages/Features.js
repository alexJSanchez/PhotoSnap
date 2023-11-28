import React from "react";

import hero from "../assets/features/mobile/hero.jpg";
import create_and_share_mid from "../assets/home/tablet/create-and-share.jpg";
import arrow from "../assets/shared/desktop/arrow.svg";
export default function Features() {
	return (
		<div>
			<div id="main-card" className="bg-black tablet:grid tablet:grid-cols-3">
				<div id="main-card-top" className="tablet:col-start-3">
					<img
						id="main-card-top-image "
						className="w-full tablet:hidden"
						src={hero}
						alt="man on mountain"
					/>
					<img
						id="main-card-top-image "
						className="w-full mobile:hidden tablet:block "
						src={create_and_share_mid}
						alt="man on mountain"
					/>
				</div>
				<div className="main-card-bottom-boommark tablet:hidden"></div>
				<div
					id="main-card-bottom"
					className="tablet:flex tablet:flex-col px-[18px] tablet:justify-center tablet:col-start-1 tablet:row-start-1 tablet:col-end-3  text-white bg-black py-[72px] tablet:px-[58px]"
				>
					<h2 className="text-white text-[32px] tablet:text-[40px] font-bold leading-[40px] tablet:leading-[48px] tracking-[3.333px] tablet:tracking-[4.167px] uppercase">
						FEATURES
					</h2>
					<p className="mt-[1rem] mb-[1.438rem] tablet:mt-[21px] tablet:mb-[48px] text-white font-[15px] leading-[25px] opacity-[0.6]">
						We make sure all of our features are designed to be loved by every
						aspiring and even professional photograpers who wanted to share
						their stories.
					</p>
				</div>
			</div>
		</div>
	);
}
