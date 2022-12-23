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
  setMonth,
  setDay,
  setYear,
  setIsLiked,
}) {
  return (
    <div className="upload-container">
      <div>
        <input
          placeholder="Username..."
          onChange={(ev) => {
            setUsername(ev.target.value);
          }}
          maxLength=""
        ></input>
      </div>
      <div>
        {" "}
        <Form.Check
          className="twitter-verified"
          aria-label="option 1"
          checked={isVerified}
          onChange={() => {
            setIsVerified(!isVerified);
          }}
        />
      </div>
      <div>
        <input
          placeholder="Description..."
          onChange={(ev) => {
            setDescription(ev.target.value);
          }}
        ></input>
      </div>
      <div>
        <input
          type="number"
          max="8000000000"
          placeholder="Likes..."
          onChange={(ev) => {
            setLikes(ev.target.value);
          }}
        ></input>
      </div>
      <div>
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
  );
}

export default Info;
