import React from "react";

import logo from "../assets/shared/desktop/logo.svg";
import mobile_menu from "../assets/shared/mobile/menu.svg";
import create_and_share from "../assets/home/mobile/create-and-share.jpg";
import arrow from "../assets/shared/desktop/arrow.svg";
import beautiful_stories from "../assets/home/mobile/beautiful-stories.jpg";
import designed_for_everyone from "../assets/home/mobile/designed-for-everyone.jpg";
import responsive from "../assets/features/desktop/responsive.svg";
import infinite from "../assets/features/desktop/no-limit.svg";
import bullhorn from "../assets/features/desktop/embed.svg";
import facebook from "../assets/shared/desktop/facebook.svg";
import youtube from "../assets/shared/desktop/youtube.svg";
import twitter from "../assets/shared/desktop/twitter.svg";
import pinterest from "../assets/shared/desktop/pinterest.svg";
import instagram from "../assets/shared/desktop/instagram.svg";
import mountain from "../assets/stories/mobile/mountains.jpg";
import cityscapes from "../assets/stories/mobile/cityscapes.jpg";
import daysvoyage from "../assets/stories/mobile/18-days-voyage.jpg";
import architecturals from "../assets/stories/mobile/architecturals.jpg";
export default function Home() {
  return (
    <>
      <div className="App">
        <main>
          {/*card one*/}
          <div id="main-card" className="bg-black">
            <div id="main-card-top">
              <img
                id="main-card-top-image"
                className="w-full"
                src={create_and_share}
                alt="man on mountain"
              />
            </div>
            <div className="main-card-bottom-boommark"></div>
            <div className="main-card-bottom">
              <h2>Create and share your photo Stories. </h2>
              <p>
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
          <div className="bg-white">
            <div className="main-card-top">
              <img className="w100" src={beautiful_stories} />
            </div>
            <div className="main-card-bottom-light">
              <h2 className="p3">BEAUTIFUL STORIES EVERY TIME</h2>
              <p>
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
            <div className="relative">
              <img src={mountain} className="w-full"></img>
              <div className="w-full absolute pr-[2rem] pl-[2rem] top-[70%] left-[10%] translate-x-[-10%] translate-y-[-10%]">
                <p className="sub-card-title">The Mountains</p>
                <p className="sub-card-author">by John Appleseed</p>
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
              <img src={cityscapes} className="w-full"></img>
              <div className="w-full absolute pr-[2rem] pl-[2rem] top-[70%] left-[10%] translate-x-[-10%] translate-y-[-10%]">
                <p className="sub-card-title">Sunset Cityscapes</p>
                <p className="sub-card-author">by Benjamin Cruz</p>
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
              <img src={daysvoyage} className="w-full"></img>
              <div className="w-full absolute pr-[2rem] pl-[2rem] top-[70%] left-[10%] translate-x-[-10%] translate-y-[-10%]">
                <p className="sub-card-title">18 Days Voyage</p>
                <p className="sub-card-author">by Alexei Borodin</p>
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
              <img src={architecturals} className="w-full"></img>
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
          <div className="details-card">
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
