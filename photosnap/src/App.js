import logo from "./assets/shared/desktop/logo.svg";
import mobile_menu from "./assets/shared/mobile/menu.svg";
import create_and_share from "./assets/home/mobile/create-and-share.jpg";
import arrow from "./assets/shared/desktop/arrow.svg";
import beautiful_stories from "./assets/home/mobile/beautiful-stories.jpg";
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
				<div className="main-card">
					<div className="main-card-top">
						<img className="create-and-share" src={create_and_share} />
					</div>
					<div className="main-card-bottom-boommark"></div>
					<div className="main-card-bottom">
						<h2>Create and share your photo Stories. </h2>
						<p>
							Photosnap is a platform for photographers and visual storytellers.
							We make it easy to share photos, tell stories and connect with
							others.
						</p>
						<div className="btn-two-box">
							<button className="btn-two">
								Get An Invite
								<img className="arrow-img" src={arrow} />
							</button>
						</div>
					</div>
				</div>
				<div className="main-card-top">
					<img className="create-and-share" src={beautiful_stories} />
				</div>
				<div className="main-card-bottom-boommark"></div>
				<div className="main-card-bottom">
					<h2>Create and share your photo Stories. </h2>
					<p>
						Photosnap is a platform for photographers and visual storytellers.
						We make it easy to share photos, tell stories and connect with
						others.
					</p>
					<div className="btn-two-box">
						<button className="btn-two">
							Get An Invite
							<img className="arrow-img" src={arrow} />
						</button>
					</div>
				</div>
			</main>
			Beautiful stories every time We provide design templates to ensure your
			stories look terrific. Easily add photos, text, embed maps and media from
			other networks. Then share your story with everyone. View the stories
			Designed for everyone Photosnap can help you create stories that resonate
			with your audience. Our tool is designed for photographers of all levels,
			brands, businesses you name it. View the stories The Mountains by John
			Appleseed Read Story Sunset Cityscapes by Benjamin Cruz Read Story 18 Days
			Voyage by Alexei Borodin Read Story Architecturals by Samantha Brooke Read
			Story 100% Responsive No matter which the device you’re on, our site is
			fully responsive and stories look beautiful on any screen. No Photo Upload
			Limit Our tool has no limits on uploads or bandwidth. Freely upload in
			bulk and share all of your stories in one go. Available to Embed Embed
			Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google
			Maps, and more. Home Stories Features Pricing Get an invite Copyright
			2019. All Rights Reserved
		</div>
	);
}

export default App;
