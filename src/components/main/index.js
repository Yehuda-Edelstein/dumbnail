import React from "react";
import Create from "./create";
import About from "./about";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./style.index.scss";

function Main() {
  return (
    <div className="main">
      <div className="create">
        <div className="content-container">
          <Tabs
            defaultActiveKey="create"
            id="uncontrolled-tab-example"
            className=""
          >
            <Tab eventKey="create" title="Create">
              <Create />
            </Tab>
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
