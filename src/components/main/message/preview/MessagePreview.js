import React, { useState, useRef } from "react";
import * as htmlToImage from "html-to-image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Switch from "./../../switch/Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import facetime from "./../../../../static/video-icon.png";
import "./MessagePreview.scss";

function MessagePreview({ messages, contact, isActive }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // switch
  const [switchDevice, setSwitchDevice] = useState(false);

  const messageRef = useRef(null);
  const downloadMessage = async () => {
    try {
      const dataUrl = await htmlToImage.toPng(messageRef.current, {
        // backgroundColor: "white",
      });
      // download image
      const link = document.createElement("a");
      link.download = "message.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.log("Ohhhh nooo!");
      console.log(err);
    }
  };

  function contactImage(str) {
    if (str) {
      const initials = str.match(/\b(\w)/g);
      return initials.join("").match(/[\s\S]{0,2}$/);
    }
  }

  function lastOfYou(id) {
    return (messages[id + 1] &&
      messages[id + 1].from !== "you" &&
      messages[id].msg !== "") ||
      (messages[id] === messages[messages.length - 1] &&
        messages[id].msg !== "")
      ? "last-of-you"
      : "message-from-you";
  }

  function lastOfThem(id) {
    return (messages[id + 1] &&
      messages[id + 1].from !== contact &&
      messages[id].msg !== "") ||
      (messages[id] === messages[messages.length - 1] &&
        messages[id].msg !== "")
      ? "last-of-them"
      : "message-from-them";
  }

  function exact(time) {
    let split = time.toString().split(":");
    let hour = split[0].replace(/^0/, "");
    let post = hour - 12;
    let minute = split[1];
    return hour < 12
      ? `${hour.replace(/^0/, "12")}:${minute} AM`
      : `${post.toString().replace(/^0/, "12")}:${minute} PM`;
  }

  return (
    <div className="message-preview">
      <h5>Preview</h5>
      <div className="message-preview-header">
        <OverlayTrigger
          key={"right"}
          placement={"right"}
          delay={{ show: "700", hide: "100" }}
          overlay={<Tooltip id={"tooltip-right"}>Toggle mode</Tooltip>}
        >
          <div className="switch">
            <Switch
              isOn={switchDevice}
              handleToggle={() => {
                setSwitchDevice(!switchDevice);
                setIsDarkMode(!isDarkMode);
              }}
              bgOn={"rgba(28, 138, 254, .5)"}
              bgOff={"rgba(28, 138, 254, 0.25)"}
            />
          </div>
        </OverlayTrigger>
        {switchDevice ? <h4>[ Dark ]</h4> : <h4>[ Light ]</h4>}
      </div>
      <div className="small-screen-margin">
        <div ref={messageRef} className={switchDevice ? "dark" : "light"}>
          <div className="message-header">
            <div className="d-flex justify-content-between">
              <div>
                {" "}
                <FontAwesomeIcon
                  className="chevron-left"
                  icon={["fa", "chevron-left"]}
                />
              </div>
              <div className="contact-image">
                <span>{contactImage(contact)}</span>
              </div>
              <div>
                <img className="video-icon" src={facetime} alt="" />
              </div>
            </div>
            <div className="contact-container">
              <div className="contact-name">{contact.match(/[^\s]+/)}</div>
              <FontAwesomeIcon
                className="chevron-right"
                icon={["fa", "chevron-right"]}
              />
            </div>
          </div>
          <div className="message-body">
            {messages.map((m) => {
              return (
                <div className="d-grid" key={m.id}>
                  <div className={`message-${m.type}`}>
                    {m.from === "you" && (
                      <div className="d-flex justify-content-end">
                        <div className={lastOfYou(m.id)}>{m.msg}</div>
                        <div className={`${lastOfYou(m.id)}-tail`}></div>
                        <div className={`${lastOfYou(m.id)}-blend`}></div>
                      </div>
                    )}
                    {m.from === contact && (
                      <div>
                        <div className={lastOfThem(m.id)}>{m.msg}</div>
                        <div className={`${lastOfThem(m.id)}-tail`}></div>
                        <div className={`${lastOfThem(m.id)}-blend`}></div>
                      </div>
                    )}
                    {m.type === "time" && (
                      <div className={m.id !== 0 ? "time-not-first" : ""}>
                        <div>
                          <span className="day">{m.day} </span>
                          <span>{exact(m.time)}</span>
                        </div>
                      </div>
                    )}
                    {m.type === "status" && (
                      <div>
                        <div className="message-status">{m.msg}</div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button className="message-download" onClick={downloadMessage}>
        DOWNLOAD
      </button>
    </div>
  );
}

export default MessagePreview;
