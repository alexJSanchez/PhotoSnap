import React, { useState } from "react";
import dusk from "../assets/pricing/mobile/hero.jpg";
import duskmid from "../assets/pricing/tablet/hero.jpg";
export default function Pricing() {
	const [discount, setDiscount] = useState(false);
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
			<div className="flex justify-center items-center gap-[32px] mt-[64px] mb-[40px]">
				{discount ? (
					<p className="text-[18px] font-bold leading-[25px] opacity-50">
						Monthly
					</p>
				) : (
					<p className="text-[18px] font-bold leading-[25px]">Monthly</p>
				)}
				<label class="switch">
					<input
						type="checkbox"
						onClick={() => {
							setDiscount(!discount);
						}}
					></input>
					<span class="slider round"></span>
				</label>
				{discount ? (
					<p className="text-[18px] font-bold leading-[25px]">Yearly</p>
				) : (
					<p className="text-[18px] font-bold leading-[25px] opacity-50">
						Yearly
					</p>
				)}
			</div>
			<div className="flex flex-col mx-7">
				<div className="text-center bg-[#F5F5F5] pt-[56px] pb-[40px] px-[22px]">
					<h3 className="text-[24px] font-bold leading-[25px]">Basic</h3>
					<p className="text-[15px] leading-[25px] opacity-60 mt-[18px] ">
						Includes basic usage of our platform. Recommended for new and
						aspiring photographers.
					</p>
					<p className="text-[40px] font-bold leading-[48px] tracking-[4.167px] uppercase pt-[40px]">
						$19.00
					</p>
					<p className="text-[15px] leading-[25px] opacity-60">per month</p>
					<button className="text-[12px] uppercase tracking-[2px] font-bold bg-black text-white mt-[52px] w-full py-[12px]">
						pick plan
					</button>
				</div>
				<div className="text-center text-white bg-black my-6  pt-[48px] pb-[40px] px-[22px]">
					<h3 className="text-[24px] font-bold leading-[25px]">Pro</h3>
					<p className="text-[15px] leading-[25px] opacity-60 mt-[18px] ">
						More advanced features available. Recommended for photography
						veterans and professionals.
					</p>
					<p className="text-[40px] font-bold leading-[48px] tracking-[4.167px] uppercase pt-[40px]">
						$39.00
					</p>
					<p className="text-[15px] leading-[25px] opacity-60">per month</p>
					<button className="text-[12px] uppercase tracking-[2px] font-bold bg-white text-black mt-[52px] w-full py-[12px]">
						pick plan
					</button>
				</div>
				<div className="text-center bg-[#F5F5F5] pt-[56px] pb-[40px] px-[22px]">
					<h3 className="text-[24px] font-bold leading-[25px]">Business</h3>
					<p className="text-[15px] leading-[25px] opacity-60 mt-[18px] ">
						Additional features available such as more detailed metrics.
						Recommended for business owners.
					</p>
					<p className="text-[40px] font-bold leading-[48px] tracking-[4.167px] uppercase pt-[40px]">
						$99.00
					</p>
					<p className="text-[15px] leading-[25px] opacity-60">per month</p>
					<button className="text-[12px] uppercase tracking-[2px] font-bold bg-black text-white mt-[52px] w-full py-[12px]">
						pick plan
					</button>
				</div>
			</div>
		</div>
	);
}
