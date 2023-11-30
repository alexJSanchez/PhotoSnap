import React, { useState } from "react";
import dusk from "../assets/pricing/mobile/hero.jpg";
import duskmid from "../assets/pricing/tablet/hero.jpg";
import checkmark from "../assets/pricing/desktop/check.svg";
import arrow from "../assets/shared/desktop/arrow.svg";
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
			<div className="flex flex-col mx-7 mb-[64px]">
				<div className="tablet:grid tablet:grid-cols-4 tablet:grid-row-4 text-center tablet:text-left bg-[#F5F5F5] pt-[56px] pb-[40px] px-[22px] tablet:px-[40px]">
					<div className="tablet:col-start-1 tablet:col-end-3 tablet:row-start-1 row-end-2">
						<h3 className="text-[24px] font-bold leading-[25px]">Basic</h3>
						<p className="text-[15px] leading-[25px] opacity-60 mt-[18px] ">
							Includes basic usage of our platform. Recommended for new and
							aspiring photographers.
						</p>
					</div>
					<div className="tablet:col-start-4 tablet:row-start-1 tablet:row-end-1 tablet:text-right ">
						<p className="text-[40px] font-bold leading-[48px] tracking-[4.167px] uppercase pt-[40px] tablet:pt-[0px]">
							{discount ? "$190.00" : "$19.00"}
						</p>
						<p className="text-[15px] leading-[25px] opacity-60 ">
							{discount ? "per year" : "per month"}
						</p>
					</div>
					<button className="row-start-3 col-start-1 col-end-3 text-[12px] uppercase tracking-[2px] font-bold bg-black text-white mt-[52px] w-full py-[12px]">
						pick plan
					</button>
				</div>
				<div className="tablet:grid tablet:grid-cols-4 tablet:grid-row-4 text-center tablet:text-left text-white bg-black my-6  pt-[48px] pb-[40px] px-[22px] tablet:px-[40px]">
					<div className="tablet:col-start-1 tablet:col-end-3 tablet:row-start-1 tablet:row-end-2 ">
						<h3 className="text-[24px] font-bold leading-[25px]">Pro</h3>
						<p className="text-[15px] leading-[25px] opacity-60 mt-[18px] ">
							More advanced features available. Recommended for photography
							veterans and professionals.
						</p>
					</div>
					<div className="tablet:col-start-4 tablet:row-start-1 tablet:row-end-1 tablet:text-right">
						<p className="text-[40px] font-bold leading-[48px] tracking-[4.167px] uppercase pt-[40px] pt-0">
							{discount ? "$390.00" : "$39.00"}
						</p>
						<p className="text-[15px] leading-[25px] opacity-60 ">
							{discount ? "per year" : "per month"}
						</p>
					</div>
					<button className="tablet:row-start-3 tablet:col-start-1 tablet:col-end-3 text-[12px] uppercase tracking-[2px] font-bold bg-white text-black mt-[52px] w-full py-[12px]">
						pick plan
					</button>
				</div>
				<div className="tablet:grid tablet:grid-cols-4 tablet:grid-row-4 text-center tablet:text-left bg-[#F5F5F5] pt-[56px] pb-[40px] px-[22px] tablet:px-[40px]">
					<div className="tablet:col-start-1 tablet:col-end-3 tablet:row-start-1 tablet:row-end-2">
						<h3 className="text-[24px] font-bold leading-[25px]">Business</h3>
						<p className="text-[15px] leading-[25px] opacity-60 mt-[18px] ">
							Additional features available such as more detailed metrics.
							Recommended for business owners.
						</p>
					</div>
					<div className="tablet:col-start-4 tablet:row-start-1 tablet:row-end-1 tablet:text-right">
						<p className="text-[40px] font-bold leading-[48px] tracking-[4.167px] uppercase pt-[40px] tablet:pt-0">
							{discount ? "$990.00" : "$99.00"}
						</p>
						<p className="text-[15px] leading-[25px] opacity-60 ">
							{discount ? "per year" : "per month"}
						</p>
					</div>
					<button className="row-start-3 col-start-1 col-end-3 text-[12px] uppercase tracking-[2px] font-bold bg-black text-white mt-[52px] w-full py-[12px]">
						pick plan
					</button>
				</div>
			</div>
			{/* {compare section} */}
			<div className="tablet:hidden mx-[28px] mb-[64px]">
				<p className="text-[12px] font-bold tracking-[2px] uppercase">
					THE FEATURES
				</p>
				<div className="w-full h-[1px] bg-black my-[23px]"></div>
				<p className="text-[12px] font-bold tracking-[2px] uppercase">
					UNLIMITED STORY POSTING
				</p>
				<div className="grid grid-cols-3 pt-[16px]">
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							BASIC
						</h4>
						<img src={checkmark} className="mt-[8px]" />
					</div>
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							Pro
						</h4>
						<img src={checkmark} className="mt-[8px]" />
					</div>
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							Business
						</h4>
						<img src={checkmark} className="mt-[8px]" />
					</div>
				</div>
				<div className="w-full h-[1px] bg-black my-[23px] opacity-10"></div>
				<p className="text-[12px] font-bold tracking-[2px] uppercase">
					UNLIMITED PHOTO UPLOAD
				</p>
				<div className="grid grid-cols-3 pt-[16px]">
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							BASIC
						</h4>
						<img src={checkmark} className="mt-[8px]" />
					</div>
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							Pro
						</h4>
						<img src={checkmark} className="mt-[8px]" />
					</div>
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							Business
						</h4>
						<img src={checkmark} className="mt-[8px]" />
					</div>
				</div>
				<div className="w-full h-[1px] bg-black my-[23px] opacity-10"></div>
				<p className="text-[12px] font-bold tracking-[2px] uppercase">
					EMBEDDING CUSTOM CONTENT
				</p>
				<div className="grid grid-cols-3 pt-[16px]">
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							BASIC
						</h4>
					</div>
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							Pro
						</h4>
						<img src={checkmark} className="mt-[8px]" />
					</div>
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							Business
						</h4>
						<img src={checkmark} className="mt-[8px]" />
					</div>
				</div>
				<div className="w-full h-[1px] bg-black my-[23px] opacity-10"></div>
				<p className="text-[12px] font-bold tracking-[2px] uppercase">
					CUSTOMIZE METADATA
				</p>
				<div className="grid grid-cols-3 pt-[16px]">
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							BASIC
						</h4>
					</div>
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							Pro
						</h4>
						<img src={checkmark} className="mt-[8px]" />
					</div>
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							Business
						</h4>
						<img src={checkmark} className="mt-[8px]" />
					</div>
				</div>
				<div className="w-full h-[1px] bg-black my-[23px] opacity-10"></div>
				<p className="text-[12px] font-bold tracking-[2px] uppercase">
					ADVANCED METRICS
				</p>
				<div className="grid grid-cols-3 pt-[16px]">
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							BASIC
						</h4>
					</div>
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							Pro
						</h4>
					</div>
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							Business
						</h4>
						<img src={checkmark} className="mt-[8px]" />
					</div>
				</div>
				<div className="w-full h-[1px] bg-black my-[23px] opacity-10"></div>
				<p className="text-[12px] font-bold tracking-[2px] uppercase">
					PHOTO DOWNLOADS
				</p>
				<div className="grid grid-cols-3 pt-[16px]">
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							BASIC
						</h4>
					</div>
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							Pro
						</h4>
					</div>
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							Business
						</h4>
						<img src={checkmark} className="mt-[8px]" />
					</div>
				</div>
				<div className="w-full h-[1px] bg-black my-[23px] opacity-10"></div>
				<p className="text-[12px] font-bold tracking-[2px] uppercase">
					SEARCH ENGINE INDEXING
				</p>
				<div className="grid grid-cols-3 pt-[16px]">
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							BASIC
						</h4>
					</div>
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							Pro
						</h4>
					</div>
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							Business
						</h4>
						<img src={checkmark} className="mt-[8px]" />
					</div>
				</div>
				<div className="w-full h-[1px] bg-black my-[23px] opacity-10"></div>
				<p className="text-[12px] font-bold tracking-[2px] uppercase">
					CUSTOM ANALYTICS
				</p>
				<div className="grid grid-cols-3 pt-[16px]">
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							BASIC
						</h4>
					</div>
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							Pro
						</h4>
					</div>
					<div>
						<h4 className="text-[10px] font-bold tracking-[1.667px] uppercase">
							Business
						</h4>
						<img src={checkmark} className="mt-[8px]" />
					</div>
				</div>
				<div className="w-full h-[1px] bg-black my-[23px] opacity-10"></div>
			</div>
			<div className="hidden tablet:block ">
				<h3 className="text-[40px] text-center font-bold tracking-[4.167px] leading-[48px]">
					COMPARE
				</h3>
				<div className="mx-[40px] mt-[64px] pb-[25px]">
					<div className="grid grid-cols-5 grid-rows-1 text-center">
						<p className="col-start-0 col-end-2  row-start-1 text-[12px] font-bold tracking-[2px] uppercase">
							THE FEATURES
						</p>
						<p className=" col-start-3 row-start-1 text-[12px] font-bold tracking-[2px] uppercase">
							BASIC
						</p>
						<p className="col-start-4 col-end-5 row-start-1 text-[12px] font-bold tracking-[2px] uppercase">
							PRO
						</p>
						<p className="col-start-5 row-start-1 text-[12px] font-bold tracking-[2px] uppercase">
							BUSINESS
						</p>
					</div>
					<div className="w-full h-[1px] bg-black my-[23px] opacity-20"></div>
					<div className="grid grid-cols-5 grid-rows-1 text-center">
						<p className="col-start-1 col-end-3 pl-[15px] text-left row-start-1 text-[12px] font-bold tracking-[2px] uppercase">
							UNLIMITED STORY POSTING
						</p>
						<div className="col-start-3 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} />
						</div>
						<div className="col-start-4 col-end-5 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} />
						</div>
						<div className="col-start-5 row-start-1 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} />
						</div>
					</div>
					<div className="w-full h-[1px] bg-black my-[23px] opacity-20"></div>
					<div className="grid grid-cols-5 grid-rows-1 text-center">
						<p className="col-start-1 col-end-3 pl-[15px] text-left row-start-1 text-[12px] font-bold tracking-[2px] uppercase">
							UNLIMITED PHOTO UPLOAD
						</p>
						<div className="col-start-3 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} />
						</div>
						<div className="col-start-4 col-end-5 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} />
						</div>
						<div className="col-start-5 row-start-1 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} />
						</div>
					</div>
					<div className="w-full h-[1px] bg-black my-[23px] opacity-20"></div>
					<div className="grid grid-cols-5 grid-rows-1 text-center">
						<p className="col-start-1 col-end-3 pl-[15px] text-left row-start-1 text-[12px] font-bold tracking-[2px] uppercase">
							EMBEDDING CUSTOM CONTENT
						</p>
						<div className="col-start-3 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-4 col-end-5 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} />
						</div>
						<div className="col-start-5 row-start-1 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} />
						</div>
					</div>
					<div className="w-full h-[1px] bg-black my-[23px] opacity-20"></div>
					<div className="grid grid-cols-5 grid-rows-1 text-center">
						<p className="col-start-1 col-end-3 pl-[15px] text-left row-start-1 text-[12px] font-bold tracking-[2px] uppercase">
							CUSTOMIZE METADATA
						</p>
						<div className="col-start-3 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-4 col-end-5 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} />
						</div>
						<div className="col-start-5 row-start-1 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} />
						</div>
					</div>
					<div className="w-full h-[1px] bg-black my-[23px] opacity-20"></div>
					<div className="grid grid-cols-5 grid-rows-1 text-center">
						<p className="col-start-1 col-end-3 pl-[15px] text-left row-start-1 text-[12px] font-bold tracking-[2px] uppercase">
							ADVANCED METRICS
						</p>
						<div className="col-start-3 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-4 col-end-5 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-5 row-start-1 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} />
						</div>
					</div>
					<div className="w-full h-[1px] bg-black my-[23px] opacity-20"></div>
					<div className="grid grid-cols-5 grid-rows-1 text-center">
						<p className="col-start-1 col-end-3 pl-[15px] text-left row-start-1 text-[12px] font-bold tracking-[2px] uppercase">
							PHOTO DOWNLOADS
						</p>
						<div className="col-start-3 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-4 col-end-5 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-5 row-start-1 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} />
						</div>
					</div>
					<div className="w-full h-[1px] bg-black my-[23px] opacity-20"></div>
					<div className="grid grid-cols-5 grid-rows-1 text-center">
						<p className="col-start-1 col-end-3 pl-[15px] text-left row-start-1 text-[12px] font-bold tracking-[2px] uppercase">
							SEARCH ENGINE INDEXING
						</p>
						<div className="col-start-3 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-4 col-end-5 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-5 row-start-1 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} />
						</div>
					</div>
					<div className="w-full h-[1px] bg-black my-[23px] opacity-20"></div>
					<div className="grid grid-cols-5 grid-rows-1 text-center">
						<p className="col-start-1 col-end-3 pl-[15px] text-left row-start-1 text-[12px] font-bold tracking-[2px] uppercase">
							CUSTOM ANALYTICS
						</p>
						<div className="col-start-3 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-4 col-end-5 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-5 row-start-1 row-start-1 flex justify-center items-center align-middle text-[12px] font-bold tracking-[2px] uppercase">
							<img src={checkmark} />
						</div>
					</div>
				</div>
			</div>
			<div className="bg-sand tablet:bg-sandmid py-[64px] px-[33px] flex text-white bg-no-repeat bg-cover">
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
{
	/* <div className="w-full h-[1px] bg-black my-[23px]"></div>
					<div className="flex justify-between mx-[62px]">
						<p className="text-[12px] font-bold tracking-[2px] uppercase">
							UNLIMITED STORY POSTING
						</p>
						<img src={checkmark} />
						<img src={checkmark} />
						<img src={checkmark} />
					</div> */
}
