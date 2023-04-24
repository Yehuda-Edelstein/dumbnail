import React, { useState, useEffect } from "react";
import MessagePreview from "./preview/MessagePreview";
import MessageUpload from "./upload/MessageUpload";
import "./Message.scss";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

function Message(props) {
  const [contact, setContact] = useState("Contact");
  // need to add boolean for last message in group from same person
  const [messages, setMessages] = useState([
    { id: 0, from: "", day: "Today", time: "1:03", type: "time" },
    { id: 1, from: "you", msg: "U up?", type: "text" },
    { id: 2, from: "Contact", msg: "no", type: "text" },
  ]);

  // track analytics
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname);
  }, [location]);
  return (
    <div className="main-components">
      <div className="upload-message-container">
        <MessageUpload
          messages={messages}
          setMessages={setMessages}
          contact={contact}
          setContact={setContact}
        />
      </div>
      <MessagePreview messages={messages} contact={contact} />
    </div>
  );
}

export default Message;
