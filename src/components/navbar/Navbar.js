import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.scss";
import gpt from "../../static/chatGPT/icon.png";
import tinder from "../../static/tinder/icon.png";

function Navbar({ path, setPath }) {
  return (
    <div className="dumbnail-nav-container">
      <div className="dumbnail-nav">
        <Link
          to="/"
          onClick={() => {
            setPath({
              icon: ["fa", "house"],
              path: "Home",
            });
          }}
          className="dumbnail-nav-link"
        >
          <FontAwesomeIcon className="icon" icon={["fa", "house"]} />
          <div>Home</div>
        </Link>
        <label>CONTENT</label>
        <Link
          to="content/thumbnail"
          className="dumbnail-nav-link"
          onClick={() => {
            setPath({ icon: ["fa-brands", "youtube"], path: "Thumbnail" });
          }}
        >
          <FontAwesomeIcon className="icon" icon={["fa-brands", "youtube"]} />
          <div>Thumbnail</div>
        </Link>
        <Link
          to="content/tweet"
          className="dumbnail-nav-link"
          onClick={() => {
            setPath({ icon: ["fa-brands", "twitter"], path: "Tweet" });
          }}
        >
          <FontAwesomeIcon className="icon" icon={["fa-brands", "twitter"]} />
          <div>Tweet</div>
        </Link>
        <Link
          to="content/post"
          className="dumbnail-nav-link"
          onClick={() => {
            setPath({ icon: ["fa-brands", "instagram"], path: "Post" });
          }}
        >
          <FontAwesomeIcon className="icon" icon={["fa-brands", "instagram"]} />
          <div>Post</div>
        </Link>
        <label>MESSAGING</label>
        <Link
          to="messaging/iMessage"
          className="dumbnail-nav-link"
          onClick={() => {
            setPath({ icon: ["fa", "comment"], path: "iMessage" });
          }}
        >
          <FontAwesomeIcon className="icon" icon={["fa", "comment"]} />
          <div>iMessage</div>
        </Link>
        <Link
          to="messaging/tinder"
          className="dumbnail-nav-link"
          onClick={() => {
            setPath({ icon: null, path: "Tinder", img: "tinder/icon.png" });
          }}
        >
          <img className="icon" src={tinder} alt="" />
          <div>Tinder</div>
        </Link>
        <Link
          to="messaging/chatGPT"
          className="dumbnail-nav-link"
          onClick={() => {
            setPath({ icon: null, path: "ChatGPT", img: "chatGPT/icon.png" });
          }}
        >
          <img className="icon" src={gpt} alt="" />
          <div>ChatGPT</div>
        </Link>
      </div>
      <div>
        <Link
          to="about"
          className="about-nav-link"
          onClick={() => {
            setPath({ icon: null, path: "About" });
          }}
        >
          <div>About</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
