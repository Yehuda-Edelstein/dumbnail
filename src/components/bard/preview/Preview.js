import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import thumb from "./../../../assets/images/bard/thumb.png";
import bars from "./../../../assets/images/bard/bars.png";
import dots from "./../../../assets/images/bard/dots.png";
import "./Preview.scss";

function Preview({ messages, selectedPic, previewPic, picZoom, picX, picY }) {
  const ref = useRef(null);
  const x = picX * 0.1;
  const y = picY * 0.1;
  return (
    <div className="preview-container">
      <h5>Preview</h5>
      <div className="border border-dark">
        <div ref={ref}>
          {/* <div className="bard-chat-header">
            <div className="bard-title-div">
              <img src={bars} alt="" className="bars" />
              <div className="bard-title">
                Bard <span>Experiment</span>
              </div>
            </div>
            <div className="bard-profile-div">
              <img src={dots} alt="" className="dots" />
              <div className="profile">
                {selectedPic ? (
                  <img
                    src={previewPic}
                    alt=""
                    style={{
                      transform: `scale(${picZoom}%) translate(${x}px, ${y}px)`,
                    }}
                  />
                ) : (
                  <div className="upload-profile-backdrop"></div>
                )}
              </div>
            </div>
          </div> */}
          <div className="chat-body bard-chat-body">
            {messages.map((m) => {
              return m.from === "you" ? (
                <div key={m.id} className="from-you">
                  <img
                    src={previewPic}
                    alt=""
                    style={{
                      transform: `scale(${picZoom}%) translate(${x}px, ${y}px)`,
                    }}
                  />
                  <p>{m.msg}</p>
                  <FontAwesomeIcon icon={["fa", "pen"]} />
                </div>
              ) : (
                <div key={m.id} className="from-them">
                  <div>
                    <div>star thing</div>
                    <p>{m.msg}</p>
                  </div>
                  <div className="from-them-footer">
                    <div className="thumbs-container">
                      <img src={thumb} alt="" className="thumb" />
                      <img id="rotate" src={thumb} alt="" className="thumb" />
                      <FontAwesomeIcon icon={["fa", "rotate-right"]} />
                    </div>{" "}
                    <FontAwesomeIcon icon={["fa", "ellipsis"]} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
