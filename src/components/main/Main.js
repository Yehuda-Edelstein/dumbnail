import React from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "../main/home/Home";
import YouTube from "../youtube/YouTube";
import Twitter from "../twitter/Twitter";
import Message from "../main/message/Message";
import About from "../main/about/About";
import Home from "./home/Home";
import Instagram from "./instagram/Instagram";
import ChatGPT from "./chatGPT/chatGPT";
import Tinder from "./tinder/Tinder";
import "./Main.scss";

function Main({ setPath }) {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home setPath={setPath} />} />
        <Route path="/content/thumbnail" element={<YouTube />} />
        <Route path="/content/tweet" element={<Twitter />} />
        <Route path="/content/post" element={<Instagram />} />
        <Route path="/messaging/iMessage" element={<Message />} />
        <Route path="/messaging/tinder" element={<Tinder />} />
        <Route path="/messaging/chatGPT" element={<ChatGPT />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Main;
