import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { get12HourTime } from "../../helpers/DateTimeHelpers";
import { getDate } from "../../helpers/DateTimeHelpers";
import TwitterPreview from "./preview/TwitterPreview";
import TwitterProfile from "./profile/TwitterProfile";
import Tweet from "./tweet/Tweet";
import "./Twitter.scss";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

function Twitter(props) {
  //   Twitter
  const [name, setName] = useState("Name");
  const [verified, setVerified] = useState(true);
  const [company, setCompany] = useState(false);
  const [handle, setHandle] = useState("Handle");
  const [tweet, setTweet] = useState("This is a tweet.");
  const [time, setTime] = useState(get12HourTime());
  const [date, setDate] = useState(getDate());
  // previous version
  const [device, setDevice] = useState("Twitter For iPhone");
  const [views, setViews] = useState("69K");
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

  // track analytics
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname);
  }, [location]);

  useEffect(() => {
    if (!selectedProf) {
      setSelectedProf(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedProf);
    setPreviewProf(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedProf]);

  return (
    <div className="main-components">
      <div className="upload-containers-grid">
        <TwitterProfile
          setName={setName}
          setHandle={setHandle}
          setIsPopular={setIsPopular}
          isPopular={isPopular}
          setPopular={setPopular}
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
          setCompany={setCompany}
          setVerified={setVerified}
        />
        <Tweet
          setName={setName}
          setViews={setViews}
          verified={verified}
          company={company}
          setCompany={setCompany}
          setVerified={setVerified}
          setHandle={setHandle}
          setTweet={setTweet}
          setDevice={setDevice}
          setTime={setTime}
          setDate={setDate}
          date={date}
          time={time}
        />
        <div className="bottom-container"></div>
      </div>
      <div className="upload-containers-tabs twitter">
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
              setCompany={setCompany}
              setVerified={setVerified}
            />
          </Tab>
          <Tab eventKey="tweet" title="Tweet">
            <Tweet
              setName={setName}
              setViews={setViews}
              verified={verified}
              setVerified={setVerified}
              setHandle={setHandle}
              setTweet={setTweet}
              setDevice={setDevice}
              time={time}
              setTime={setTime}
              setDate={setDate}
              date={date}
              company={company}
              setCompany={setCompany}
            />
          </Tab>
        </Tabs>
      </div>
      <TwitterPreview
        switchDevice={switchDevice}
        setSwitchDevice={setSwitchDevice}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        name={name}
        verified={verified}
        company={company}
        handle={handle}
        tweet={tweet}
        time={time}
        date={date}
        views={views}
        device={device}
        isPopular={isPopular}
        popular={popular}
        previewProf={previewProf}
        selectedProf={selectedProf}
        profZoom={profZoom}
        profX={profX}
        profY={profY}
      />
    </div>
  );
}

export default Twitter;
