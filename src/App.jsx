import "./App.scss";
import Header from "./components/header/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
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
} from "@fortawesome/free-solid-svg-icons";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";

library.add(
  faHouse,
  faYoutube,
  faTwitter,
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
  faUpload,
  faEllipsisVertical,
  faEllipsis,
  faChevronRight,
  faChevronLeft,
  faChevronDown
);

function App() {
  const [path, setPath] = useState({ icon: ["fa", "home"], path: "Home" });
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
        <Navbar path={path} setPath={setPath} />
        <Main />
      </div>
    </div>
  );
}

export default App;
