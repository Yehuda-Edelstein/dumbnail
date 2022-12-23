import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.scss";
import gpt from "../../static/chatGPT/icon.png";

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
        <label>LAYOUTS</label>
        <Link
          to="youtube"
          className="dumbnail-nav-link"
          onClick={() => {
            setPath({ icon: ["fa-brands", "youtube"], path: "YouTube" });
          }}
        >
          <FontAwesomeIcon className="icon" icon={["fa-brands", "youtube"]} />
          <div>YouTube</div>
        </Link>
        <Link
          to="twitter"
          className="dumbnail-nav-link"
          onClick={() => {
            setPath({ icon: ["fa-brands", "twitter"], path: "Twitter" });
          }}
        >
          <FontAwesomeIcon className="icon" icon={["fa-brands", "twitter"]} />
          <div>Twitter</div>
        </Link>
        <Link
          to="messages"
          className="dumbnail-nav-link"
          onClick={() => {
            setPath({ icon: ["fa", "comment"], path: "iMessage" });
          }}
        >
          <FontAwesomeIcon className="icon" icon={["fa", "comment"]} />
          <div>iMessage</div>
        </Link>
        {/* <Link
          to="instagram"
          className="dumbnail-nav-link"
          onClick={() => {
            setPath({ icon: ["fa-brands", "instagram"], path: "Instagram" });
          }}
        >
          <FontAwesomeIcon className="icon" icon={["fa-brands", "instagram"]} />
          <div>Instagram</div>
        </Link> */}
        <Link
          to="chatGPT"
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
