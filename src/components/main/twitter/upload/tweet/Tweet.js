import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Tweet.scss";

const d = new Date();
const today =
  d.getDate() < 10
    ? `${d.getFullYear()}-${d.getMonth() + 1}-0${d.getDate()}`
    : `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

const time = `${d.getHours()}:${d.getMinutes()}`;

function Tweet({
  setName,
  setHandle,
  verified,
  setVerified,
  setTweet,
  setDevice,
  setIsActive,
  setTime,
  setDate,
}) {
  const [picker, setPicker] = useState(today);
  const [timepicker, setTimepicker] = useState(time);

  function underscore(str) {
    let noSpaces = str.replace(/ /g, "_");
    return noSpaces.replace(/[^a-zA-Z0-9_]/g, "");
  }

  function format(d) {
    let arr = d.toString().split("-");
    let month = arr[1].replace(/0/g, "");
    let day = arr[2].replace(/0/g, "");
    let year = arr[0].slice(2);
    setDate(`${month}/${day}/${year}`);
  }

  // function hashtags(str) {}

  return (
    <div className="tweet-container">
      <div className="tweet-header">
        <h5>Tweet</h5>
      </div>
      <div className="tweet-content">
        <div className="d-flex">
          <div className="twitter-input-container d-grid">
            <input
              placeholder="Name..."
              // className="twitter-name"
              onChange={(ev) => {
                setName(ev.target.value);
              }}
              maxLength="37"
            ></input>
          </div>
          <div className="d-grid">
            {" "}
            <Form.Check
              className="twitter-verified"
              aria-label="option 1"
              checked={verified}
              onChange={() => {
                setVerified(!verified);
              }}
            />
          </div>
        </div>
        <div className="twitter-input-container d-grid">
          <input
            placeholder="Handle..."
            className="twitter-input"
            onChange={(ev) => {
              setIsActive(true);
              setHandle(underscore(ev.target.value));
              // maybe have an option to turn this ^ off
            }}
            maxLength="15"
          ></input>
        </div>
        <div className="twitter-input-container d-grid">
          <textarea
            placeholder="Tweet..."
            onChange={(ev) => {
              setIsActive(true);
              setTweet(ev.target.value);
            }}
            maxLength="280"
          ></textarea>
        </div>
        <div className="tweet-details-container">
          <div className="twitter-input-container d-grid">
            <label>Time</label>
            <input
              className="twitter-timepicker"
              type="time"
              onChange={(ev) => {
                setIsActive(true);
                setTimepicker(ev.target.value);
                setTime(ev.target.value);
              }}
              value={timepicker}
            />
          </div>
          <div className="twitter-input-container d-grid">
            {" "}
            <label>Date</label>
            <input
              className="twitter-date-input"
              type="date"
              value={picker}
              onChange={(ev) => {
                setIsActive(true);
                setPicker(ev.target.value);
                format(ev.target.value);
              }}
            ></input>
          </div>
          <div className="twitter-input-container d-grid">
            <label>Device</label>
            <select
              className="twitter-select"
              onChange={(ev) => {
                setIsActive(true);
                setDevice(ev.target.value);
              }}
            >
              <option value="Twitter For iPhone">iPhone</option>
              <option value="Twitter Web App">Web</option>
            </select>
          </div>
        </div>
        <div className="d-flex"></div>
      </div>
    </div>
  );
}

export default Tweet;
