import React, { useState } from "react";
import TwitterPopular from "./popular/TwitterPopular";
import Form from "react-bootstrap/Form";
import "./TweetUpload.scss";

const d = new Date();
const today =
  d.getDate() < 10
    ? `${d.getFullYear()}-${d.getMonth() + 1}-0${d.getDate()}`
    : `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

const time = `${d.getHours()}:${d.getMinutes()}`;

function TweetUpload({
  setName,
  setHandle,
  verified,
  setVerified,
  setTweet,
  setDevice,
  setIsActive,
  setTime,
  setDate,
  setIsPopular,
  setPopular,
  setSelectedProf,
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
    <div>
      <div>
        <TwitterPopular
          setIsActive={setIsActive}
          setSelectedProf={setSelectedProf}
          setName={setName}
          setHandle={setHandle}
          setIsPopular={setIsPopular}
          setPopular={setPopular}
        />
      </div>
      <div className="d-flex justify-content-between center">
        <div className="twitter-input-container d-grid">
          <label>Name</label>
          <input
            className="twitter-name"
            onChange={(ev) => {
              setIsActive(true);
              setName(ev.target.value);
            }}
            maxLength="37"
          ></input>
        </div>
        <div className="d-grid">
          {" "}
          <label>Verified</label>
          <Form.Check
            className="twitter-verified"
            aria-label="option 1"
            checked={verified}
            onChange={(ev) => {
              setIsActive(true);
              setVerified(!verified);
            }}
          />
        </div>
      </div>
      <div className="twitter-input-container d-grid">
        <label>Handle</label>
        <input
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
        <label>Tweet</label>
        <textarea
          onChange={(ev) => {
            setIsActive(true);
            setTweet(ev.target.value);
            let key = window.event.keyCode;
            if (key === 13) {
              console.log("hello");
            }
          }}
          maxLength="280"
        ></textarea>
      </div>
      <div className="d-flex justify-content-between">
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
        <div className="d-grid">
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
      </div>
      <div className="d-flex">
        <div className="d-grid">
          <label>Device</label>
          <select
            className="twitter-select"
            onChange={(ev) => {
              setIsActive(true);
              setDevice(ev.target.value);
            }}
          >
            <option value="Twitter For iPhone">Twitter For iPhone</option>
            <option value="Twitter Web App">Twitter Web App</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TweetUpload;
