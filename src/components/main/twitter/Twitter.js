// VERSION 1.0
import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import TwitterPreview from "./preview/TwitterPreview";
import TwitterProfile from "./upload/profile/TwitterProfile";
import Tweet from "./upload/tweet/Tweet";
import "./Twitter.scss";

const today = new Date();
const year = today.getFullYear().toString().slice(-2);
const hours = today.getHours();
const dNow = `${today.getMonth() + 1}/${today.getDate()}/${year}`;
const tNow =
  today.getMinutes() < 10
    ? `${hours}:0${today.getMinutes()}`
    : `${hours}:${today.getMinutes()}`;

function Twitter(props) {
  // is preview active
  const [isActive, setIsActive] = useState(false);
  //   Twitter
  const [name, setName] = useState("Name");
  const [verified, setVerified] = useState(true);
  const [handle, setHandle] = useState("Handle");
  const [tweet, setTweet] = useState("This is a tweet.");
  const [time, setTime] = useState(tNow);
  const [date, setDate] = useState(dNow);
  const [device, setDevice] = useState("Twitter For iPhone");
  // const [includeLikes, setIncludeLikes] = useState(false);
  // upload
  const [selectedProf, setSelectedProf] = useState();
  const [previewProf, setPreviewProf] = useState();
  const [profZoom, setProfZoom] = useState(100);
  const [profX, setProfX] = useState(0);
  const [profY, setProfY] = useState(0);
  // popular
  const [isPopular, setIsPopular] = useState(false);
  const [popular, setPopular] = useState();
  // add likes etc. V.2
  // switch
  const [switchDevice, setSwitchDevice] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (!selectedProf) {
      setSelectedProf(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedProf);
    setPreviewProf(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedProf]);

  function uploadProf(ev) {
    setIsPopular(false);
    if (!ev.target.files || ev.target.files.length === 0) {
      setSelectedProf(undefined);
      return;
    }
    setIsActive(true);
    setSelectedProf(ev.target.files[0]);
  }
  return (
    <div className="main-content">
      <div className="upload-content">
        <TwitterProfile
          setName={setName}
          setHandle={setHandle}
          setIsPopular={setIsPopular}
          isPopular={isPopular}
          setPopular={setPopular}
          uploadProf={uploadProf}
          previewProf={previewProf}
          setPreviewProf={setPreviewProf}
          setSelectedProf={setSelectedProf}
          selectedProf={selectedProf}
          profZoom={profZoom}
          profX={profX}
          profY={profY}
          setProfX={setProfX}
          setProfY={setProfY}
          setProfZoom={setProfZoom}
        />
        <Tweet
          setName={setName}
          verified={verified}
          setVerified={setVerified}
          setHandle={setHandle}
          setTweet={setTweet}
          setDevice={setDevice}
          setIsActive={setIsActive}
          time={time}
          setTime={setTime}
          setDate={setDate}
          date={date}
        />
      </div>
      <div className="twitter-content-tabs">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="profile" title="Profile">
            <TwitterProfile
              setName={setName}
              setHandle={setHandle}
              setIsPopular={setIsPopular}
              isPopular={isPopular}
              setPopular={setPopular}
              uploadProf={uploadProf}
              previewProf={previewProf}
              setPreviewProf={setPreviewProf}
              setSelectedProf={setSelectedProf}
              selectedProf={selectedProf}
              profZoom={profZoom}
              profX={profX}
              profY={profY}
              setProfX={setProfX}
              setProfY={setProfY}
              setProfZoom={setProfZoom}
            />
          </Tab>

          <Tab eventKey="tweet" title="Tweet">
            <Tweet
              setName={setName}
              verified={verified}
              setVerified={setVerified}
              setHandle={setHandle}
              setTweet={setTweet}
              setDevice={setDevice}
              setIsActive={setIsActive}
              time={time}
              setTime={setTime}
              setDate={setDate}
              date={date}
            />
          </Tab>
        </Tabs>
      </div>
      <div>
        <TwitterPreview
          switchDevice={switchDevice}
          setSwitchDevice={setSwitchDevice}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          name={name}
          verified={verified}
          handle={handle}
          tweet={tweet}
          time={time}
          date={date}
          device={device}
          isActive={isActive}
          isPopular={isPopular}
          popular={popular}
          previewProf={previewProf}
          selectedProf={selectedProf}
          profZoom={profZoom}
          profX={profX}
          profY={profY}
        />
      </div>
    </div>
  );
}

export default Twitter;
