import React from "react";
import Create from "./create";
import About from "./about";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./style.index.scss";

function Main(props) {
  return (
    <div>
      <div className="create">
        <div className="container">
          <Tabs
            defaultActiveKey="create"
            id="uncontrolled-tab-example"
            className="mb-3"
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
