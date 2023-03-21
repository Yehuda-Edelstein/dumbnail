import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Info.scss";

function Info({
  setUsername,
  isVerified,
  setIsVerified,
  setLikes,
  setDescription,
  setComments,
  // setMonth,
  // setDay,
  // setYear,
  // setIsLiked,
}) {
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
                  setUsername("Username");
                  setIsVerified(true);
                  setLikes(420);
                  setDescription("This is a description");
                  setComments(69);
                }}
                className={"icon-enabled"}
              />
            </OverlayTrigger>
          </div>
        </div>
      </div>
      <form className="info-form" id="clear-form">
        <div className="d-flex">
          <input
            placeholder="Username..."
            onChange={(ev) => {
              setUsername(ev.target.value);
            }}
            maxLength="30"
          ></input>{" "}
          <div className="instagram-verified">
            <Form.Check
              className="instagram-verified-checkbox"
              aria-label="option 1"
              checked={isVerified}
              onChange={() => {
                setIsVerified(!isVerified);
              }}
            />
          </div>
        </div>
        <input
          placeholder="Description..."
          onChange={(ev) => {
            setDescription(ev.target.value);
          }}
        ></input>
        <div className="instagram-post-details">
          <input
            className="likes"
            type="number"
            max="8000000000"
            placeholder="Likes..."
            onChange={(ev) => {
              setLikes(ev.target.value);
            }}
          ></input>
          <input
            type="number"
            max="8000000000"
            placeholder="Comments..."
            onChange={(ev) => {
              setComments(ev.target.value);
            }}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default Info;
