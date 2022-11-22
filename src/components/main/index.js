import React, { useEffect, useState } from "react";
import Preview from "./preview/index.js";
import Info from "./info/index.js";
import "./style.index.scss";
import Download from "./download/index.js";

function Main() {
  const [timestamp, setTimestamp] = useState("4:20");
  const [title, setTitle] = useState("Title");
  const [channelName, setChannelName] = useState("Channel");
  const [views, setViews] = useState("69,420");
  const [timeAgo, setTimeAgo] = useState("23");
  const [increment, setIncrement] = useState("minute");
  const [verified, setVerified] = useState(false);
  //   to display images
  const [selectedThumb, setSelectedThumb] = useState();
  const [previewThumb, setPreviewThumb] = useState();
  const [selectedChannelPic, setSelectedChannelPic] = useState();
  const [previewChannelPic, setPreviewChannelPic] = useState();
  //   to download image
  const [ref, setRef] = useState();

  useEffect(() => {
    if (!selectedThumb) {
      setPreviewThumb(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedThumb);
    setPreviewThumb(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedThumb]);

  function uploadThumbnail(ev) {
    if (!ev.target.files || ev.target.files.length === 0) {
      setSelectedThumb(undefined);
      return;
    }
    setSelectedThumb(ev.target.files[0]);
  }

  useEffect(() => {
    if (!selectedChannelPic) {
      setPreviewChannelPic(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedChannelPic);
    setPreviewChannelPic(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedChannelPic]);

  function uploadChannelPic(ev) {
    if (!ev.target.files || ev.target.files.length === 0) {
      setSelectedChannelPic(undefined);
      return;
    }
    setSelectedChannelPic(ev.target.files[0]);
  }

  return (
    <div>
      <div className="d-flex">
        <Preview
          timestamp={timestamp}
          title={title}
          channelName={channelName}
          views={views}
          timeAgo={timeAgo}
          increment={increment}
          // to display images
          selectedThumb={selectedThumb}
          previewThumb={previewThumb}
          selectedChannelPic={selectedChannelPic}
          previewChannelPic={previewChannelPic}
          // to download image
          setRef={setRef}
        />
        <Info
          setTimestamp={setTimestamp}
          setTitle={setTitle}
          setChannelName={setChannelName}
          setViews={setViews}
          setTimeAgo={setTimeAgo}
          setIncrement={setIncrement}
          // to display images
          uploadThumbnail={uploadThumbnail}
          uploadChannelPic={uploadChannelPic}
        />
      </div>
      <Download ref={ref} />
    </div>
  );
}

export default Main;
