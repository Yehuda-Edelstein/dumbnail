import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import YouTube from "./../youtube/YouTube";
import Twitter from "./../twitter/Twitter";
import Message from "./../message/Message";
import About from "./../about/About";
// import Ad from "./ad/Ad";
import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <div className="content-container">
        <Tabs
          defaultActiveKey="youtube"
          id="uncontrolled-tab-example"
          className=""
        >
          <Tab eventKey="youtube" title="YouTube">
            <YouTube />
          </Tab>
          <Tab eventKey="twitter" title="Twitter">
            <Twitter />
          </Tab>
          <Tab eventKey="message" title="iMessage">
            <Message />
            {/* <Ad dataAdSlot="9875745235" /> */}
          </Tab>
          <Tab eventKey="about" title="About">
            <About />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Home;
