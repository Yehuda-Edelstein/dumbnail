import React from "react";
// import Ad from "./ad/Ad";
import "./Home.scss";
import youtube from "../../../static/examples/youtube.png";
import twitter from "../../../static/examples/twitter.png";
import message from "../../../static/examples/message.png";
import { Link } from "react-router-dom";

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
      <br></br>
      <div>
        <div className="d-grid">
          <div className="example-title">YouTube</div>
          <div className="example-pics d-grid">
            <Link
              to="youtube"
              className="dumbnail-nav-link"
              onClick={() => {
                setPath({ icon: ["fa-brands", "youtube"], path: "YouTube" });
              }}
            >
              <img src={youtube} alt="" />
            </Link>
            <div className="example-text">
              {" "}
              Design a fictional YouTube video. Choose from one of our templates
              or get creative.
            </div>
          </div>
        </div>
        <br></br>
        <div>
          <div className="example-title">Twitter</div>
          <div className="example-pics d-grid">
            <Link
              to="twitter"
              className="dumbnail-nav-link"
              onClick={() => {
                setPath({ icon: ["fa-brands", "twitter"], path: "Twitter" });
              }}
            >
              <img src={twitter} alt="" />
            </Link>
            <div className="example-text">
              Create a fake tweet from a famous celebrity.
            </div>
          </div>
        </div>
        <br></br>
        <div>
          <div className="example-title">iMessage</div>
          <div className="example-pics d-grid">
            <Link
              to="messages"
              className="dumbnail-nav-link"
              onClick={() => {
                setPath({ icon: ["fa", "comment"], path: "iMessage" });
              }}
            >
              <img src={message} alt="" />
            </Link>
            <div className="example-text">
              {" "}
              Craft an amusing conversation between yourself and any contact.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
