import React, { useState, useEffect } from "react";
import TwitterPreview from "./preview";
import TwitterUpload from "./upload";
import "./style.index.scss";

const today = new Date();
const year = today.getFullYear().toString().slice(-2);
const hours = today.getHours() % 12;
const dNow = `${today.getMonth() + 1}/${today.getDate()}/${year}`;
const tNow =
  today.getMinutes() < 10
    ? `${hours}:0${today.getMinutes()}`
    : `${hours}:${today.getMinutes()}`;
function getMeridiem() {
  const hour = today.getHours();
  var meridiem = hour >= 12 ? "PM" : "AM";
  return meridiem;
}

function Twitter(props) {
  // is preview active
  const [isActive, setIsActive] = useState(false);
  //   Twitter
  const [name, setName] = useState("Name");
  const [verified, setVerified] = useState(true);
  const [handle, setHandle] = useState("Handle");
  const [tweet, setTweet] = useState("This is a tweet.");
  const [time, setTime] = useState(tNow);
  const [meridiem, setMeridiem] = useState(getMeridiem());
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
  const [isDarkMode, setIsDarkMode] = useState(false);
  // switch
  const [switchDevice, setSwitchDevice] = useState(false);

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
    <div className="content p-3 pt-0">
      <TwitterUpload
        setName={setName}
        verified={verified}
        setVerified={setVerified}
        setHandle={setHandle}
        setTweet={setTweet}
        setDevice={setDevice}
        setIsActive={setIsActive}
        setMeridiem={setMeridiem}
        time={time}
        setTime={setTime}
        setDate={setDate}
        date={date}
        setIsPopular={setIsPopular}
        setPopular={setPopular}
        // for custom prof pics
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
        meridiem={meridiem}
        date={date}
        device={device}
        isActive={isActive}
        isPopular={isPopular}
        popular={popular}
        // for custom pics
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
