import React, { useState } from "react";
import you from "./../../../assets/images/tinder/you.png";
import them from "./../../../assets/images/tinder/them.png";
import {
  deleteMessage,
  updateMessage,
  newTextMessage,
} from "../../../helpers/MessageHelpers";
import { upload } from "../../../helpers/Helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Info.scss";
import Crop from "../../crop/Crop";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import { getHtmlDate } from "../../../helpers/DateTimeHelpers";

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
  selectedPic,
  previewPic,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="upload-container">
      {show ? (
        <Crop
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
          <div className="upload-container-header">
            <h5>Convo</h5>
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
                    onClick={
                      selectedPic
                        ? () => {
                            setSelectedPic();
                          }
                        : null
                    }
                    className={selectedPic ? "icon-enabled" : "icon-disabled"}
                  />
                </OverlayTrigger>
              </div>
            </div>
          </div>
          <div className="tinder-upload-container-body upload-container-body">
            <div className="upload-profile-pic">
              <input
                type="file"
                accept="image/*"
                title=""
                onChange={(ev) => {
                  setSelectedPic(upload(ev));
                }}
                className="hidden-input"
              />
              <div className="upload-profile-label">Upload</div>
              <FontAwesomeIcon icon={["fa", "upload"]} />
            </div>
            <div className="d-grid tinder-match-container">
              <input
                type="text"
                placeholder="Match..."
                max="15"
                onChange={(ev) => {
                  setMatch(ev.target.value);
                }}
              />
              <input
                type="date"
                value={matchedOn}
                onChange={(ev) => setMatchedOn(ev.target.value)}
              />
            </div>
          </div>
          <div className="messages-container tinder-messages-container">
            {messages.map((m) => {
              return (
                <div className="message tinder-msg-info" key={m.id}>
                  <textarea
                    rows="1"
                    placeholder="Message..."
                    value={m.msg}
                    onChange={(ev) => {
                      setMessages(
                        updateMessage(m.id, "msg", ev.target.value, messages)
                      );
                    }}
                  ></textarea>
                  <div className="tinder-message-buttons-container">
                    <img
                      className={
                        m.from === "them" ? "them-btn active" : "them-btn"
                      }
                      src={them}
                      alt=""
                      onClick={() => {
                        setMessages(
                          updateMessage(m.id, "from", "them", messages)
                        );
                      }}
                    />
                    <img
                      className={
                        m.from === "you" ? "you-btn active" : "you-btn"
                      }
                      src={you}
                      alt=""
                      onClick={() => {
                        setMessages(
                          updateMessage(m.id, "from", "you", messages)
                        );
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
                setMessages(newTextMessage(messages));
              }}
            >
              +Message
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Info;
