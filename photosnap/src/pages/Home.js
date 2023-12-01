import React from "react";

import create_and_share from "../assets/home/mobile/create-and-share.jpg";
import create_and_share_mid from "../assets/home/tablet/create-and-share.jpg";
import create_and_share_desk from "../assets/home/desktop/create-and-share.jpg";
import arrow from "../assets/shared/desktop/arrow.svg";
import beautiful_stories from "../assets/home/mobile/beautiful-stories.jpg";
import beautiful_stories_mid from "../assets/home/tablet/beautiful-stories.jpg";
import beautiful_stories_desk from "../assets/home/desktop/beautiful-stories.jpg";
import designed_for_everyone from "../assets/home/mobile/designed-for-everyone.jpg";
import designed_for_everyone_mid from "../assets/home/tablet/designed-for-everyone.jpg";
import responsive from "../assets/features/desktop/responsive.svg";
import infinite from "../assets/features/desktop/no-limit.svg";
import bullhorn from "../assets/features/desktop/embed.svg";
import mountain from "../assets/stories/mobile/mountains.jpg";
import mountain_mid from "../assets/stories/desktop/mountains.jpg";
import cityscapes from "../assets/stories/mobile/cityscapes.jpg";
import cityscapes_mid from "../assets/stories/desktop/cityscapes.jpg";
import daysvoyage from "../assets/stories/mobile/18-days-voyage.jpg";
import daysvoyage_mid from "../assets/stories/desktop/18-days-voyage.jpg";
import architecturals from "../assets/stories/mobile/architecturals.jpg";
import architecturals_mid from "../assets/stories/desktop/architecturals.jpg";
export default function Home() {
	return (
		<>
			<div className="App">
				<main>
					{/*card one*/}
					<div
						id="main-card"
						className="bg-black tablet:grid tablet:grid-cols-3 desktop:grid-cols-5"
					>
						<div
							id="main-card-top"
							className="tablet:col-start-3 desktop:col-start-3 desktop:col-end-6"
						>
							<img
								id="main-card-top-image "
								className="w-full tablet:hidden"
								src={create_and_share}
								alt="man on mountain"
							/>
							<img
								id="main-card-top-image "
								className="w-full mobile:hidden tablet:block desktop:hidden "
								src={create_and_share_mid}
								alt="man on mountain"
							/>
							<img
								id="main-card-top-image hidden desktop:block "
								className="w-full mobile:hidden tablet:block h-full"
								src={create_and_share_desk}
								alt="man on mountain"
							/>
						</div>
						<div className="main-card-bottom-boommark tablet:hidden"></div>
						<div
							id="main-card-bottom"
							className="tablet:flex tablet:flex-col tablet:justify-center tablet:col-start-1 tablet:row-start-1 tablet:col-end-3 desktop:col-end-3 text-white bg-black pt-[4.5rem] pr-[1.5rem] pb-[4.5rem] pl-[2.063rem] tablet:px-[58px] desktop:px-[100px] "
						>
							<h2 className="text-white text-[32px] tablet:text-[40px] font-bold leading-[40px] tablet:leading-[48px] tracking-[3.333px] tablet:tracking-[4.167px] uppercase">
								Create and share your photo Stories.
							</h2>
							<p className="mt-[1rem] mb-[1.438rem] tablet:mt-[21px] tablet:mb-[48px] text-white text-[15px] leading-[25px] opacity-[0.6]">
								Photosnap is a platform for photographers and visual
								storytellers. We make it easy to share photos, tell stories and
								connect with others.
							</p>
							<div className="btn-four-box">
								<button className="btn-four">
									Get An Invite
									<img className="arrow-img-light" src={arrow} />
								</button>
							</div>
						</div>
					</div>
					{/*card two*/}
					<div className="bg-white tablet:grid tablet:grid-cols-3 desktop:grid-cols-5">
						<div className="tablet:col-start-1 desktop:col-end-4">
							<img className="w-full tablet:hidden" src={beautiful_stories} />
							<img
								className="w-full hidden tablet:block desktop:hidden"
								src={beautiful_stories_mid}
							/>
							<img
								className="w-full hidden desktop:block"
								src={beautiful_stories_desk}
							/>
						</div>
						<div className="tablet:flex tablet:flex-col tablet:justify-center tablet:col-start-2 desktop:col-start-4 tablet:row-start-1 tablet:col-end-6 text-black bg-white pt-[4.5rem] pr-[1.5rem] pb-[4.5rem] pl-[2.063rem] tablet:px-[50px] desktop:px-[80px]">
							<h2 className="pr-[3.5rem] text-[32px] tablet:text-[40px] font-bold leading-[40px] tablet:leading-[48px] tablet:pr-[100px] tracking-[3.333px] tablet:tracking-[4.167px] uppercase">
								BEAUTIFUL STORIES EVERY TIME
							</h2>
							<p className="mt-[1rem] mb-[1.438rem] tablet:mt-[21px] tablet:mb-[48px] text-black font-[15px] leading-[25px] opacity-[0.6]">
								We provide design templates to ensure your stories look
								terrific. Easily add photos, text, embed maps and media from
								other networks. Then share your story with everyone.
							</p>
							<div className="btn-two-box">
								<button className="btn-two">
									Get An Invite
									<img className="" src={arrow} />
								</button>
							</div>
						</div>
					</div>
					<div className="bg-white tablet:grid tablet:grid-cols-3">
						<div className="tablet:col-start-3">
							<img
								className="w-full tablet:hidden"
								src={designed_for_everyone}
							/>
							<img
								className="w-full hidden tablet:block"
								src={designed_for_everyone_mid}
							/>
						</div>
						<div className="tablet:flex tablet:flex-col tablet:justify-center tablet:col-start-1 tablet:row-start-1 tablet:col-end-3 text-black bg-white pt-[4.5rem] pr-[1.5rem] pb-[4.5rem] pl-[2.063rem] tablet:px-[50px]">
							<h2 className="pr-[3.5rem] text-[32px] tablet:text-[40px] font-bold leading-[40px] tablet:leading-[48px] tracking-[3.333px] tablet:tracking-[4.167px] uppercase">
								DESIGNED FOR EVERYONE
							</h2>
							<p className="mt-[1rem] mb-[1.438rem] tablet:mt-[21px] tablet:mb-[48px] text-black font-[15px] leading-[25px] opacity-[0.6]">
								Photosnap can help you create stories that resonate with your
								audience. Our tool is designed for photographers of all levels,
								brands, businesses you name it.
							</p>
							<div className="btn-two-box">
								<button className="btn-two">
									VIEW THE STORIES
									<img className="" src={arrow} />
								</button>
							</div>
						</div>
					</div>
					{/*card three*/}

					{/*sub cards*/}
					<div className="tablet:grid tablet:grid-cols-2">
						{/*one*/}
						<div className="relative">
							<img src={mountain} className="w-full tablet:hidden"></img>
							<img src={mountain_mid} className="w-full hidden tablet:block " />
							<div className="w-full absolute pr-[2rem] pl-[2rem] top-[70%] left-[10%] translate-x-[-10%] translate-y-[-10%]">
								<p className="text-white text-[18px] font-bold leading-[25px]">
									The Mountains
								</p>
								<p className="text-white text-[13px]">by John Appleseed</p>
								<div className="line bg-white"> </div>
								<div className="btn-two-box">
									<button className="btn-two-light">
										READ STORY
										<img className="arrow-img-light" src={arrow} />
									</button>
								</div>
							</div>
						</div>
						{/*two*/}
						<div className="relative">
							<img src={cityscapes} className="w-full tablet:hidden"></img>
							<img
								src={cityscapes_mid}
								className="w-full hidden tablet:block"
							></img>
							<div className="w-full absolute pr-[2rem] pl-[2rem] top-[70%] left-[10%] translate-x-[-10%] translate-y-[-10%]">
								<p className="text-white text-[18px] font-bold leading-[25px]">
									Sunset Cityscapes
								</p>
								<p className="text-white text-[13px]">by Benjamin Cruz</p>
								<div className="line bg-white"> </div>
								<div className="btn-two-box">
									<button className="btn-two-light">
										READ STORY
										<img className="arrow-img-light" src={arrow} />
									</button>
								</div>
							</div>
						</div>
						{/*three*/}
						<div className="relative">
							<img src={daysvoyage} className="w-full tablet:hidden"></img>
							<img
								src={daysvoyage_mid}
								className="w-full hidden tablet:block"
							></img>
							<div className="w-full absolute pr-[2rem] pl-[2rem] top-[70%] left-[10%] translate-x-[-10%] translate-y-[-10%]">
								<p className="text-white text-[18px] font-bold leading-[25px]">
									18 Days Voyage
								</p>
								<p className="text-white text-[13px]">by Alexei Borodin</p>
								<div className="line bg-white"> </div>
								<div className="btn-two-box">
									<button className="btn-two-light">
										READ STORY
										<img className="arrow-img-light" src={arrow} />
									</button>
								</div>
							</div>
						</div>
						{/*four*/}
						<div className="relative">
							<img src={architecturals} className="w-full tablet:hidden"></img>
							<img
								src={architecturals_mid}
								className="w-full hidden tablet:block"
							></img>
							<div className="w-full absolute pr-[2rem] pl-[2rem] top-[70%] left-[10%] translate-x-[-10%] translate-y-[-10%]">
								<p className="sub-card-title">Architecturals</p>
								<p className="sub-card-author">by Samantha Brooke</p>
								<div className="line bg-white"> </div>
								<div className="btn-two-box">
									<button className="btn-two-light">
										READ STORY
										<img className="arrow-img-light" src={arrow} />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="pb-[5rem] px-[2rem] tablet:pt-[50px] tablet:px-[150px]">
						<div className="card-details">
							<img src={responsive}></img>
							<h3 className="heading">100% Responsive</h3>
							<p className="para">
								No matter which the device you’re on, our site is fully
								responsive and stories look beautiful on any screen.
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
				</main>
			</div>
		</>
	);
}
