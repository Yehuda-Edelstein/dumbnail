import React from "react";
import "./MessageSwitch.scss";

function MessageSwitch({ isOn, handleToggle }) {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="message-switch-checkbox"
        id={`message-switch-new`}
        type="checkbox"
      />
      <label
        className="message-switch-label"
        htmlFor={`message-switch-new`}
        style={{
          background: isOn
            ? "rgba(28, 138, 254, .5)"
            : "rgba(28, 138, 254, 0.25)",
        }}
      >
        <span className={`message-switch-button`} />
      </label>
    </>
  );
}

export default MessageSwitch;
