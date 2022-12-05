import React from "react";
import "./style.index.scss";

function YouTubeSwitch({ isOn, handleToggle }) {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        style={{
          background: isOn ? "rgba(255, 0, 0, 0.5)" : "rgba(255, 0, 0, 0.25)",
        }}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
}

export default YouTubeSwitch;
