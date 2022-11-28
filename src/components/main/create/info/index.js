import React from "react";

function Info({
  setTimestamp,
  setTitle,
  setChannelName,
  setViews,
  exactViews,
  // setExactViews,
  setTimeAgo,
  setIncrement,
  // setDark,
  // dark,
}) {
  // convert views to youtube style
  function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "B" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
      : "0";
  }

  function calcViews(ev) {
    if (exactViews === true) {
      setViews(
        ev.target.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
    } else {
      setViews(nFormatter(ev.target.value));
    }
  }

  function calcTimestamp(ev) {
    setTimestamp(
      ev.target.value.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ":")
    );
  }

  return (
    <div className="info-content">
      <div className="d-grid">
        <label>Title</label>
        <input
          onChange={(ev) => setTitle(ev.target.value)}
          maxLength="100"
        ></input>
      </div>
      <div className="d-grid">
        <label>Channel name</label>
        <input
          onChange={(ev) => setChannelName(ev.target.value)}
          maxLength="60"
        ></input>
      </div>
      <div className="d-flex">
        <div className="d-grid">
          <label>Views</label>
          <div>
            <input type="number" onChange={calcViews}></input>
            {/* random button here */}
          </div>
        </div>
        {/* <div className="d-grid">
          <label>Exact views</label>
          <input
            type="checkbox"
            onClick={(ev) => setExactViews(!ev.target.checked)}
          ></input>
        </div> */}
      </div>
      <h5>Posted</h5>
      <div className="d-flex">
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
        {/* random button here */}
      </div>
      <h5>Timestamp</h5>
      <span></span>
      <input type="number" onChange={calcTimestamp}></input>
    </div>
  );
}

export default Info;
