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
// import Ad from "./ad/Ad";

function Main({ setPath }) {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home setPath={setPath} />} />
        <Route path="/youtube" element={<YouTube />} />
        <Route path="/twitter" element={<Twitter />} />
        <Route path="/messages" element={<Message />} />
        {/* <Route path="/instagram" element={<Instagram />} /> */}
        <Route path="/chatGPT" element={<ChatGPT />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <div>
        <Ad />
      </div> */}
    </div>
  );
}

export default Main;
