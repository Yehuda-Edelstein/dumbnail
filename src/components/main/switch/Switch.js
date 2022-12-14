import React from "react";
import "./Switch.scss";

function Switch({ isOn, handleToggle, bgOn, bgOff }) {
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
          background: isOn ? bgOn : bgOff,
        }}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
}

export default Switch;
