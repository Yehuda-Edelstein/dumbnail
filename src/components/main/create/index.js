import React, { useEffect, useState, useRef } from "react";
import DesktopPreview from "./preview/desktop/index.js";
import Info from "./info/index.js";
import * as htmlToImage from "html-to-image";
import Download from "./download/index.js";
import Switch from "./switch/index.js";
import MobilePreview from "./preview/mobile/index.js";
import "./style.index.scss";

function Create() {
  const [timestamp, setTimestamp] = useState("4:20");
  const [title, setTitle] = useState("Title");
  const [channelName, setChannelName] = useState("Channel");
  const [views, setViews] = useState("69K");
  const [exactViews, setExactViews] = useState(false);
  const [timeAgo, setTimeAgo] = useState("23");
  const [increment, setIncrement] = useState("minute");
  const [verified, setVerified] = useState(false);
  //   to display images
  const [selectedThumb, setSelectedThumb] = useState();
  const [previewThumb, setPreviewThumb] = useState();
  const [selectedChannelPic, setSelectedChannelPic] = useState();
  const [previewChannelPic, setPreviewChannelPic] = useState();
  // switch
  const [switchDevice, setSwitchDevice] = useState(false);

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
    localStorage.setItem("selectedThumb", ev.target.value[0]);
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
    localStorage.setItem("selectedChannelPic", ev.target.value[0]);
  }

  // convert html into png file
  const mobileRef = useRef(null);
  const desktopRef = useRef(null);

  const downloadImageMobile = async () => {
    // checks if dark mode is true
    // backgroundColor: "#0f0f0f",
    const dataUrl = await htmlToImage.toPng(mobileRef.current, {
      backgroundColor: "white",
    });

    // download image
    const link = document.createElement("a");
    link.download = "dumbnail.png";
    link.href = dataUrl;
    link.click();
  };

  const downloadImageDesktop = async () => {
    // checks if dark mode is true
    // backgroundColor: "#0f0f0f",
    const dataUrl = await htmlToImage.toPng(desktopRef.current, {
      backgroundColor: "white",
    });

    // download image
    const link = document.createElement("a");
    link.download = "dumbnail.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="create">
      <div className="container">
        {/* short about section here */}
        <div className="d-flex form-control p-4">
          <div className="p-2">
            <div className="preview-header">
              <div className="switch">
                <Switch
                  isOn={switchDevice}
                  handleToggle={() => setSwitchDevice(!switchDevice)}
                />
              </div>
              {switchDevice ? <h4>[ Desktop ]</h4> : <h4>[ Mobile ]</h4>}
            </div>
            {switchDevice ? (
              <div className="">
                <div
                  className="desktop-preview border border-bottom-0"
                  ref={desktopRef}
                >
                  <DesktopPreview
                    timestamp={timestamp}
                    title={title}
                    channelName={channelName}
                    views={views}
                    timeAgo={timeAgo}
                    increment={increment}
                    // to display images
                    uploadThumbnail={uploadThumbnail}
                    uploadChannelPic={uploadChannelPic}
                    selectedThumb={selectedThumb}
                    previewThumb={previewThumb}
                    selectedChannelPic={selectedChannelPic}
                    previewChannelPic={previewChannelPic}
                  />
                </div>
                {/* <Download downloadImage={downloadImageDesktop} /> */}
              </div>
            ) : (
              <div className="">
                <div
                  className="mobile-preview border border-bottom-0"
                  ref={mobileRef}
                >
                  <MobilePreview
                    timestamp={timestamp}
                    title={title}
                    channelName={channelName}
                    views={views}
                    timeAgo={timeAgo}
                    increment={increment}
                    // to display images
                    uploadThumbnail={uploadThumbnail}
                    uploadChannelPic={uploadChannelPic}
                    selectedThumb={selectedThumb}
                    previewThumb={previewThumb}
                    selectedChannelPic={selectedChannelPic}
                    previewChannelPic={previewChannelPic}
                  />
                </div>
                {/* <Download downloadImage={downloadImageMobile} /> */}
              </div>
            )}
            <div className="d-flex">
              <div>
                {switchDevice ? (
                  <Download downloadImage={downloadImageDesktop} />
                ) : (
                  <Download downloadImage={downloadImageMobile} />
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="p-2">
              <Info
                setTimestamp={setTimestamp}
                setTitle={setTitle}
                setChannelName={setChannelName}
                setViews={setViews}
                exactViews={exactViews}
                setExactViews={setExactViews}
                setTimeAgo={setTimeAgo}
                setIncrement={setIncrement}
                uploadThumbnail={uploadThumbnail}
                uploadChannelPic={uploadChannelPic}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
