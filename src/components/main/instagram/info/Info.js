import React from "react";
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
  return (
    <div className="instagram-info-container">
      <div className="d-flex">
        <div className="instagram-post-input-container d-grid">
          <input
            placeholder="Username..."
            onChange={(ev) => {
              setUsername(ev.target.value);
            }}
            maxLength=""
          ></input>
        </div>
        <div className="d-grid">
          {" "}
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
      <div className="instagram-post-input-container d-grid">
        <input
          placeholder="Description..."
          onChange={(ev) => {
            setDescription(ev.target.value);
          }}
        ></input>
      </div>
      <div className="instagram-post-details">
        <div className="instagram-post-input-container d-grid">
          <input
            type="number"
            max="8000000000"
            placeholder="Likes..."
            onChange={(ev) => {
              setLikes(ev.target.value);
            }}
          ></input>
        </div>
        <div className="instagram-post-input-container d-grid">
          <input
            type="number"
            max="8000000000"
            placeholder="Comments..."
            onChange={(ev) => {
              setComments(ev.target.value);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Info;
