import React, { useState } from "react";
import MessagePreview from "./preview/MessagePreview";
import MessageUpload from "./upload/MessageUpload";
import "./Message.scss";

function Message(props) {
  const [contact, setContact] = useState("Contact");
  // need to add boolean for last message in group from same person
  const [messages, setMessages] = useState([
    { id: 0, from: "", day: "Today", time: "1:03", type: "time" },
    { id: 1, from: "you", msg: "U up?", type: "text" },
    { id: 2, from: "Contact", msg: "no", type: "text" },
  ]);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="main-content">
      <MessageUpload
        messages={messages}
        setMessages={setMessages}
        contact={contact}
        setContact={setContact}
        setIsActive={setIsActive}
      />

      <MessagePreview
        messages={messages}
        contact={contact}
        isActive={isActive}
      />
    </div>
  );
}

export default Message;
