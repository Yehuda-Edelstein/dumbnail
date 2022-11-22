import React from "react";

function Info({
  setTimestamp,
  setTitle,
  setChannelName,
  setViews,
  setTimeAgo,
  setIncrement,
  uploadThumbnail,
  uploadChannelPic,
}) {
  function calcViews(ev) {
    setViews(ev.target.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  }

  function calcTimestamp(ev) {
    setTimestamp(
      ev.target.value.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ":")
    );
  }

  return (
    <div>
      <h4>General</h4>
      <div className="d-grid">
        <label>Thumbnail</label>
        <input type="file" accept="image/*" onChange={uploadThumbnail} />
      </div>
      <div className="d-grid">
        <label>Title</label>
        <input onChange={(ev) => setTitle(ev.target.value)}></input>
      </div>
      <div className="d-grid">
        <label>Channel name</label>
        <input onChange={(ev) => setChannelName(ev.target.value)}></input>
      </div>
      <div className="d-grid">
        <label>Channel image</label>
        <input type="file" accept="image/*" onChange={uploadChannelPic} />
      </div>
      <div className="d-grid">
        <label>Views</label>
        <input type="number" onChange={calcViews}></input>
      </div>
      <h4>Posted</h4>
      <div className="d-grid">
        <label>Amount</label>
        <input
          type="number"
          onChange={(ev) => setTimeAgo(ev.target.value)}
        ></input>
      </div>
      <div className="d-grid">
        <label>Increment</label>
        <select onChange={(ev) => setIncrement(ev.target.value)}>
          <option value="minute">minutes</option>
          <option value="hour">hours</option>
          <option value="day">days</option>
          <option value="month">months</option>
          <option value="year">years</option>
        </select>
      </div>
      <h4>Timestamp</h4>
      <input type="number" onChange={calcTimestamp}></input>
    </div>
  );
}

export default Info;
