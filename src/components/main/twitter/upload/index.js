import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TweetUpload from "./tweet";
import "./style.index.scss";
import TwitterProfilePic from "./profile";

function TwitterUpload({
  setName,
  verified,
  setVerified,
  setHandle,
  setTweet,
  setDevice,
  setIsActive,
  time,
  setTime,
  setMeridiem,
  setDate,
  date,
  setIsPopular,
  setPopular,
  uploadProf,
  previewProf,
  setPreviewProf,
  selectedProf,
  setSelectedProf,
  profZoom,
  profX,
  profY,
  setProfX,
  setProfY,
  setProfZoom,
}) {
  return (
    <div className="twitter-upload-container">
      <Tabs
        defaultActiveKey="tweet"
        id="uncontrolled-tab-example"
        className="twitter-upload-header mb-3"
      >
        <Tab eventKey="tweet" title="Tweet">
          <TweetUpload
            setName={setName}
            verified={verified}
            setVerified={setVerified}
            setHandle={setHandle}
            setTweet={setTweet}
            setDevice={setDevice}
            setIsActive={setIsActive}
            time={time}
            setTime={setTime}
            setMeridiem={setMeridiem}
            setDate={setDate}
            date={date}
            setIsPopular={setIsPopular}
            setPopular={setPopular}
            setSelectedProf={setSelectedProf}
          />
        </Tab>
        <Tab eventKey="upload" title="Upload">
          <TwitterProfilePic
            uploadProf={uploadProf}
            previewProf={previewProf}
            setPreviewProf={setPreviewProf}
            selectedProf={selectedProf}
            setSelectedProf={setSelectedProf}
            profZoom={profZoom}
            profX={profX}
            profY={profY}
            setProfX={setProfX}
            setProfY={setProfY}
            setProfZoom={setProfZoom}
          />
        </Tab>
      </Tabs>
    </div>
  );
}

export default TwitterUpload;
