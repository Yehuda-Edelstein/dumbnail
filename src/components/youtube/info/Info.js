import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { nFormatter } from "../../../helpers/Helpers";
import "./Info.scss";

function Info({
  setDuration,
  setTitle,
  setChannelName,
  setViews,
  exactViews,
  setTimeAgo,
  setIncrement,
}) {
  function calcViews(ev) {
    if (exactViews === true) {
      setViews(
        ev.target.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
    } else {
      setViews(nFormatter(ev.target.value));
    }
  }

  function calcDuration(ev) {
    setDuration(
      ev.target.value.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ":")
    );
  }

  const form = document.getElementById("clear-form");

  return (
    <div className="upload-container">
      <div className="upload-container-header">
        <h5>Info</h5>
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
                  setTitle("Title");
                  setChannelName("Channel");
                  setViews("69K");
                  setTimeAgo("23");
                  setIncrement("minute");
                  setDuration("4:20");
                }}
                className={"icon-enabled"}
              />
            </OverlayTrigger>
          </div>
        </div>
      </div>
      <form className="info-form" id="clear-form">
        <input
          placeholder="Title..."
          onChange={(ev) => setTitle(ev.target.value)}
          maxLength="100"
        ></input>
        <input
          placeholder="Channel name..."
          onChange={(ev) => setChannelName(ev.target.value)}
          maxLength="60"
        ></input>
        <div className="d-flex justify-content-between">
          <input
            placeholder="Views..."
            type="number"
            onChange={calcViews}
            className="views-input"
          ></input>
          <input
            placeholder="Posted..."
            type="number"
            onChange={(ev) => setTimeAgo(ev.target.value)}
            className="posted-input"
          ></input>
          <select
            className="ago-select"
            onChange={(ev) => setIncrement(ev.target.value)}
          >
            <option value="minute">minutes</option>
            <option value="hour">hours</option>
            <option value="day">days</option>
            <option value="month">months</option>
            <option value="year">years</option>
          </select>
        </div>
        <div className="input-container d-grid">
          <input
            type="number"
            placeholder="Duration..."
            onChange={calcDuration}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default Info;
