import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "./../../assets/images/site/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gpt from "../../assets/images/chatGPT/icon.png";
// import tinder from "../../assets/images/tinder/icon.png";

function Header({ path, setPath, show, setShow, handleShow }) {
  return (
    <div className="header">
      <div className="logo-container">
        <Link
          to="/"
          onClick={() => {
            setShow(false);
            setPath({ icon: ["fa", "home"], path: "Home" });
          }}
        >
          <img className="logo" src={logo} width="200" alt="" />
        </Link>
      </div>
      <div>
        <div className="dumbnail-header-nav-container">
          <div className="dumbnail-header-dropdown-btn" onClick={handleShow}>
            <div className="current-window">
              {path.icon && (
                <FontAwesomeIcon className="dropdown-icon" icon={path.icon} />
              )}
              {path.img && (
                <img
                  id="dropdown-icon"
                  src={require(`../../assets/images/${path.img}`)}
                  alt=""
                />
              )}
              <div className="current-component">{path.path}</div>
              <FontAwesomeIcon
                className="dropdown-chevron-icon"
                icon={["fa", "chevron-down"]}
              />
            </div>
            {show && (
              <div className="dumbnail-header-nav">
                <Link
                  to="/"
                  onClick={() => {
                    handleShow();
                    setPath({
                      icon: ["fa", "house"],
                      path: "Home",
                      img: null,
                    });
                  }}
                  className="dumbnail-header-nav-link"
                >
                  <FontAwesomeIcon className="icon" icon={["fa", "house"]} />
                  <div>Home</div>
                </Link>
                <label>CONTENT</label>
                <Link
                  to="content/thumbnail"
                  onClick={() => {
                    handleShow();
                    setPath({
                      icon: ["fa-brands", "youtube"],
                      path: "Thumbnail",
                      img: null,
                    });
                  }}
                  className="dumbnail-header-nav-link"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={["fa-brands", "youtube"]}
                  />
                  <div>Thumbnail</div>
                </Link>
                <Link
                  to="content/tweet"
                  onClick={() => {
                    handleShow();
                    setPath({
                      icon: ["fa-brands", "twitter"],
                      path: "Tweet",
                      img: null,
                    });
                  }}
                  className="dumbnail-header-nav-link"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={["fa-brands", "twitter"]}
                  />
                  <div>Tweet</div>
                </Link>
                <Link
                  to="content/post"
                  onClick={() => {
                    handleShow();
                    setPath({
                      icon: ["fa-brands", "instagram"],
                      path: "Post",
                    });
                  }}
                  className="dumbnail-header-nav-link"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={["fa-brands", "instagram"]}
                  />
                  <div>Post</div>
                </Link>
                <label>MESSAGING</label>
                <Link
                  to="messaging/iMessage"
                  onClick={() => {
                    handleShow();
                    setPath({
                      icon: ["fa", "comment"],
                      path: "iMessage",
                      img: null,
                    });
                  }}
                  className="dumbnail-header-nav-link"
                >
                  <FontAwesomeIcon className="icon" icon={["fa", "comment"]} />
                  <div>iMessage</div>
                </Link>
                {/* <Link
                  to="messaging/tinder"
                  onClick={() => {
                    handleShow();
                    setPath({
                      icon: null,
                      path: "Tinder",
                      img: "tinder/icon.png",
                    });
                  }}
                  className="dumbnail-header-nav-link"
                >
                  <img className="icon" src={tinder} alt="" />
                  <div>Tinder</div>
                </Link> */}
                <Link
                  to="messaging/chatGPT"
                  className="dumbnail-header-nav-link"
                  onClick={() => {
                    setPath({
                      icon: null,
                      path: "ChatGPT",
                      img: "chatGPT/icon.png",
                    });
                  }}
                >
                  <img className="icon" src={gpt} alt="" />
                  <div>ChatGPT</div>
                </Link>
                {/* <Link
                  to="messaging/bard"
                  onClick={() => {
                    handleShow();
                    setPath({
                      icon: ["fa-brands", "google"],
                      path: "Bard",
                      img: null,
                    });
                  }}
                  className="dumbnail-header-nav-link"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={["fa-brands", "google"]}
                  />
                  <div>Bard</div>
                </Link> */}
                <Link
                  to="about"
                  onClick={() => {
                    handleShow();
                    setPath({ icon: null, path: "About" });
                  }}
                  className="dumbnail-about-nav-link"
                >
                  <div>About</div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
