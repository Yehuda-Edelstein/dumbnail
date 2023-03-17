import React, { useEffect, useState } from "react";
import YouTubePreview from "./preview/mobile/YouTubePreview.js";
import Channel from "./channel/Channel.js";
import Info from "./info/Info.js";
import Thumbnail from "./thumbnail/Thumbnail.js";
import { Tab, Tabs } from "react-bootstrap";
import "./YouTube.scss";

function YouTube() {
  const [selectedThumb, setSelectedThumb] = useState();
  const [previewThumb, setPreviewThumb] = useState();
  const [selectedChannelPic, setSelectedChannelPic] = useState();
  const [previewChannelPic, setPreviewChannelPic] = useState();
  const [duration, setDuration] = useState("4:20");
  const [title, setTitle] = useState("Title");
  const [channelName, setChannelName] = useState("Channel");
  const [views, setViews] = useState("69K");
  const [exactViews, setExactViews] = useState(false);
  const [timeAgo, setTimeAgo] = useState("23");
  const [increment, setIncrement] = useState("minute");
  // switch
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? true
      : false
  );
  const [switchDevice, setSwitchDevice] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? true
      : false
  );
  // crop
  const [thumbZoom, setThumbZoom] = useState(100);
  const [thumbX, setThumbX] = useState(0);
  const [thumbY, setThumbY] = useState(0);
  const [channelPicZoom, setChannelPicZoom] = useState(100);
  const [channelPicX, setChannelPicX] = useState(0);
  const [channelPicY, setChannelPicY] = useState(0);
  // templates
  const [isTemplate, setIsTemplate] = useState(false);
  const [template, setTemplate] = useState();
  const [isChannelTemp, setIsChannelTemp] = useState(false);
  const [channelTemp, setChannelTemp] = useState();

  // what are these useEffects doing?
  useEffect(() => {
    if (!selectedThumb) {
      setPreviewThumb(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedThumb);
    setPreviewThumb(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedThumb]);

  useEffect(() => {
    if (!selectedChannelPic) {
      setPreviewChannelPic(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedChannelPic);
    setPreviewChannelPic(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedChannelPic]);

  return (
    <div className="main-components">
      <div className="upload-containers-grid">
        <Thumbnail
          selectedThumb={selectedThumb}
          previewThumb={previewThumb}
          setSelectedThumb={setSelectedThumb}
          setPreviewThumb={setPreviewThumb}
          isTemplate={isTemplate}
          setIsTemplate={setIsTemplate}
          setTemplate={setTemplate}
          setIsChannelTemp={setIsChannelTemp}
          setChannelTemp={setChannelTemp}
          setChannelName={setChannelName}
          thumbX={thumbX}
          thumbY={thumbY}
          thumbZoom={thumbZoom}
          setThumbX={setThumbX}
          setThumbY={setThumbY}
          setThumbZoom={setThumbZoom}
        />
        <Channel
          setPreviewChannelPic={setPreviewChannelPic}
          setSelectedChannelPic={setSelectedChannelPic}
          previewChannelPic={previewChannelPic}
          selectedChannelPic={selectedChannelPic}
          channelPicZoom={channelPicZoom}
          setChannelPicZoom={setChannelPicZoom}
          channelPicX={channelPicX}
          channelPicY={channelPicY}
          setChannelPicX={setChannelPicX}
          setChannelPicY={setChannelPicY}
          setChannelName={setChannelName}
          setChannelTemp={setChannelTemp}
          isChannelTemp={isChannelTemp}
          setIsChannelTemp={setIsChannelTemp}
        />
        <Info
          setDuration={setDuration}
          setTitle={setTitle}
          setChannelName={setChannelName}
          setViews={setViews}
          exactViews={exactViews}
          setExactViews={setExactViews}
          setTimeAgo={setTimeAgo}
          setIncrement={setIncrement}
        />
        <div className="bottom-container"></div>
      </div>
      <div className="upload-containers-tabs">
        <Tabs
          defaultActiveKey="thumbnail"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="thumbnail" title="Thumbnail">
            <Thumbnail
              selectedThumb={selectedThumb}
              previewThumb={previewThumb}
              setSelectedThumb={setSelectedThumb}
              setPreviewThumb={setPreviewThumb}
              isTemplate={isTemplate}
              setIsTemplate={setIsTemplate}
              setTemplate={setTemplate}
              setIsChannelTemp={setIsChannelTemp}
              setChannelTemp={setChannelTemp}
              setChannelName={setChannelName}
              thumbX={thumbX}
              thumbY={thumbY}
              thumbZoom={thumbZoom}
              setThumbX={setThumbX}
              setThumbY={setThumbY}
              setThumbZoom={setThumbZoom}
            />
          </Tab>
          <Tab eventKey="channel" title="Channel">
            {" "}
            <Channel
              setPreviewChannelPic={setPreviewChannelPic}
              setSelectedChannelPic={setSelectedChannelPic}
              previewChannelPic={previewChannelPic}
              selectedChannelPic={selectedChannelPic}
              channelPicZoom={channelPicZoom}
              setChannelPicZoom={setChannelPicZoom}
              channelPicX={channelPicX}
              channelPicY={channelPicY}
              setChannelPicX={setChannelPicX}
              setChannelPicY={setChannelPicY}
              setChannelName={setChannelName}
              setIsTemplate={setIsTemplate}
              setTemplate={setTemplate}
              setChannelTemp={setChannelTemp}
              isChannelTemp={isChannelTemp}
              setIsChannelTemp={setIsChannelTemp}
            />
          </Tab>
          <Tab eventKey="info" title="Info">
            <Info
              setDuration={setDuration}
              setTitle={setTitle}
              setChannelName={setChannelName}
              setViews={setViews}
              exactViews={exactViews}
              setExactViews={setExactViews}
              setTimeAgo={setTimeAgo}
              setIncrement={setIncrement}
            />
          </Tab>
        </Tabs>
      </div>
      <YouTubePreview
        switchDevice={switchDevice}
        setSwitchDevice={setSwitchDevice}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        duration={duration}
        title={title}
        channelName={channelName}
        views={views}
        timeAgo={timeAgo}
        increment={increment}
        selectedThumb={selectedThumb}
        previewThumb={previewThumb}
        selectedChannelPic={selectedChannelPic}
        previewChannelPic={previewChannelPic}
        thumbZoom={thumbZoom}
        setThumbZoom={setThumbZoom}
        thumbX={thumbX}
        thumbY={thumbY}
        channelPicZoom={channelPicZoom}
        channelPicX={channelPicX}
        channelPicY={channelPicY}
        isTemplate={isTemplate}
        template={template}
        channelTemp={channelTemp}
        isChannelTemp={isChannelTemp}
      />
    </div>
  );
}

export default YouTube;
