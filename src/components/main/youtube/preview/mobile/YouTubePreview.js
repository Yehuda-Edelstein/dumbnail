import React, { useRef } from "react";
import * as htmlToImage from "html-to-image";
import "./YouTubePreview.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Switch from "../../../switch/Switch";

function YouTubePreview({
  switchDevice,
  setSwitchDevice,
  isDarkMode,
  setIsDarkMode,
  duration,
  title,
  channelName,
  views,
  timeAgo,
  increment,
  selectedThumb,
  previewThumb,
  selectedChannelPic,
  previewChannelPic,
  thumbZoom,
  thumbX,
  thumbY,
  channelPicZoom,
  channelPicX,
  channelPicY,
  isTemplate,
  template,
  channelTemp,
  isChannelTemp,
}) {
  const mobileRef = useRef(null);
  const download = async () => {
    try {
      const dataUrl = await htmlToImage.toPng(mobileRef.current, {});
      const link = document.createElement("a");
      link.download = "youtube.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.log("Ohhhh nooo!");
      console.log(err);
    }
  };

  const x = channelPicX * 0.1;
  const y = channelPicY * 0.1;

  return (
    <div className="youtube-preview">
      <h5>Preview</h5>
      <div className="youtube-preview-header">
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
              bgOn={"rgba(255, 0, 0, 0.5)"}
              bgOff={"rgba(255, 0, 0, 0.25)"}
            />
          </div>
        </OverlayTrigger>
        {switchDevice ? <h4>[ Dark ]</h4> : <h4>[ Light ]</h4>}
      </div>
      <div className="small-screen-margin">
        <div
          ref={mobileRef}
          className={
            switchDevice
              ? "youtube-preview-container dark border border-dark"
              : "youtube-preview-container light border border-dark"
          }
        >
          <div className={selectedThumb ? "thumbnail" : "upload"}>
            <span className="time-stamp">{duration}</span>
            {selectedThumb && (
              <div className="cover-this">
                <img
                  className="pic"
                  src={previewThumb}
                  alt=""
                  style={{
                    transform: `scale(${thumbZoom}%) translate(${thumbX}px, ${thumbY}px)`,
                  }}
                />
              </div>
            )}
            {isTemplate && (
              <img
                className="template"
                alt=""
                src={require(`../../../../../static/temps/youtube/${template}`)}
              />
            )}
          </div>
          <div className="d-flex">
            <div className="d-flex">
              {selectedChannelPic && !isChannelTemp && (
                <div className="channel-pic">
                  <img
                    src={previewChannelPic}
                    alt=""
                    style={{
                      transform: `scale(${channelPicZoom}%) translate(${x}px, ${y}px)`,
                    }}
                  />
                </div>
              )}
              {!selectedChannelPic && isChannelTemp && (
                <div className="channel-temp">
                  <img
                    src={require(`../../../../../static/popular/youtube/${channelTemp}`)}
                    alt=""
                  />
                </div>
              )}
              {!selectedChannelPic && !isChannelTemp && (
                <div className="upload-channel-pic"></div>
              )}
            </div>
            <div className="info">
              <div className="d-flex justify-content-between title">
                <div className="d-flex">{title}</div>
                <div className="d-flex">
                  <FontAwesomeIcon
                    className="mobile-options"
                    icon={["fa", "ellipsis-vertical"]}
                  />
                </div>
              </div>
              <div className="details">
                <span className="channel-name">{channelName}</span>
                <FontAwesomeIcon className="bullet" icon={["fa", "circle"]} />
                <span className="views">{views} views</span>
                <FontAwesomeIcon className="bullet" icon={["fa", "circle"]} />
                {timeAgo <= 1 ? (
                  <span className="time-ago">
                    {timeAgo} {increment} ago
                  </span>
                ) : (
                  <span className="time-ago">
                    {timeAgo} {increment}s ago
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <button className="youtube-download" onClick={download}>
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

export default YouTubePreview;
