import React from "react";
import responsive from "../assets/features/desktop/responsive.svg";
import infinite from "../assets/features/desktop/no-limit.svg";
import bullhorn from "../assets/features/desktop/embed.svg";
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
			<div className="pb-[5rem] px-[2rem] tablet:pt-[50px] tablet:px-[150px]">
				<div className="card-details">
					<img src={responsive}></img>
					<h3 className="heading">100% Responsive</h3>
					<p className="para">
						No matter which the device you’re on, our site is fully responsive
						and stories look beautiful on any screen.
					</p>
				</div>
				<div className="card-details">
					<img src={infinite}></img>
					<h3 className="heading">No Photo Upload Limit</h3>
					<p className="para">
						Our tool has no limits on uploads or bandwidth. Freely upload in
						bulk and share all of your stories in one go.
					</p>
				</div>
				<div className="card-details">
					<img src={bullhorn}></img>
					<h3 className="heading">Available to Embed</h3>
					<p className="para">
						Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
						videos, Google Maps, and more.
					</p>
				</div>
			</div>
			<div className="bg-sand py-[64px] px-[33px] text-white">
				<h2 className="text-[32px] font-bold leading-[40px] tracking-[3.333px] uppercase pb-[24px]">
					We’re in beta. Get your invite today!
				</h2>
				<div className="btn-two-box">
					<button className="btn-two-light">
						GET AN INVITE
						<img className="arrow-img-light" src={arrow} />
					</button>
				</div>
			</div>
		</div>
	);
}
