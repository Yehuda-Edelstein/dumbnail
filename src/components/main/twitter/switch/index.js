import React from "react";
import "./style.index.scss";

function TwitterSwitch({ isOn, handleToggle }) {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="twitter-switch-checkbox"
        id={`twitter-switch-new`}
        type="checkbox"
      />
      <label
        className="twitter-switch-label"
        htmlFor={`twitter-switch-new`}
        style={{
          background: isOn
            ? "rgba(29, 155, 240, 0.5)"
            : "rgba(29, 155, 240, 0.25)",
        }}
      >
        <span className={`twitter-switch-button`} />
      </label>
    </>
  );
}

export default TwitterSwitch;
