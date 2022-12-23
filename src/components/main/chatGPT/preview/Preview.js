import React, { useRef, useState } from "react";
// import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import Switch from "../../switch/Switch";
import { download } from "../../../../helpers/Helpers";
import logo from "../../../../static/chatGPT/logo.png";
import thumb from "../../../../static/chatGPT/thumb.png";
import "./Preview.scss";

function Preview({ initial, color, messages }) {
  const ref = useRef(null);
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const [switchDevice, setSwitchDevice] = useState(false);

  return (
    <div className="preview">
      <h5>Preview</h5>
      {/* <div className="preview-header">
        <OverlayTrigger
          key={"right"}
          placement={"right"}
          delay={{ show: "700", hide: "100" }}
          overlay={<Tooltip id={"tooltip-right"}>Toggle mode</Tooltip>}
        >
          <div className="switch">
            <Switch
              isOn={switchDevice}
              handleToggle={() => {
                setSwitchDevice(!switchDevice);
                setIsDarkMode(!isDarkMode);
              }}
              bgOn={"rgba(16, 163, 127, .5)"}
              bgOff={"rgba(16, 163, 127, .25)"}
            />
          </div>
        </OverlayTrigger>
        {switchDevice ? <h4>[ Dark ]</h4> : <h4>[ Light ]</h4>}
      </div> */}
      <div className="border border-dark mt-2">
        <div ref={ref}>
          <div className="chat-body">
            {messages.map((m) => {
              return m.from === "GPT" ? (
                <div className="message-from-GPT" key={m.id}>
                  <img src={logo} alt="" />
                  <div className="message">{m.msg}</div>
                  <div className="thumbs">
                    <img src={thumb} alt="" />
                    <img id="rotate" src={thumb} alt="" />
                  </div>
                </div>
              ) : (
                <div className="message-from-you" key={m.id}>
                  <div
                    className="pic"
                    style={{ color: "white", backgroundColor: color }}
                  >
                    <div>{initial}</div>
                  </div>
                  <div className="message">{m.msg}</div>
                </div>
              );
            })}
          </div>
        </div>
        <button
          className="chat-download"
          onClick={() => {
            download(ref, "chat");
          }}
        >
          DOWNLOAD
        </button>
      </div>
      <div className="notes">
        <ul>
          <li>Max height of preview is 450px. Overflow will be hidden.</li>
        </ul>
      </div>
    </div>
  );
}

export default Preview;
