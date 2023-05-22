import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faTwitter,
  faYoutube,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faEllipsisVertical,
  faEllipsis,
  faMagnifyingGlassMinus,
  faMagnifyingGlassPlus,
  faRotateLeft,
  faRotateRight,
  faTrash,
  faUpload,
  faChevronRight,
  faChevronLeft,
  faComment,
  faCircleXmark,
  faCheck,
  faCrop,
  faXmark,
  faCircle,
  faChevronDown,
  faPen,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-251706194-1";
ReactGA.initialize(TRACKING_ID);

library.add(
  faBars,
  faPen,
  faHouse,
  faYoutube,
  faGoogle,
  faTwitter,
  faInstagram,
  faComment,
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faCrop,
  faTrash,
  faXmark,
  faCircle,
  faCircleXmark,
  faCheck,
  faMagnifyingGlassPlus,
  faMagnifyingGlassMinus,
  faRotateLeft,
  faRotateRight,
  faUpload,
  faEllipsisVertical,
  faEllipsis,
  faChevronRight,
  faChevronLeft,
  faChevronDown,
  faHeart
);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const [path, setPath] = useState({
    icon: ["fa", "home"],
    path: "Home",
    img: null,
  });
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <div className="App">
      <Header
        path={path}
        setPath={setPath}
        show={show}
        setShow={setShow}
        handleShow={handleShow}
      />
      <div
        className="site"
        onClick={() => {
          setShow(false);
        }}
      >
        <Sidebar path={path} setPath={setPath} />
        <Main setPath={setPath} />
      </div>
    </div>
  );
}

export default App;
