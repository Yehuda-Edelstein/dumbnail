import React, { useEffect } from "react";

function MessagePreview({ messages, setMessages, contact }) {
  return (
    <div>
      <h4>Preview</h4>
      {messages.map((message) => {
        return (
          <div className="d-grid" key={message.id}>
            {message.from === "you" ? (
              <div>
                <div>{message.msg}</div>
                <div>{message.from}</div>
              </div>
            ) : (
              <div>
                <div>{message.msg}</div>
                <div>{message.from}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MessagePreview;
