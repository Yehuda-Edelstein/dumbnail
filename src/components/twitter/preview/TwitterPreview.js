import React, { useRef } from "react";
import { download } from "../../../helpers/Helpers";
import light from "./../../../assets/images/twitter/twitter-verified.png";
import dark from "./../../../assets/images/twitter/dark-verified.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "../../switch/Switch";
import "./TwitterPreview.scss";

function TwitterPreview({
  switchDevice,
  setSwitchDevice,
  isDarkMode,
  setIsDarkMode,
  name,
  verified,
  handle,
  tweet,
  time,
  date,
  device,
  views,
  isPopular,
  popular,
  previewProf,
  selectedProf,
  profZoom,
  profX,
  profY,
}) {
  const ref = useRef(null);

  // scales down dimensions for channel pic
  const x = profX * 0.1;
  const y = profY * 0.1;

  return (
    <div className="preview-container">
      <h5>Preview</h5>
      <div className="preview-header">
        <OverlayTrigger
          key={"right"}
          placement={"right"}
          delay={{ show: "700", hide: "100" }}
          overlay={<Tooltip id={"tooltip-right"}>Toggle mode</Tooltip>}
        >
          <div className="d-flex switch">
            <Switch
              isOn={switchDevice}
              handleToggle={() => {
                setSwitchDevice(!switchDevice);
                setIsDarkMode(!isDarkMode);
              }}
              bgOn={"rgba(29, 155, 240, 0.5)"}
              bgOff={"rgba(29, 155, 240, 0.25)"}
            />
          </div>
        </OverlayTrigger>
        {switchDevice ? <h4>[ Dark ]</h4> : <h4>[ Light ]</h4>}
      </div>
      <div className="border border-dark">
        <div
          ref={ref}
          className={
            switchDevice
              ? "twitter-preview-box dark"
              : "twitter-preview-box light"
          }
        >
          <div className="account-info">
            <div className="d-flex">
              {isPopular && !selectedProf && (
                <img
                  className="twitter-popular-prof"
                  src={require(`./../../../assets/images/twitter/${popular}`)}
                  alt=""
                />
              )}
              {!isPopular && selectedProf && (
                <div className="twitter-custom-prof">
                  <img
                    src={previewProf}
                    style={{
                      transform: `scale(${profZoom}%) translate(${x}px, ${y}px)`,
                    }}
                    alt=""
                  />
                </div>
              )}
              {!isPopular && !selectedProf && (
                <div className="twitter-prof"></div>
              )}
              <div className="d-grid indent">
                <div className="d-flex">
                  <div className="twitter-name">{name}</div>
                  {verified && !switchDevice && (
                    <img className="verified" src={light} alt="" />
                  )}
                  {verified && switchDevice && (
                    <img className="verified-dark" src={dark} alt="" />
                  )}
                </div>
                <div className="twitter-handle">@{handle}</div>
              </div>
              <FontAwesomeIcon
                className="twitter-options"
                icon={["fa", "ellipsis"]}
              />
            </div>
          </div>
          <div className="tweet">{tweet}</div>
          <div className="tweet-info">
            <div className="tweet-time">{time}</div>
            <div className="tweet-bullet"></div>
            <div className="tweet-date">{date}</div>
            <div className="tweet-bullet"></div>
            <div className="tweet-views">
              <span className="views">{views}</span> Views
            </div>
            {/* <div className="tweet-device">{device}</div> */}
          </div>
        </div>
        <button
          className="twitter-download"
          onClick={() => {
            download(ref, "tweet");
          }}
        >
          DOWNLOAD
        </button>
      </div>
      <div className="notes">
        <ul>
          <li>1. Max zoom width is 200%</li>
          <li>
            2. You <em>can</em> crop the picture out of frame so be careful.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TwitterPreview;
