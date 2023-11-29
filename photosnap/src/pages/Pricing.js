import React from "react";
import dusk from "../assets/pricing/mobile/hero.jpg";
import duskmid from "../assets/pricing/tablet/hero.jpg";
export default function Pricing() {
	return (
		<div>
			<div id="main-card" className="bg-black tablet:flex">
				<img
					id="main-card-top-image "
					className="w-full tablet:hidden"
					src={dusk}
					alt="man on mountain"
				/>

				<div className="main-card-bottom-boommark tablet:hidden"></div>
				<div
					id="main-card-bottom"
					className="tablet:px-[54px] tablet:py-[173px] px-[29px] py-[72px] text-white bg-black "
				>
					<h2 className="text-white text-[32px] tablet:text-[40px] font-bold leading-[40px] tablet:leading-[48px] tracking-[3.333px] tablet:tracking-[4.167px] uppercase">
						PRICING
					</h2>
					<p className="mt-[1rem] mb-[1.438rem] tablet:mt-[21px] text-white text-[15px] leading-[25px] opacity-[0.6]">
						Create a your stories, Photosnap is a platform for photographers and
						visual storytellers. It’s the simple way to create and share your
						photos.
					</p>
				</div>
				<img
					id="main-card-top-image "
					className="hidden tablet:block"
					src={duskmid}
					alt="man on mountain"
				/>
			</div>
		</div>
	);
}
