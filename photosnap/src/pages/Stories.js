import React from "react";
import moon from "../assets/stories/mobile/moon-of-appalacia.jpg";
import moon_mid from "../assets/stories/desktop/moon-of-appalacia.jpg";

import mountain from "../assets/stories/mobile/mountains.jpg";
import mountain_mid from "../assets/stories/desktop/mountains.jpg";
import cityscapes from "../assets/stories/mobile/cityscapes.jpg";
import cityscapes_mid from "../assets/stories/desktop/cityscapes.jpg";
import daysvoyage from "../assets/stories/mobile/18-days-voyage.jpg";
import daysvoyage_mid from "../assets/stories/desktop/18-days-voyage.jpg";
import architecturals from "../assets/stories/mobile/architecturals.jpg";
import architecturals_mid from "../assets/stories/desktop/architecturals.jpg";

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
			<div className="tablet:grid tablet:grid-cols-2">
				<div className="background-img">
					<div className="bg-mountain tablet:bg-mountainmid bg-center bg-no-repeat bg-cover">
						<div className="pt-[215px] tablet:pt-[340px]  pb-[40px] px-[41.67px] min-h-[375px] text-white  ">
							<p className="text-[13px] ">April 16th 2020</p>
							<h3 className="text-[18px] py-[4px] font-bold leading-[25px]">
								The Mountains
							</h3>
							<p className="text-[13px] pb-4">by John Appleseed</p>
							<div className="bg-white opacity-[.25] py-[1px] mb-[20px]"> </div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-cityscapes tablet:bg-cityscapesmid bg-center bg-no-repeat bg-cover">
					<div className="background-img">
						<div className="pt-[215px] tablet:pt-[340px]  pb-[40px] px-[41.67px] min-h-[375px] text-white  ">
							<p className="text-[13px] ">April 14th 2020</p>
							<h3 className="text-[18px] py-[4px] font-bold leading-[25px]">
								Sunset Cityscapes
							</h3>
							<p className="text-[13px] pb-4">by Benjamin Cruz</p>
							<div className="bg-white opacity-[.25] py-[1px] mb-[20px]"> </div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-dayvoyage tablet:bg-dayvoyagemid bg-center bg-no-repeat bg-cover">
					<div className="background-img">
						<div className="pt-[215px] tablet:pt-[340px] pb-[40px] px-[41.67px] min-h-[375px] text-white  ">
							<p className="text-[13px] ">April 11th 2020</p>
							<h3 className="text-[18px] py-[4px] font-bold leading-[25px]">
								18 Days Voyage
							</h3>
							<p className="text-[13px] pb-4">by Alexei Borodin</p>
							<div className="bg-white opacity-[.25] py-[1px] mb-[20px]"> </div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-architecturals tablet:bg-architecturalsmid bg-center bg-no-repeat bg-cover">
					<div className="background-img">
						<div className="pt-[215px] tablet:pt-[340px] pb-[40px] px-[41.67px] min-h-[375px] text-white  ">
							<p className="text-[13px] ">April 9th 2020</p>
							<h3 className="text-[18px] py-[4px] font-bold leading-[25px]">
								Architecturals
							</h3>
							<p className="text-[13px] pb-4">by Samantha Brooke</p>
							<div className="bg-white opacity-[.25] py-[1px] mb-[20px]"> </div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-worldtour tablet:bg-worldtourmid bg-center bg-no-repeat bg-cover">
					<div className="background-img">
						<div className="pt-[215px] tablet:pt-[340px] pb-[40px] px-[41.67px] min-h-[375px] text-white  ">
							<p className="text-[13px] ">April 7th 2020</p>
							<h3 className="text-[18px] py-[4px] font-bold leading-[25px]">
								World Tour 2019
							</h3>
							<p className="text-[13px] pb-4">by Timothy Wagner</p>
							<div className="bg-white opacity-[.25] py-[1px] mb-[20px]"> </div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-unforeseen tablet:bg-unforeseenmid bg-center bg-no-repeat bg-cover">
					<div className="background-img">
						<div className="pt-[215px] tablet:pt-[340px] pb-[40px] px-[41.67px] min-h-[375px] text-white  ">
							<p className="text-[13px] ">April 3rd 2020</p>
							<h3 className="text-[18px] py-[4px] font-bold leading-[25px]">
								Unforeseen Corners
							</h3>
							<p className="text-[13px] pb-4">by William Malcolm</p>
							<div className="bg-white opacity-[.25] py-[1px] mb-[20px]"> </div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-kingonafrica tablet:bg-kingonafricamid bg-center bg-no-repeat bg-cover">
					<div className="background-img">
						<div className="pt-[215px] tablet:pt-[340px] pb-[40px] px-[41.67px] min-h-[375px] text-white  ">
							<p className="text-[13px] ">March 29th 2020</p>
							<h3 className="text-[18px] py-[4px] font-bold leading-[25px]">
								King on Africa: Part II
							</h3>
							<p className="text-[13px] pb-4">by Tim Hillenburg</p>
							<div className="bg-white opacity-[.25] py-[1px] mb-[20px]"> </div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className=" bg-tripnowhere tablet:bg-tripnowheremid bg-center bg-no-repeat bg-cover">
					<div className="background-img">
						<div className="pt-[215px] tablet:pt-[340px] pb-[40px] px-[41.67px] min-h-[375px] text-white  ">
							<p className="text-[13px] ">March 21st 2020</p>
							<h3 className="text-[18px] py-[4px] font-bold leading-[25px]">
								The Trip to Nowhere
							</h3>
							<p className="text-[13px] pb-4">by Felicia Rourke</p>
							<div className="bg-white opacity-[.25] py-[1px] mb-[20px]"> </div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
