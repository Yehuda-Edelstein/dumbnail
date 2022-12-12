import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.scss";

function Navbar({ path, setPath }) {
  const [current, setCurrent] = useState("");
  useEffect(() => {
    setCurrent(window.location.pathname);
  }, []);

  return (
    <div className="dumbnail-nav-container">
      <div className="dumbnail-nav">
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
