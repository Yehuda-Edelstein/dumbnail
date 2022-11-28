import React from "react";

function UploadChannel({ uploadChannelPic }) {
  const channel = React.useRef(null);

  const handleChannel = (event) => {
    channel.current.click();
  };

  return (
    <div>
      upload channel
      <button className="hidden-input-container d-grid" onClick={handleChannel}>
        <label>Channel image</label>
        <input
          type="file"
          accept="image/*"
          title=""
          className="hidden-input"
          style={{ display: "none" }}
          ref={channel}
          onChange={uploadChannelPic}
        />
      </button>
      {/* <div>popular images</div> */}
    </div>
  );
}

export default UploadChannel;
