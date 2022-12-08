import React, { useState } from "react";
import MessagePreview from "./preview/MessagePreview";
import MessageUpload from "./upload/MessageUpload";

function Message(props) {
  const [contact, setContact] = useState("Contact");
  // need to add boolean for last message in group from same person
  const [messages, setMessages] = useState([
    { id: 0, from: "", day: "Today", time: "1:03", type: "time" },
    { id: 1, from: "you", msg: "U up?", type: "text" },
    { id: 2, from: "contact", msg: "no", type: "text" },
  ]);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="content d-flex p-3 pt-0">
      <div>
        <MessageUpload
          messages={messages}
          setMessages={setMessages}
          contact={contact}
          setContact={setContact}
          setIsActive={setIsActive}
        />
      </div>
      <div>
        <MessagePreview
          messages={messages}
          contact={contact}
          isActive={isActive}
        />
      </div>
    </div>
  );
}

export default Message;
