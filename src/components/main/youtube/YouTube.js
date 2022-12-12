import React, { useEffect, useState } from "react";
import YouTubePreview from "./preview/mobile/YouTubePreview.js";
import "./YouTube.scss";
import Channel from "./upload/channel/Channel.js";
import Info from "./upload/info/Info.js";
import Thumbnail from "./upload/thumbnail/Thumbnail.js";
import { Tab, Tabs } from "react-bootstrap";

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
  // const [verified, setVerified] = useState(false);
  // switch
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [switchDevice, setSwitchDevice] = useState(false);
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
    setIsChannelTemp(false);
    setChannelTemp();
    if (!ev.target.files || ev.target.files.length === 0) {
      setSelectedChannelPic(undefined);
      return;
    }
    setSelectedChannelPic(ev.target.files[0]);
  }

  function clearTemp() {
    setIsTemplate(false);
    setIsChannelTemp(false);
    setChannelName("Channel");
  }

  // const desktopRef = useRef(null);
  // const downloadImageDesktop = async () => {
  //   // checks if dark mode is true
  //   // backgroundColor: "#0f0f0f",
  //   const dataUrl = await htmlToImage.toPng(desktopRef.current, {
  //     backgroundColor: "white",
  //   });

  //   // download image
  //   const link = document.YouTubeElement("a");
  //   link.download = "dumbnail.png";
  //   link.href = dataUrl;
  //   link.click();
  // };

  return (
    <div className="main-content">
      <div className="upload-content">
        <Thumbnail
          uploadThumbnail={uploadThumbnail}
          clearTemp={clearTemp}
          previewThumb={previewThumb}
          selectedThumb={selectedThumb}
          thumbZoom={thumbZoom}
          setThumbZoom={setThumbZoom}
          thumbX={thumbX}
          thumbY={thumbY}
          setThumbX={setThumbX}
          setThumbY={setThumbY}
          isTemplate={isTemplate}
          setIsTemplate={setIsTemplate}
          setTemplate={setTemplate}
          setPreviewThumb={setPreviewThumb}
          setPreviewChannelPic={setPreviewChannelPic}
          setChannelName={setChannelName}
          uploadChannelPic={uploadChannelPic}
          setSelectedThumb={setSelectedThumb}
          setChannelTemp={setChannelTemp}
          setIsChannelTemp={setIsChannelTemp}
        />
        <Channel
          setPreviewChannelPic={setPreviewChannelPic}
          setSelectedChannelPic={setSelectedChannelPic}
          uploadChannelPic={uploadChannelPic}
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
      </div>
      <div className="content-tabs">
        <Tabs
          defaultActiveKey="thumbnail"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="thumbnail" title="Thumbnail">
            <Thumbnail
              uploadThumbnail={uploadThumbnail}
              clearTemp={clearTemp}
              previewThumb={previewThumb}
              selectedThumb={selectedThumb}
              thumbZoom={thumbZoom}
              setThumbZoom={setThumbZoom}
              thumbX={thumbX}
              thumbY={thumbY}
              setThumbX={setThumbX}
              setThumbY={setThumbY}
              isTemplate={isTemplate}
              setIsTemplate={setIsTemplate}
              setTemplate={setTemplate}
              setPreviewThumb={setPreviewThumb}
              setPreviewChannelPic={setPreviewChannelPic}
              setChannelName={setChannelName}
              uploadChannelPic={uploadChannelPic}
              setSelectedThumb={setSelectedThumb}
              setChannelTemp={setChannelTemp}
              setIsChannelTemp={setIsChannelTemp}
            />
          </Tab>
          <Tab eventKey="channel" title="Channel">
            {" "}
            <Channel
              setPreviewChannelPic={setPreviewChannelPic}
              setSelectedChannelPic={setSelectedChannelPic}
              uploadChannelPic={uploadChannelPic}
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
        uploadThumbnail={uploadThumbnail}
        uploadChannelPic={uploadChannelPic}
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
