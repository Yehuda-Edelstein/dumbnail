import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MessageUpload.scss";
import you from "./../../../assets/images/message/you-btn.png";
import them from "./../../../assets/images/message/them.png";
import { convertToHTMLTime } from "../../../helpers/DateTimeHelpers";
import {
  deleteMessage,
  newTextMessage,
  updateMessage,
} from "../../../helpers/MessageHelpers";

function MessageUpload({ messages, setMessages, contact, setContact }) {
  // maybe make these helper functions
  function updateContact(old, current) {
    const arr = [...messages];
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].from === old) {
        messages[i].from = current;
      }
    }
    setContact(current);
    setMessages(arr);
  }

  function addStatus() {
    const arr = [...messages];
    const n = { id: arr.length, from: "", msg: "Delivered", type: "status" };
    arr.push(n);
    setMessages(arr);
  }

  function addTime() {
    const arr = [...messages];
    const d = new Date();
    const t =
      d.getMinutes() < 10
        ? `${d.getHours()}:0${d.getMinutes()}`
        : `${d.getHours()}:${d.getMinutes()}`;
    const n = {
      id: arr.length,
      from: "",
      day: "Today",
      time: t,
      type: "time",
    };
    arr.push(n);
    setMessages(arr);
  }

  return (
    <div className="upload-container">
      <div className="upload-container-header">
        <h5>Convo</h5>
      </div>
      <div className="d-flex">
        <input
          className="message-contact"
          type="text"
          placeholder="Contact..."
          onChange={(ev) => {
            updateContact(contact, ev.target.value);
          }}
        />
      </div>
      <div className="upload-container-body">
        <div className="message-container messages">
          {messages.map((m) => {
            return m.type === "text" ? (
              <div className="message" key={m.id}>
                <textarea
                  rows="1"
                  placeholder={m.msg ? `${m.msg}` : "Message..."}
                  onChange={(ev) => {
                    setMessages(
                      updateMessage(m.id, "msg", ev.target.value, messages)
                    );
                  }}
                ></textarea>
                <div className="message-buttons-container">
                  <img
                    className={
                      m.from === contact
                        ? "change-them-btn active"
                        : "change-them-btn"
                    }
                    src={them}
                    alt=""
                    onClick={() => {
                      setMessages(
                        updateMessage(m.id, "from", contact, messages)
                      );
                    }}
                  />
                  <img
                    className={
                      m.from === "you"
                        ? "change-them-btn active"
                        : "change-them-btn"
                    }
                    src={you}
                    alt=""
                    onClick={(ev) => {
                      setMessages(updateMessage(m.id, "from", "you", messages));
                    }}
                  />
                  <FontAwesomeIcon
                    onClick={() => setMessages(deleteMessage(m.id, messages))}
                    key={m.id}
                    className="delete-message"
                    icon={["fa", "trash"]}
                  />
                </div>
              </div>
            ) : (
              <div key={m.id}>
                {m.type === "time" ? (
                  <div className="d-grid">
                    {/* <label>Time</label> */}
                    <div className="message">
                      <select
                        className="day-select"
                        value={m.day}
                        onChange={(ev) => {
                          setMessages(
                            updateMessage(
                              m.id,
                              "day",
                              ev.target.value,
                              messages
                            )
                          );
                        }}
                      >
                        <option value="Today">Today</option>
                        <option value="Yesterday">Yesterday</option>
                        <option value="Sunday">Sunday</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        {/* <option>Shabbos</option> */}
                      </select>
                      {/* option for 24 hour time */}
                      <input
                        type="time"
                        value={convertToHTMLTime(m.time)}
                        onChange={(ev) => {
                          setMessages(
                            updateMessage(
                              m.id,
                              "time",
                              ev.target.value,
                              messages
                            )
                          );
                        }}
                      />
                      <div className="message-buttons-container">
                        <FontAwesomeIcon
                          onClick={() => {
                            setMessages(deleteMessage(m.id, messages));
                          }}
                          key={m.id}
                          className="delete-message"
                          icon={["fa", "trash"]}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={m.id} className="message justify-content-between">
                    <div className="delivered">Delivered</div>
                    <div className="message-buttons-container">
                      <FontAwesomeIcon
                        onClick={() => {
                          setMessages(deleteMessage(m.id, messages));
                        }}
                        key={m.id}
                        className="delete-message"
                        icon={["fa", "trash"]}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="new-message-container d-flex">
        <div className="new-messages">
          <div
            className="new-message"
            onClick={() => {
              setMessages(newTextMessage(messages));
            }}
          >
            +Message
          </div>
          <div className="d-flex justify-content-between">
            <div className="new-delivered" onClick={addStatus}>
              +Delivered
            </div>
            <div className="new-time" onClick={addTime}>
              +Time
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageUpload;
