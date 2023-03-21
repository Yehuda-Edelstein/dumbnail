import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {
  convertTo12HourFormat,
  convertToHTMLTime,
  convertToISODate,
  formatDateToMDDYY,
  get12HourTime,
} from "../../../helpers/DateTimeHelpers";
import { nFormatter } from "../../../helpers/Helpers";
import { getDate } from "../../../helpers/DateTimeHelpers";
import "./Tweet.scss";

function Tweet({
  setName,
  setViews,
  setHandle,
  verified,
  setVerified,
  setTweet,
  setDevice,
  setTime,
  setDate,
  time,
  date,
}) {
  // maybe change this to a helper function
  function underscore(str) {
    let noSpaces = str.replace(/ /g, "_");
    return noSpaces.replace(/[^a-zA-Z0-9_]/g, "");
  }

  const form = document.getElementById("clear-form");

  return (
    <div className="upload-container">
      <div className="upload-container-header">
        <h5>Tweet</h5>
        <div className="d-flex">
          <div>
            <OverlayTrigger
              key={"top"}
              placement={"top"}
              delay={{ show: "700", hide: "100" }}
              overlay={<Tooltip id={"tooltip-top"}>Reset</Tooltip>}
            >
              <FontAwesomeIcon
                icon={["fa", "rotate-left"]}
                onClick={() => {
                  form.reset();
                  setName("Name");
                  setHandle("Handle");
                  setTweet("This is a tweet.");
                  setVerified(true);
                  setTime(get12HourTime());
                  setDate(getDate());
                  setDevice("Twitter For iPhone");
                }}
                className={"icon-enabled"}
              />
            </OverlayTrigger>
          </div>
        </div>
      </div>
      <form className="info-form" id="clear-form">
        <div className="d-flex">
          <input
            placeholder="Name..."
            onChange={(ev) => {
              setName(ev.target.value);
            }}
            maxLength="37"
          ></input>{" "}
          <div className="twitter-verified">
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
        <input
          placeholder="Handle..."
          onChange={(ev) => {
            setHandle(underscore(ev.target.value));
            // maybe have an option to turn this ^ off
          }}
          maxLength="15"
        ></input>
        <textarea
          placeholder="Tweet..."
          onChange={(ev) => {
            setTweet(ev.target.value);
          }}
          maxLength="280"
        ></textarea>
        <div className="tweet-details-container d-flex">
          <input
            className="twitter-timepicker"
            type="time"
            onChange={(ev) => {
              setTime(convertTo12HourFormat(ev.target.value));
            }}
            value={convertToHTMLTime(time)}
          />

          <input
            className="twitter-date-input"
            type="date"
            onChange={(ev) => {
              setDate(formatDateToMDDYY(ev.target.value));
            }}
            value={convertToISODate(date)}
          ></input>
          <input
            type="number"
            placeholder="Views..."
            onChange={(ev) => {
              setViews(nFormatter(ev.target.value));
            }}
          ></input>
          {/* <select
            className="twitter-select"
            onChange={(ev) => {
              setDevice(ev.target.value);
            }}
          >
            <option value="Twitter For iPhone">iPhone</option>
            <option value="Twitter Web App">Web</option>
          </select> */}
        </div>
      </form>
    </div>
  );
}

export default Tweet;
