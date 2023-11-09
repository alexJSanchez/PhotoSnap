import logo from "./assets/shared/desktop/logo.svg";
import mobile_menu from "./assets/shared/mobile/menu.svg";
import create_and_share from "./assets/home/mobile/create-and-share.jpg";
import arrow from "./assets/shared/desktop/arrow.svg";
import beautiful_stories from "./assets/home/mobile/beautiful-stories.jpg";
import designed_for_everyone from "./assets/home/mobile/designed-for-everyone.jpg";
import responsive from "./assets/features/desktop/responsive.svg";
import infinite from "./assets/features/desktop/no-limit.svg";
import bullhorn from "./assets/features/desktop/embed.svg";
import facebook from "./assets/shared/desktop/facebook.svg";
import youtube from "./assets/shared/desktop/youtube.svg";
import twitter from "./assets/shared/desktop/twitter.svg";
import pinterest from "./assets/shared/desktop/pinterest.svg";
import instagram from "./assets/shared/desktop/instagram.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<nav>
				<div className="nav-left">
					<img src={logo} />
				</div>
				<div className="nav-right">
					<img src={mobile_menu} />
				</div>
			</nav>
			<main>
				{/*card one*/}
				<div className="main-card">
					<div className="main-card-top">
						<img className="w100" src={create_and_share} />
					</div>
					<div className="main-card-bottom-boommark"></div>
					<div className="main-card-bottom">
						<h2>Create and share your photo Stories. </h2>
						<p>
							Photosnap is a platform for photographers and visual storytellers.
							We make it easy to share photos, tell stories and connect with
							others.
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
				<div className="bg-white">
					<div className="main-card-top">
						<img className="w100" src={beautiful_stories} />
					</div>
					<div className="main-card-bottom-light">
						<h2 className="p3">BEAUTIFUL STORIES EVERY TIME</h2>
						<p>
							We provide design templates to ensure your stories look terrific.
							Easily add photos, text, embed maps and media from other networks.
							Then share your story with everyone.
						</p>
						<div className="btn-two-box">
							<button className="btn-two">
								Get An Invite
								<img className="" src={arrow} />
							</button>
						</div>
					</div>
				</div>
				{/*card three*/}
				<div className="bg-white">
					<div className="main-card-top">
						<img className="w100" src={designed_for_everyone} />
					</div>
					<div className="main-card-bottom-light">
						<h2 className="">DESIGNED FOR EVERYONE</h2>
						<p className="p2">
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
				{/*sub cards*/}
				<div className="sub-card">
					{/*one*/}
					<div className="one">
						<p className="sub-card-title">The Mountains</p>
						<p className="sub-card-author">by John Appleseed</p>
						<div className="line"> </div>
						<div className="btn-two-box">
							<button className="btn-two-light">
								READ STORY
								<img className="arrow-img-light" src={arrow} />
							</button>
						</div>
					</div>
					{/*two*/}
					<div className="two">
						<p className="sub-card-title">Sunset Cityscapes</p>
						<p className="sub-card-author">by Benjamin Cruz</p>
						<div className="line"> </div>
						<div className="btn-two-box">
							<button className="btn-two-light">
								READ STORY
								<img className="arrow-img-light" src={arrow} />
							</button>
						</div>
					</div>
					{/*three*/}
					<div className="three">
						<p className="sub-card-title">18 Days Voyage</p>
						<p className="sub-card-author">by Alexei Borodin</p>
						<div className="line"> </div>
						<div className="btn-two-box">
							<button className="btn-two-light">
								READ STORY
								<img className="arrow-img-light" src={arrow} />
							</button>
						</div>
					</div>
					<div className="four">
						<p className="sub-card-title">Architecturals</p>
						<p className="sub-card-author">by Samantha Brooke</p>
						<div className="line"> </div>
						<div className="btn-two-box">
							<button className="btn-two-light">
								READ STORY
								<img className="arrow-img-light" src={arrow} />
							</button>
						</div>
					</div>
				</div>
				<div className="details-card">
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
			</main>
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
		</div>
	);
}

export default App;
