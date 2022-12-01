import React, { useEffect, useState, useRef } from "react";
import AdSense from "react-adsense";
// import DesktopPreview from "./preview/desktop/index.js";
import Info from "./upload/info/index.js";
import * as htmlToImage from "html-to-image";
import Download from "./download/index.js";
import Switch from "./switch/index.js";
import MobilePreview from "./preview/mobile/index.js";
import "./style.index.scss";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import UploadThumb from "./upload/thumb/index.js";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import UploadChannel from "./upload/channel/index.js";
// import PreviewAd from "./ads/preview/index.js";

function YouTube() {
  // is preview active
  const [isActive, setIsActive] = useState(false);
  // YouTube
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
  // change mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  // switch
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
    setIsActive(true);
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
    setIsActive(true);
    setSelectedChannelPic(ev.target.files[0]);
  }

  // convert html into png file
  const mobileRef = useRef(null);
  // const desktopRef = useRef(null);

  const downloadImageMobile = async () => {
    // checks if dark mode is true
    // backgroundColor: "#0f0f0f",
    try {
      const dataUrl = await htmlToImage.toPng(mobileRef.current, {
        backgroundColor: "white",
      });
      // download image
      const link = document.createElement("a");
      link.download = "dumbnail.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.log("Ohhhh nooo!");
      console.log(err);
    }
  };

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
    <div className="content p-3 pt-0">
      <div className="upload-content-container">
        <div className="d-grid" style={{ maxWidth: "fit-content" }}>
          <Tabs
            defaultActiveKey="thumbnail"
            id="uncontrolled-tab-example"
            className="upload-header mb-3"
          >
            <Tab eventKey="thumbnail" title="Thumbnail">
              <UploadThumb
                uploadThumbnail={uploadThumbnail}
                previewThumb={previewThumb}
                selectedThumb={selectedThumb}
                // for cropping
                thumbZoom={thumbZoom}
                setThumbZoom={setThumbZoom}
                thumbX={thumbX}
                thumbY={thumbY}
                setThumbX={setThumbX}
                setThumbY={setThumbY}
                //
                setIsTemplate={setIsTemplate}
                setTemplate={setTemplate}
                setPreviewThumb={setPreviewThumb}
                setPreviewChannelPic={setPreviewChannelPic}
                setChannelName={setChannelName}
                uploadChannelPic={uploadChannelPic}
                setSelectedThumb={setSelectedThumb}
                setIsActive={setIsActive}
                setChannelTemp={setChannelTemp}
                setIsChannelTemp={setIsChannelTemp}
              />
              {/* <div className="sm-thumbnail-ad-box">AD BOX #3</div> */}
            </Tab>
            <Tab eventKey="channel" title="Channel">
              <UploadChannel
                setPreviewChannelPic={setPreviewChannelPic}
                setSelectedChannelPic={setSelectedChannelPic}
                uploadChannelPic={uploadChannelPic}
                previewChannelPic={previewChannelPic}
                selectedChannelPic={selectedChannelPic}
                // for cropping
                channelPicZoom={channelPicZoom}
                setChannelPicZoom={setChannelPicZoom}
                channelPicX={channelPicX}
                channelPicY={channelPicY}
                setChannelPicX={setChannelPicX}
                setChannelPicY={setChannelPicY}
                // for popular channels
                setChannelName={setChannelName}
                setIsTemplate={setIsTemplate}
                setTemplate={setTemplate}
                setIsActive={setIsActive}
                setChannelTemp={setChannelTemp}
                setIsChannelTemp={setIsChannelTemp}
              />
              {/* <div className="sm-thumbnail-ad-box">AD BOX #3</div> */}
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
      </div>
      <div className="preview">
        <h5>Preview</h5>
        <div className="preview-header">
          <OverlayTrigger
            key={"right"}
            placement={"right"}
            delay={{ show: "700", hide: "100" }}
            overlay={<Tooltip id={"tooltip-right"}>Toggle mode</Tooltip>}
          >
            <div className="switch">
              <Switch
                isOn={switchDevice}
                handleToggle={() => {
                  setSwitchDevice(!switchDevice);
                  setIsDarkMode(!isDarkMode);
                }}
              />
            </div>
          </OverlayTrigger>
          {switchDevice ? <h4>[ Dark ]</h4> : <h4>[ Light ]</h4>}
        </div>
        <div className="preview-container">
          {/* {switchDevice && ( */}
          <div
            className={
              isDarkMode
                ? "border border-dark border-bottom-0"
                : "border  border-dark border-bottom-0"
            }
          >
            {" "}
            <div ref={mobileRef}>
              <MobilePreview
                duration={duration}
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
                // change mode
                isDarkMode={isDarkMode}
                // for cropping
                thumbZoom={thumbZoom}
                setThumbZoom={setThumbZoom}
                thumbX={thumbX}
                thumbY={thumbY}
                channelPicZoom={channelPicZoom}
                channelPicX={channelPicX}
                channelPicY={channelPicY}
                // templates
                isTemplate={isTemplate}
                template={template}
                channelTemp={channelTemp}
                isChannelTemp={isChannelTemp}
              />
            </div>
            {/*) : (
            // <div className="border border-bottom-0">
            //   <div className="desktop-preview" ref={desktopRef}>
            //     <DesktopPreview
            //       Duration={Duration}
            //       title={title}
            //       channelName={channelName}
            //       views={views}
            //       timeAgo={timeAgo}
            //       increment={increment}
            //       // to display images
            //       uploadThumbnail={uploadThumbnail}
            //       uploadChannelPic={uploadChannelPic}
            //       selectedThumb={selectedThumb}
            //       previewThumb={previewThumb}
            //       selectedChannelPic={selectedChannelPic}
            //       previewChannelPic={previewChannelPic}
            //       // for cropping
            //       thumbZoom={thumbZoom}
            //       setThumbZoom={setThumbZoom}
            //       thumbX={thumbX}
            //       thumbY={thumbY}
            //       setThumbX={setThumbX}
            //       setThumbY={setThumbY}
            //       // templates
            //       isTemplate={isTemplate}
            //       template={template}
            //       channelTemp={channelTemp}
            //     />
            //   </div>
            // </div>
            // <div className="border border-bottom-0">
            //   <div className="mobile-preview" ref={mobileRef}>
            //     <MobilePreview
            //       Duration={Duration}
            //       title={title}
            //       channelName={channelName}
            //       views={views}
            //       timeAgo={timeAgo}
            //       increment={increment}
            //       // to display images
            //       uploadThumbnail={uploadThumbnail}
            //       uploadChannelPic={uploadChannelPic}
            //       selectedThumb={selectedThumb}
            //       previewThumb={previewThumb}
            //       selectedChannelPic={selectedChannelPic}
            //       previewChannelPic={previewChannelPic}
            //       // for cropping
            //       thumbZoom={thumbZoom}
            //       setThumbZoom={setThumbZoom}
            //       thumbX={thumbX}
            //       thumbY={thumbY}
            //       setThumbX={setThumbX}
            //       setThumbY={setThumbY}
            //       // templates
            //       isTemplate={isTemplate}
            //       template={template}
            //       channelTemp={channelTemp}
            //     />
            //   </div>
            // </div>
             // )} */}
          </div>
          <div className="d-flex">
            <div>
              {/* {switchDevice ? ( */}
              {/* <Download
                className="download-desktop"
                isActive={isActive}
                downloadImage={downloadImageDesktop}
              /> */}
              {/* ) : ( */}
              <Download
                className="download-mobile"
                isActive={isActive}
                downloadImage={downloadImageMobile}
              />
              {/* )} */}
            </div>
          </div>
          <div>{/* <PreviewAd /> */}</div>
          {/* <div className="preview-ad-box">AD BOX #1</div> */}
        </div>
      </div>
    </div>
  );
}

export default YouTube;
