import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "./../../static/logo.png";
import small from "./../../static/small-screen-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gpt from "../../static/chatGPT/icon.png";

function Header({ path, setPath, show, setShow, handleShow }) {
  useEffect(() => {
    let w = window.location.pathname;
    if (w === "/") {
      setPath({ icon: ["fa", "home"], path: "Home", img: null });
    }
    if (w === "/youtube") {
      setPath({ icon: ["fa-brands", "youtube"], path: "YouTube", img: null });
    }
    if (w === "/twitter") {
      setPath({ icon: ["fa-brands", "twitter"], path: "Twitter", img: null });
    }
    if (w === "/messages") {
      setPath({ icon: ["fa", "comment"], path: "iMessage", img: null });
    }
    // if (w === "/instagram") {
    //   setPath({ icon:x ["fa-brands", "instagram"], path: "Instagram" });
    // }
    if (w === "/chatGPT") {
      setPath({ icon: null, path: "ChatGPT", img: "chatGPT/icon.png" });
    }
    if (w === "/about") {
      setPath({ icon: null, path: "About", img: null });
    }
  }, []);

  return (
    <div className="header">
      <div>
        <Link
          to="/"
          onClick={() => {
            setShow(false);
            setPath({ icon: ["fa", "home"], path: "Home" });
          }}
        >
          <img className="logo" src={logo} width="200" alt="" />
          <img className="small-screen-logo" src={small} width="200" alt="" />
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
                  src={require(`../../static/${path.img}`)}
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
                <label>LAYOUTS</label>
                <Link
                  to="youtube"
                  onClick={() => {
                    handleShow();
                    setPath({
                      icon: ["fa-brands", "youtube"],
                      path: "YouTube",
                      img: null,
                    });
                  }}
                  className="dumbnail-header-nav-link"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={["fa-brands", "youtube"]}
                  />
                  <div>YouTube</div>
                </Link>
                <Link
                  to="twitter"
                  onClick={() => {
                    handleShow();
                    setPath({
                      icon: ["fa-brands", "twitter"],
                      path: "Twitter",
                      img: null,
                    });
                  }}
                  className="dumbnail-header-nav-link"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={["fa-brands", "twitter"]}
                  />
                  <div>Twitter</div>
                </Link>
                <Link
                  to="messages"
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
                  to="instagram"
                  onClick={() => {
                    handleShow();
                    setPath({
                      icon: ["fa-brands", "instagram"],
                      path: "Instagram",
                    });
                  }}
                  className="dumbnail-header-nav-link"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={["fa-brands", "instagram"]}
                  />
                  <div>Instagram</div>
                </Link> */}
                <Link
                  to="chatGPT"
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
