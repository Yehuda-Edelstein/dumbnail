import "./App.scss";
import Header from "./components/header";
import Main from "./components/main/Main";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
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
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faTrash,
  faMagnifyingGlassPlus,
  faMagnifyingGlassMinus,
  faRotateLeft,
  faUpload,
  faEllipsisVertical,
  faEllipsis,
  faChevronRight,
  faChevronLeft
);

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
