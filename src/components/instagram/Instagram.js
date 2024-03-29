import React, { useState, useEffect } from "react";
import Photo from "./photo/Photo";
import Info from "./info/Info";
import Preview from "./preview/Preview";
import { Tab, Tabs } from "react-bootstrap";
import "./Instagram.scss";
import Account from "./account/Account";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const d = new Date();
const m = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Instagram(props) {
  const [selectedPhoto, setSelectedPhoto] = useState();
  const [previewPhoto, setPreviewPhoto] = useState();
  const [selectedProfile, setSelectedProfile] = useState();
  const [previewProfile, setPreviewProfile] = useState();
  const [photoZoom, setPhotoZoom] = useState(100);
  const [photoX, setPhotoX] = useState(0);
  const [photoY, setPhotoY] = useState(0);
  const [profileZoom, setProfileZoom] = useState(100);
  const [profileX, setProfileX] = useState(0);
  const [profileY, setProfileY] = useState(0);
  //
  // may be able to get rid of this and just use popular itself as boolean
  const [isPopular, setIsPopular] = useState(false);
  const [popular, setPopular] = useState();

  const [username, setUsername] = useState("Username");
  // const [location, setLocation] = useState(null);
  const [isVerified, setIsVerified] = useState(true);
  // const [areFollowing, setAreFollowing] = useState(true);
  // const [hasStory, setHasStory] = useState(false);
  const [likes, setLikes] = useState(420);
  const [description, setDescription] = useState("This is a description");
  const [comments, setComments] = useState(69);
  const [month, setMonth] = useState(m[d.getMonth()]);
  const [day, setDay] = useState(d.getDate());
  const [year, setYear] = useState(d.getFullYear());
  // const [older, setOlder] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
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
    if (!selectedPhoto) {
      setPreviewPhoto(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedPhoto);
    setPreviewPhoto(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedPhoto]);

  useEffect(() => {
    if (!selectedProfile) {
      setPreviewProfile(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedProfile);
    setPreviewProfile(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedProfile]);

  return (
    <div className="main-components">
      <div className="upload-containers-grid">
        <Photo
          previewPhoto={previewPhoto}
          selectedPhoto={selectedPhoto}
          setPreviewPhoto={setPreviewPhoto}
          setSelectedPhoto={setSelectedPhoto}
          photoZoom={photoZoom}
          photoX={photoX}
          photoY={photoY}
          setPhotoZoom={setPhotoZoom}
          setPhotoX={setPhotoX}
          setPhotoY={setPhotoY}
        />
        <Account
          isPopular={isPopular}
          setIsPopular={setIsPopular}
          setPopular={setPopular}
          setUsername={setUsername}
          preview={previewProfile}
          selected={selectedProfile}
          setPreview={setPreviewProfile}
          setSelected={setSelectedProfile}
          x={profileX}
          setX={setProfileX}
          y={profileY}
          setY={setProfileY}
          zoom={profileZoom}
          setZoom={setProfileZoom}
        />
        <Info
          setUsername={setUsername}
          isVerified={isVerified}
          setIsVerified={setIsVerified}
          setLikes={setLikes}
          setDescription={setDescription}
          setComments={setComments}
          setMonth={setMonth}
          setDay={setDay}
          setYear={setYear}
          setIsLiked={setIsLiked}
        />
        <div className="bottom-container"></div>
      </div>
      <div className="upload-containers-tabs instagram">
        <Tabs
          defaultActiveKey="photo"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="photo" title="Photo">
            <Photo
              previewPhoto={previewPhoto}
              selectedPhoto={selectedPhoto}
              setPreviewPhoto={setPreviewPhoto}
              setSelectedPhoto={setSelectedPhoto}
              photoZoom={photoZoom}
              photoX={photoX}
              photoY={photoY}
              setPhotoZoom={setPhotoZoom}
              setPhotoX={setPhotoX}
              setPhotoY={setPhotoY}
            />
          </Tab>
          <Tab eventKey="account" title="Account">
            <Account
              isPopular={isPopular}
              setIsPopular={setIsPopular}
              setPopular={setPopular}
              setUsername={setUsername}
              preview={previewProfile}
              selected={selectedProfile}
              setPreview={setPreviewProfile}
              setSelected={setSelectedProfile}
              x={profileX}
              y={profileY}
              zoom={profileZoom}
              setX={setProfileX}
              setY={setProfileY}
              setZoom={setProfileZoom}
            />
          </Tab>
          <Tab eventKey="info" title="Info">
            <Info
              setUsername={setUsername}
              isVerified={isVerified}
              setIsVerified={setIsVerified}
              setLikes={setLikes}
              setDescription={setDescription}
              setComments={setComments}
              setMonth={setMonth}
              setDay={setDay}
              setYear={setYear}
              setIsLiked={setIsLiked}
            />
          </Tab>
        </Tabs>
      </div>
      <Preview
        isPopular={isPopular}
        popular={popular}
        photoX={photoX}
        photoY={photoY}
        photoZoom={photoZoom}
        profileX={profileX}
        profileY={profileY}
        profileZoom={profileZoom}
        selectedPhoto={selectedPhoto}
        previewPhoto={previewPhoto}
        selectedProfile={selectedProfile}
        previewProfile={previewProfile}
        switchDevice={switchDevice}
        setSwitchDevice={setSwitchDevice}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        username={username}
        isVerified={isVerified}
        likes={likes}
        description={description}
        comments={comments}
        month={month}
        day={day}
        year={year}
        isLiked={isLiked}
      />
    </div>
  );
}

export default Instagram;
