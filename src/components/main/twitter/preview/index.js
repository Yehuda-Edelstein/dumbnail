import React, { useRef } from "react";
import * as htmlToImage from "html-to-image";
import light from "../../../../static/twitter-verified.png";
import dark from "../../../../static/twitter-verified-dark.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import TwitterSwitch from "../../twitter/switch";
import Download from "./download/index";
import "./style.index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  isActive,
  isPopular,
  popular,
  previewProf,
  selectedProf,
  profZoom,
  profX,
  profY,
}) {
  const tweetRef = useRef(null);
  const downloadTweet = async () => {
    try {
      const dataUrl = await htmlToImage.toPng(tweetRef.current, {});
      // download image
      const link = document.createElement("a");
      link.download = "twitter.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.log("Ohhhh nooo!");
      console.log(err);
    }
  };

  const x = profX * 0.1;
  const y = profY * 0.1;

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
    <div>
      <div className="twitter-preview">
        <h5>Preview</h5>
        <div className="twitter-preview-header">
          <OverlayTrigger
            key={"right"}
            placement={"right"}
            delay={{ show: "700", hide: "100" }}
            overlay={<Tooltip id={"tooltip-right"}>Toggle mode</Tooltip>}
          >
            <div className="switch">
              <TwitterSwitch
                isOn={switchDevice}
                handleToggle={() => {
                  setSwitchDevice(!switchDevice);
                  setIsDarkMode(!isDarkMode);
                }}
              />
            </div>
          </OverlayTrigger>
          {switchDevice ? <h4>[ Dark ]</h4> : <h4>[ Light ]</h4>}
        </div>
        <div className="border border-dark border-bottom-0">
          <div
            ref={tweetRef}
            className={
              switchDevice
                ? "twitter-preview-container dark"
                : "twitter-preview-container light"
            }
          >
            <div className="account-info">
              <div className="d-flex">
                {isPopular && !selectedProf && (
                  <img
                    className="twitter-popular-prof"
                    src={require(`./../../../../static/popular/twitter/${popular}`)}
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
                    {/* options icon */}
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
              <div className="tweet-time">{exact(time)}</div>
              <div className="tweet-bullet"></div>
              <div className="tweet-date">{date}</div>
              <div className="tweet-bullet"></div>
              <div className="tweet-device">{device}</div>
            </div>
          </div>
        </div>
        <Download
          className="download-twitter"
          isActive={isActive}
          downloadTweet={downloadTweet}
        />
      </div>
    </div>
  );
}

export default TwitterPreview;