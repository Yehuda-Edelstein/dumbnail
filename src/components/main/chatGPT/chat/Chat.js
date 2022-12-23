import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ChromePicker } from "react-color";
import logo from "../../../../static/chatGPT/logo.png";
import "./Chat.scss";

function Chat({ initial, setInitial, color, setColor, messages, setMessages }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  function updateMessage(id, message) {
    const arr = [...messages];
    const index = messages.findIndex((x) => x.id === id);
    arr[index].msg = message;
    setMessages(arr);
  }

  function deleteMessage(id) {
    const arr = [...messages];
    const index = messages.findIndex((x) => x.id === id);
    arr.splice(index, 1);
    const update = arr.map((obj, i) => ({ ...obj, id: i }));
    setMessages(update);
  }

  function addMessage() {
    const arr = [...messages];
    if (!arr.length) {
      const n = {
        id: 0,
        from: initial,
        msg: "",
      };
      arr.push(n);
      setMessages(arr);
      return;
    }
    const n = {
      id: arr.length,
      from: messages[arr.length - 1].from === initial ? "GPT" : initial,
      msg: "",
    };
    arr.push(n);
    setMessages(arr);
  }

  function updateFrom(id, from) {
    const arr = [...messages];
    const index = messages.findIndex((x) => x.id === id);
    arr[index].from = from;
    setMessages(arr);
  }

  return (
    <div className="edit-chat-container">
      <div className="edit-chat-header">
        <h5>Chat</h5>
      </div>
      <div className="edit-chat">
        <div>
          <div className="image-info">
            <input
              type="text"
              placeholder="Name..."
              onChange={(ev) => {
                setInitial(ev.target.value.charAt(0).toUpperCase());
              }}
            />
            <div className="color-container" onClick={handleShow}>
              <div className="color" style={{ backgroundColor: color }}>
                {show && (
                  <div className="close">
                    <FontAwesomeIcon icon={["fa", "xmark"]} />
                  </div>
                )}
              </div>
            </div>
          </div>
          {show && (
            <div className="color-picker">
              <ChromePicker
                color={color}
                onChange={(c) => {
                  setColor(c.hex.toString());
                }}
              />
            </div>
          )}
        </div>
        <div className="chat-container">
          {messages.map((m) => {
            return (
              <div className="message" key={m.id}>
                <textarea
                  rows="1"
                  placeholder="Message..."
                  value={m.msg}
                  onChange={(ev) => {
                    updateMessage(m.id, ev.target.value);
                  }}
                ></textarea>
                <div className="message-buttons">
                  <div className="message-from">
                    <div
                      className={m.from === "GPT" ? "from-active" : "from"}
                      onClick={() => {
                        updateFrom(m.id, "GPT");
                      }}
                    >
                      <img src={logo} alt="" className="pic" />
                    </div>
                    <div
                      className={m.from === initial ? "from-active" : "from"}
                      onClick={() => {
                        updateFrom(m.id, initial);
                      }}
                    >
                      <div
                        className="pic"
                        style={{ color: "white", backgroundColor: color }}
                      >
                        <div>{initial}</div>
                      </div>
                    </div>
                  </div>
                  <FontAwesomeIcon
                    onClick={() => deleteMessage(m.id)}
                    key={m.id}
                    className="delete-message"
                    icon={["fa", "trash"]}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="new-message-container">
          <div className="new-message" onClick={addMessage}>
            Add Message
          </div>
        </div>
        <div className="notes">
          <ul>
            <li>
              1. Chat is a max of three prompts and responses. If you want a
              longer conversation you'll need to do it in multiple screenshots
            </li>
            <li>2. Opacity slider on colorpicker does not currently work.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Chat;
