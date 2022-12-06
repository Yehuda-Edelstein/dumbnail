import React, { useState } from "react";
import MessagePreview from "./preview/MessagePreview";
import MessageUpload from "./upload/MessageUpload";

function Message(props) {
  const [contact, setContact] = useState("them");
  const [messages, setMessages] = useState([
    { id: 1, from: "you", msg: "U up?" },
    { id: 2, from: "them", msg: "no" },
  ]);
  return (
    <div className="d-grid">
      <div>
        <MessageUpload
          messages={messages}
          setMessages={setMessages}
          contact={contact}
        />
      </div>
      <div>
        <MessagePreview messages={messages} />
      </div>
    </div>
  );
}

export default Message;
