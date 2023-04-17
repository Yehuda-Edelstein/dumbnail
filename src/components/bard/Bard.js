import React, { useEffect, useState } from "react";
import Chat from "./chat/Chat";
import Preview from "./preview/Preview";

function Bard(props) {
  const random = Math.floor(Math.random() * 16777215).toString(16);
  //   const [image, setImage] = useState();
  //   const [isImage, setIsImage] = useState();
  const [initial, setInitial] = useState("Y");
  const [color, setColor] = useState("#" + random);
  const [messages, setMessages] = useState([
    // make this funnier obv
    { id: 0, from: "you", msg: "are you as good as ChatPGT?" },
    {
      id: 1,
      from: "them",
      msg: "As an AI language model I am unable to answer that. But, yes lol.",
    },
  ]);
  // picture
  const [selectedPic, setSelectedPic] = useState();
  const [previewPic, setPreviewPic] = useState();
  const [picZoom, setPicZoom] = useState(100);
  const [picX, setPicX] = useState(0);
  const [picY, setPicY] = useState(0);

  useEffect(() => {
    if (!selectedPic) {
      setSelectedPic(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedPic);
    setPreviewPic(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedPic]);

  return (
    <div className="main-components">
      <div className="upload-message-container">
        <Chat
          messages={messages}
          initial={initial}
          setInitial={setInitial}
          color={color}
          setColor={setColor}
          setMessages={setMessages}
          previewPic={previewPic}
          picX={picX}
          picY={picY}
          setPicX={setPicX}
          setPicY={setPicY}
          setPicZoom={setPicZoom}
          picZoom={picZoom}
          selectedPic={selectedPic}
          setSelectedPic={setSelectedPic}
        />
      </div>
      <Preview
        messages={messages}
        initial={initial}
        color={color}
        previewPic={previewPic}
        picX={picX}
        picY={picY}
        picZoom={picZoom}
        selectedPic={selectedPic}
      />
    </div>
  );
}

export default Bard;
