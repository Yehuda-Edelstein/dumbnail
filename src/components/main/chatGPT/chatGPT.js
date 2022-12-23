import React, { useState } from "react";
import Chat from "./chat/Chat";
import Preview from "./preview/Preview";
import "./chatGPT.scss";

function ChatGPT(props) {
  const random = Math.floor(Math.random() * 16777215).toString(16);
  //   const [image, setImage] = useState();
  //   const [isImage, setIsImage] = useState();
  const [initial, setInitial] = useState("Y");
  const [color, setColor] = useState("#" + random);
  const [messages, setMessages] = useState([
    { id: 0, from: initial, msg: "is AI getting too powerful?" },
    { id: 1, from: "GPT", msg: "Shut up, nerd." },
  ]);

  return (
    <div className="main-content">
      <Chat
        initial={initial}
        setInitial={setInitial}
        color={color}
        setColor={setColor}
        messages={messages}
        setMessages={setMessages}
      />
      <Preview initial={initial} color={color} messages={messages} />
    </div>
  );
}

export default ChatGPT;
