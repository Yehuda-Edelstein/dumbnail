import React, { useState, useEffect } from "react";
import Photo from "./photo/Photo";
import Info from "./info/Info";
import Preview from "./preview/Preview";

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
  const [selectedProfileImage, setSelectedProfileImage] = useState();
  const [previewProfileImage, setPreviewProfileImage] = useState();
  //
  const [username, setUsername] = useState("Username");
  const [location, setLocation] = useState(null);
  const [isVerified, setIsVerified] = useState(true);
  const [areFollowing, setAreFollowing] = useState(true);
  const [hasStory, setHasStory] = useState(false);
  const [likes, setLikes] = useState(420);
  const [description, setDescription] = useState("This is a description");
  const [comments, setComments] = useState(69);
  const [month, setMonth] = useState(m[d.getMonth()]);
  const [day, setDay] = useState(d.getDate());
  const [year, setYear] = useState(d.getFullYear());
  const [older, setOlder] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  //
  const [switchDevice, setSwitchDevice] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  // loading
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!selectedPhoto) {
      setPreviewPhoto(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedPhoto);
    setPreviewPhoto(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedPhoto]);

  function uploadPhoto(ev) {
    setIsLoading(true);
    if (!ev.target.files || ev.target.files.length === 0) {
      setSelectedPhoto(undefined);
      return;
    }
    setSelectedPhoto(ev.target.files[0]);
    setIsLoading(false);
  }

  return (
    <div className="main-content">
      <div className="upload-content">
        <Photo />
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
      </div>
      <div>
        <Preview
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
    </div>
  );
}

export default Instagram;
