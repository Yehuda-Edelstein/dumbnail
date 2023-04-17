import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { ChromePicker } from "react-color";
import { deleteMessage, updateMessage } from "../../../helpers/MessageHelpers";
import Crop from "../../crop/Crop";

function Chat({
  initial,
  setInitial,
  color,
  setColor,
  messages,
  setMessages,
  previewPic,
  picX,
  picY,
  setPicX,
  setPicY,
  setPicZoom,
  picZoom,
  selectedPic,
  setSelectedPic,
}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <div className="upload-container">
      <div className="upload-container-header">
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
                    setMessages(
                      updateMessage(m.id, "msg", ev.target.value, messages)
                    );
                  }}
                ></textarea>
                <div className="message-buttons">
                  <div className="message-from">
                    <div
                      className={m.from === "bard" ? "from-active" : "from"}
                      onClick={() => {
                        setMessages(
                          updateMessage(m.id, "from", "bard", messages)
                        );
                      }}
                    >
                      {/* <img src={logo} alt="" className="pic" /> */}
                    </div>
                    <div
                      className={m.from === initial ? "from-active" : "from"}
                      onClick={() => {
                        setMessages(
                          updateMessage(m.id, "from", initial, messages)
                        );
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
                    onClick={() => setMessages(deleteMessage(m.id, messages))}
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
          {messages.length <= 5 ? (
            <div className="bard-new-message">Add Message</div>
          ) : (
            <div className="inactive">Add Message</div>
          )}
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
