import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "../main/home/Home";
import YouTube from "../main/youtube/YouTube";
import Twitter from "../main/twitter/Twitter";
import Message from "../main/message/Message";
import About from "../main/about/About";
import "./Main.scss";
import Home from "./home/Home";
import Instagram from "./instagram/Instagram";
import ChatGPT from "./chatGPT/chatGPT";
import Tinder from "./tinder/Tinder";
// import Ad from "./ad/Ad";

function Main({ setPath }) {
  return (
    <div className="main">
      {/* <div className="banner">
        <div class="alert alert-warning" role="alert">
          Safari browser not currently supported, switch to Chrome.
        </div>
      </div> */}
      <Routes>
        <Route path="/" element={<Home setPath={setPath} />} />
        <Route path="/content/thumbnail" element={<YouTube />} />
        <Route path="/content/tweet" element={<Twitter />} />
        {/* add LinkedIn and a posts catergory */}
        <Route path="/content/post" element={<Instagram />} />
        <Route path="/messaging/iMessage" element={<Message />} />
        <Route path="/messaging/tinder" element={<Tinder />} />
        <Route path="/messaging/chatGPT" element={<ChatGPT />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <div>
        <Ad />
      </div> */}
    </div>
  );
}

export default Main;
