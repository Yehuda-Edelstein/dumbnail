import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "./../../static/logo.png";
import small from "./../../static/small-screen-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ path, setPath, show, setShow, handleShow }) {
  useEffect(() => {
    let w = window.location.pathname;
    if (w === "/") {
      setPath({ icon: ["fa", "home"], path: "Home" });
    }
    if (w === "/youtube") {
      setPath({ icon: ["fa-brands", "youtube"], path: "YouTube" });
    }
    if (w === "/twitter") {
      setPath({ icon: ["fa-brands", "twitter"], path: "Twitter" });
    }
    if (w === "/messages") {
      setPath({ icon: ["fa", "comment"], path: "iMessage" });
    }
    if (w === "/about") {
      setPath({ icon: null, path: "About" });
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
                    setPath({ icon: ["fa", "comment"], path: "iMessage" });
                  }}
                  className="dumbnail-header-nav-link"
                >
                  <FontAwesomeIcon className="icon" icon={["fa", "comment"]} />
                  <div>iMessage</div>
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
