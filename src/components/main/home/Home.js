import React from "react";
// import Ad from "./ad/Ad";
import "./Home.scss";
import youtube from "../../../static/examples/youtube.png";
import twitter from "../../../static/examples/twitter.png";
import message from "../../../static/examples/message.png";
import chat from "../../../static/examples/chat.png";
import post from "../../../static/examples/post.png";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Home({ setPath }) {
  return (
    <div className="home">
      <h1>
        The Ultimate{" "}
        <a
          href="https://www.urbandictionary.com/define.php?term=memeshot"
          rel="noreferrer"
          target="_blank"
          className="memeshot"
        >
          Memeshot
        </a>{" "}
        Maker
      </h1>
      <h5>Let the games begin.</h5>
      <div className="examples-grid">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 400: 2, 650: 3 }}>
          <Masonry>
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              className="example-link"
              to="content/thumbnail"
              onClick={() => {
                setPath({ icon: ["fa-brands", "youtube"], path: "YouTube" });
              }}
            >
              <div className="example">
                <div className="example-content">
                  <div
                    className="example-title"
                    style={{ backgroundColor: "rgba(255, 0, 0, 0.25)" }}
                  >
                    Thumbnail
                  </div>
                  <div className=" d-grid">
                    <img src={youtube} alt="" />
                    {/* <div className="example-text">
                {" "}
                Design a fictional YouTube video. Choose from one of our
                templates or get creative.
              </div> */}
                  </div>
                </div>
              </div>
            </Link>
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              className="example-link"
              to="content/tweet"
              onClick={() => {
                setPath({ icon: ["fa-brands", "twitter"], path: "Twitter" });
              }}
            >
              <div className="example">
                <div className="example-content">
                  <div
                    className="example-title"
                    style={{
                      backgroundColor: "rgba(29, 155, 240, 0.25)",
                    }}
                  >
                    Tweet
                  </div>
                  <div className="d-grid">
                    <img src={twitter} alt="" />
                    {/* <div className="example-text">
              Create a fake tweet from a famous celebrity.
            </div> */}
                  </div>
                </div>
              </div>
            </Link>
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              className="example-link"
              to="messaging/iMessage"
              onClick={() => {
                setPath({ icon: ["fa", "comment"], path: "iMessage" });
              }}
            >
              <div className="example">
                <div className="example-content">
                  <div
                    className="example-title"
                    style={{ backgroundColor: "rgba(28, 138, 254, 0.25)" }}
                  >
                    iMessage
                  </div>
                  <div className="d-grid">
                    <img src={message} alt="" />
                    {/* <div className="example-text">
              {" "}
              Craft an amusing conversation between yourself and any contact.
            </div> */}
                  </div>
                </div>
              </div>
            </Link>
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              className="example-link"
              to="messaging/chatGPT"
              onClick={() => {
                setPath({
                  icon: null,
                  path: "ChatGPT",
                  img: "chatGPT/icon.png",
                });
              }}
            >
              <div className="example">
                <div className="example-content">
                  <div
                    className="example-title"
                    style={{ backgroundColor: "rgba(16, 163, 127, .25)" }}
                  >
                    ChatGPT
                  </div>

                  <div className="d-grid">
                    <img src={chat} alt="" />
                  </div>
                  {/* <div className="example-text">
              {" "}
              Prove that humans are smarter than machines, but dumb enough to
              fall for this.
            </div> */}
                </div>
              </div>
            </Link>
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              className="example-link"
              to="content/post"
              onClick={() => {
                setPath({
                  icon: ["fa-brands", "instagram"],
                  path: "Post",
                });
              }}
            >
              <div className="example">
                <div className="example-content">
                  <div
                    className="example-title"
                    style={{ backgroundColor: "rgba(193, 53, 132, .25)" }}
                  >
                    Post
                  </div>

                  <div className="d-grid">
                    <img src={post} alt="" />
                  </div>
                  {/* <div className="example-text">
              {" "}
              Post tooltip thingy
            </div> */}
                </div>
              </div>
            </Link>
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}

export default Home;
