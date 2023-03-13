import React, { useRef } from "react";
import { download } from "../../../../helpers/Helpers";
import logo from "../../../../static/chatGPT/logo.png";
import thumb from "../../../../static/chatGPT/thumb.png";
import "./Preview.scss";

function Preview({ initial, color, messages }) {
  const ref = useRef(null);

  return (
    <div className="preview chatGPT-width">
      <h5>Preview</h5>
      <div className="border border-dark chat-margin">
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
