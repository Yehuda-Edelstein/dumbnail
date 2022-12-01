import React from "react";
import About from "./about";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./style.index.scss";
import YouTube from "./youtube";

function Main() {
  return (
    <div className="main">
      <div className="create">
        <div className="content-container">
          <Tabs
            defaultActiveKey="youtube"
            id="uncontrolled-tab-example"
            className=""
          >
            <Tab eventKey="youtube" title="YouTube">
              <YouTube />
            </Tab>
            {/* <Tab eventKey="twitter" title="Twitter">
              twitter
            </Tab> */}
            <Tab eventKey="about" title="About">
              <About />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Main;
