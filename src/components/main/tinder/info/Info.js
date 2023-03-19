import React, { useState } from "react";
import you from "./../../../../static/tinder/you.png";
import them from "./../../../../static/tinder/them.png";
import {
  deleteMessage,
  updateFrom,
  updateMessage,
  date,
  newMessage,
} from "../../../../helpers/MessageHelpers";
import { upload } from "../../../../helpers/Helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Info.scss";
import Crop from "../../../crop/Crop";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function Info({
  messages,
  setMessages,
  match,
  setMatch,
  matchedOn,
  setMatchedOn,
  picZoom,
  picX,
  picY,
  setPicZoom,
  setPicX,
  setPicY,
  setSelectedPic,
  setPreviewPic,
  selectedPic,
  previewPic,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function reset() {
    // setPreviewPhoto();
    // setSelectedPhoto();
  }

  return (
    <div className="message-info-container tinder-message-info-container">
      <h5>Convo</h5>
      <label>Profile</label>
      {show ? (
        <Crop
          show={show}
          handleClose={handleClose}
          img={previewPic}
          x={picX}
          y={picY}
          setX={setPicX}
          setY={setPicY}
          zoom={picZoom}
          setZoom={setPicZoom}
        />
      ) : (
        <div>
          <div className="upload-profile-header">
            <h5>Profile</h5>
            <div className="d-flex">
              {selectedPic && (
                <div>
                  <OverlayTrigger
                    key={"top"}
                    placement={"top"}
                    delay={{ show: "700", hide: "100" }}
                    overlay={<Tooltip id={"tooltip-top"}>Crop</Tooltip>}
                  >
                    <FontAwesomeIcon
                      icon={["fa", "crop"]}
                      onClick={handleShow}
                      className="icon-enabled"
                    />
                  </OverlayTrigger>
                </div>
              )}
              <div>
                <OverlayTrigger
                  key={"top"}
                  placement={"top"}
                  delay={{ show: "700", hide: "100" }}
                  overlay={<Tooltip id={"tooltip-top"}>Clear</Tooltip>}
                >
                  <FontAwesomeIcon
                    icon={["fa", "circle-xmark"]}
                    // onClick={selectedProf || isPopular ? reset : null}
                    // className={
                    //   selectedProf || isPopular
                    //     ? "icon-enabled"
                    //     : "icon-disabled"
                    // }
                  />
                </OverlayTrigger>
              </div>
            </div>
          </div>
          <div className="upload-profile-body d-flex">
            <div>
              {!selectedPic && (
                <div
                  onChange={(ev) => {
                    upload(ev, setSelectedPic);
                  }}
                >
                  <div>
                    <div className="upload-profile-pic">
                      <input
                        type="file"
                        accept="image/*"
                        title=""
                        onChange={(ev) => {
                          upload(ev, setSelectedPic);
                        }}
                        className="hidden-input"
                      />
                      <div className="upload-channel-label">Upload</div>
                      <FontAwesomeIcon icon={["fa", "upload"]} />
                    </div>
                  </div>
                </div>
              )}
              {selectedPic && (
                <div
                  onChange={(ev) => {
                    upload(ev, setSelectedPic);
                  }}
                >
                  <div>
                    <div className="upload-profile-pic">
                      <input
                        type="file"
                        accept="image/*"
                        title=""
                        onChange={(ev) => {
                          upload(ev, setSelectedPic);
                        }}
                        className="hidden-input"
                      />
                      <div className="upload-channel-label">Upload</div>
                      <FontAwesomeIcon icon={["fa", "upload"]} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <input
        type="text"
        placeholder="Match..."
        max="15"
        onChange={(ev) => {
          setMatch(ev.target.value);
        }}
      />
      <div className="d-grid">
        <label>Date</label>
        <input
          type="date"
          onChange={(ev) => setMatchedOn(date(ev.target.value))}
        />
      </div>
      <div className="messages-container tinder-messages-container">
        {messages.map((m) => {
          return (
            <div className="msg-info tinder-msg-info" key={m.id}>
              <textarea
                rows="1"
                placeholder="Message..."
                value={m.msg}
                onChange={(ev) => {
                  setMessages(updateMessage(m.id, ev.target.value, messages));
                }}
              ></textarea>
              <div className="message-buttons-container">
                <img
                  className={m.from === "them" ? "them-btn active" : "them-btn"}
                  src={them}
                  alt=""
                  onClick={() => {
                    setMessages(updateFrom(m.id, "them", messages));
                  }}
                />
                <img
                  className={m.from === "you" ? "you-btn active" : "you-btn"}
                  src={you}
                  alt=""
                  onClick={() => {
                    setMessages(updateFrom(m.id, "you", messages));
                  }}
                />
                <FontAwesomeIcon
                  onClick={() => setMessages(deleteMessage(m.id, messages))}
                  key={m.id}
                  className="delete-message"
                  icon={["fa", "trash"]}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="new-messages-container">
        <div
          className="new-message"
          onClick={() => {
            setMessages(newMessage(messages));
          }}
        >
          +Message
        </div>
      </div>
    </div>
  );
}

export default Info;
