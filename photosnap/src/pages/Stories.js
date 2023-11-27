import React from "react";
import moon from "../assets/stories/mobile/moon-of-appalacia.jpg";
import moon_mid from "../assets/stories/desktop/moon-of-appalacia.jpg";

import arrow from "../assets/shared/desktop/arrow.svg";
export default function Stories() {
	return (
		<div>
			<div>
				<img src={moon} className="tablet:hidden w-full" />
				<div className="tablet:bg-hero-pattern bg-black bg-center bg-no-repeat bg-cover text-white bg-black py-[48px] px-[28px] tablet:py-[122px]">
					<h4 className="text-[12px] font-[700] tracking-[2px]">
						LAST MONTH’S FEATURED STORY
					</h4>
					<h2 className="py-4 pr-[5px] tablet:max-w-[350px] text-[32px] tablet:text-[40px] font-[700] leading-[40px] tablet:leading-[48px] tracking-[3.33px] tablet:tracking-[4.167px]">
						HAZY FULL MOON OF APPALACHIA
					</h2>
					<div className="flex text-[13px] opacity-[.75] gap-2">
						<p>March 2nd 2020</p>
						<p>by John Appleseed</p>
					</div>
					<p className="py-4 tablet:max-w-[387px]  text-[15px] opacity-[.60] leading-[25px]">
						The dissected plateau area, while not actually made up of geological
						mountains, is popularly called "mountains," especially in eastern
						Kentucky and West Virginia, and while the ridges are not high, the
						terrain is extremely rugged.
					</p>
					<div className="btn-two-box">
						<button className="btn-two-light">
							READ THE STORY
							<img className="arrow-img-light" src={arrow} />
						</button>
					</div>
				</div>
			</div>
			<div>
				<div className="bg-mountain no bg-no-repeat bg-cover"></div>
			</div>
		</div>
	);
}

// <div className="relative text-white flex justify-center flex-col">
// <div>
// 	<img src={moon} className="w-full tablet:hidden" />
// 	<img
// 		src={moon_mid}
// 		className="hidden tablet:block tablet:min-h-[500px]"
// 	/>

// 	<div className="tablet:absolute tablet:right-0 tablet:top-0 tablet:pr-[350px] tablet:bg-transparent bg-black px-[29px] py-[48px]">
// 		<h4 className="text-[12px] font-[700] tracking-[2px]">
// 			LAST MONTH’S FEATURED STORY
// 		</h4>
// 		<h2 className="py-4 pr-[5px] tablet:pr-[25px] text-[32px] tablet:text-[40px] font-[700] leading-[40px] tablet:leading-[48px] tracking-[3.33px] tablet:tracking-[4.167px]">
// 			HAZY FULL MOON OF APPALACHIA
// 		</h2>
// 		<div className="flex text-[13px] opacity-[.75] gap-2">
// 			<p>March 2nd 2020</p>
// 			<p>by John Appleseed</p>
// 		</div>
// 		<p className="py-4 text-[15px] opacity-[.60] leading-[25px]">
// 			The dissected plateau area, while not actually made up of geological
// 			mountains, is popularly called "mountains," especially in eastern
// 			Kentucky and West Virginia, and while the ridges are not high, the
// 			terrain is extremely rugged.
// 		</p>
// 		<div className="btn-two-box">
// 			<button className="btn-two-light">
// 				READ THE STORY
// 				<img className="arrow-img-light" src={arrow} />
// 			</button>
// 		</div>
// 	</div>
// </div>
// </div>
