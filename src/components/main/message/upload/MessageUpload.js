import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MessageUpload.scss";

function MessageUpload({
  messages,
  setMessages,
  contact,
  setContact,
  setIsActive,
}) {
  function army(time) {
    let split = time.toString().split(":");
    let hour = split[0].replace(/^0/, "");
    let minute = split[1].split(" ");
    let m = minute[0];
    return hour < 10 ? `0${hour}:${m}` : `${hour}:${m}`;
  }

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

  function updateMessage(id, message) {
    const arr = [...messages];
    const index = messages.findIndex((x) => x.id === id);
    arr[index].msg = message;
    setMessages(arr);
  }

  function updateFrom(id, from) {
    const arr = [...messages];
    const index = messages.findIndex((x) => x.id === id);
    arr[index].from = from;
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
    setIsActive(true);
    const arr = [...messages];
    const n = { id: arr.length, from: "you", msg: "", type: "text" };
    arr.push(n);
    setMessages(arr);
  }

  function addStatus() {
    setIsActive(true);
    const arr = [...messages];
    const n = { id: arr.length, from: "", msg: "Delivered", type: "status" };
    arr.push(n);
    setMessages(arr);
  }

  function addTime() {
    setIsActive(true);
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

  function updateDay(id, day) {
    setIsActive(true);
    const arr = [...messages];
    const index = messages.findIndex((x) => x.id === id);
    arr[index].day = day;
    setMessages(arr);
  }

  function updateTime(id, time) {
    setIsActive(true);
    const arr = [...messages];
    const index = messages.findIndex((x) => x.id === id);
    arr[index].time = time;
    setMessages(arr);
  }

  return (
    <div className="message-upload-container">
      <div className="d-grid">
        <h5>Convo</h5>
        <input
          type="text"
          placeholder="Contact..."
          onChange={(ev) => {
            setIsActive(true);
            updateContact(contact, ev.target.value);
          }}
        />
      </div>
      <div className="message-convo-container">
        <div>
          {messages.map((m) => {
            return m.type === "text" ? (
              <div className="d-flex" key={m.id}>
                <textarea
                  rows="1"
                  placeholder="New Message..."
                  value={m.msg}
                  onChange={(ev) => {
                    updateMessage(m.id, ev.target.value);
                  }}
                ></textarea>
                {m.from === "you" && m.type !== "time" && (
                  <select
                    onChange={(ev) => {
                      updateFrom(m.id, ev.target.value);
                    }}
                  >
                    <option value="you">you</option>
                    <option value={contact}>{contact.match(/[^\s]+/)}</option>
                  </select>
                )}
                {m.from !== "you" && (
                  <select
                    onChange={(ev) => {
                      updateFrom(m.id, ev.target.value);
                    }}
                  >
                    <option value={contact}>{contact.match(/[^\s]+/)}</option>
                    <option value="you">you</option>
                  </select>
                )}

                <FontAwesomeIcon
                  onClick={() => deleteMessage(m.id)}
                  key={m.id}
                  className="delete-message"
                  icon={["fa", "trash"]}
                />
              </div>
            ) : (
              <div key={m.id}>
                {m.type === "time" ? (
                  <div className="d-grid">
                    {/* <label>Time</label> */}
                    <div className="d-flex">
                      <select
                        className="day-select"
                        value={m.day}
                        onChange={(ev) => {
                          setIsActive(true);
                          updateDay(m.id, ev.target.value);
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
                      <input
                        type="time"
                        value={army(m.time)}
                        onChange={(ev) => {
                          setIsActive(true);
                          updateTime(m.id, ev.target.value);
                        }}
                      />
                      <FontAwesomeIcon
                        onClick={() => {
                          setIsActive(true);
                          deleteMessage(m.id);
                        }}
                        key={m.id}
                        className="delete-message"
                        icon={["fa", "trash"]}
                      />
                    </div>
                  </div>
                ) : (
                  <div key={m.id} className="d-flex">
                    <select
                      className="day-select"
                      onChange={(ev) => {
                        updateMessage(m.id, ev.target.value);
                      }}
                    >
                      <option value="Delivered">Delivered</option>
                      {/* <option value="Read">Read</option> */}
                    </select>
                    <FontAwesomeIcon
                      onClick={() => {
                        setIsActive(true);
                        deleteMessage(m.id);
                      }}
                      key={m.id}
                      className="delete-message"
                      icon={["fa", "trash"]}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="new-message-container d-flex">
        <div className="new-messages">
          <div className="new-message" onClick={addMessage}>
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
