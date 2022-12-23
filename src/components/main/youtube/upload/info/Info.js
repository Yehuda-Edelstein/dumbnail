import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
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
  // convert views to youtube style
  function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "B" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
      : "0";
  }

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

  function reset() {
    const f = document.getElementById("clear-form");
    f.value = "";
    setTitle("Title");
    setChannelName("Channel");
    setViews("69K");
    setTimeAgo("23");
    setIncrement("minute");
    setDuration("4:20");
  }

  return (
    <div className="info-container">
      <div className="info-header">
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
                onClick={reset}
                className={"icon-enabled"}
              />
            </OverlayTrigger>
          </div>
        </div>
      </div>
      <div className="info-content">
        <form id="clear-form">
          <div className="input-container d-grid">
            <input
              placeholder="Title..."
              onChange={(ev) => setTitle(ev.target.value)}
              maxLength="100"
            ></input>
          </div>
          <div className="input-container d-grid">
            <input
              placeholder="Channel name..."
              onChange={(ev) => setChannelName(ev.target.value)}
              maxLength="60"
            ></input>
          </div>
          <div className="d-flex justify-content-between">
            <div className="input-container d-grid">
              <input
                placeholder="Views..."
                className="views-input"
                type="number"
                onChange={calcViews}
              ></input>
            </div>
            <div className="input-container d-grid">
              <input
                placeholder="Posted..."
                className="posted-input"
                type="number"
                onChange={(ev) => setTimeAgo(ev.target.value)}
              ></input>
            </div>
            <div className="input-container d-grid">
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
      {/* <div className="info-ad-box">AD BOX #2</div> */}
    </div>
  );
}

export default Info;
