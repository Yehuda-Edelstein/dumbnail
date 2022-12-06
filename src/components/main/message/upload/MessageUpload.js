import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback } from "react";

function MessageUpload({ messages, setMessages, contact }) {
  const updateMessage = (id, message) => {
    const arr = [...messages];
    const i = messages.findIndex((x) => x.id === id);
    arr[i].msg = message;
    setMessages(arr);
  };

  const updateFrom = useCallback(
    (id, from) => {
      const arr = [...messages];
      const i = messages.findIndex((x) => x.id === id);
      arr[i].from = from;
      setMessages(arr);
    },
    [messages]
  );

  return (
    <div>
      {messages.map((message) => {
        return (
          <div className="d-flex" key={message.id}>
            <textarea
              value={message.msg}
              onChange={(ev) => {
                updateMessage(message.id, ev.target.value);
              }}
            ></textarea>

            <select
              onChange={(ev) => {
                updateFrom(message.id, ev.target.value);
              }}
            >
              <option value="you">you</option>
              <option value={contact}>{contact}</option>
            </select>
          </div>
        );
      })}
    </div>
  );
}

export default MessageUpload;
