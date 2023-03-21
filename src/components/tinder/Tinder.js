import React, { useEffect, useState } from "react";
import { getHtmlDate } from "../../helpers/DateTimeHelpers";
import Info from "./info/Info";
import Preview from "./preview/Preview";

function Tinder() {
  const [match, setMatch] = useState("Match");
  const [matchedOn, setMatchedOn] = useState(getHtmlDate());
  const [messages, setMessages] = useState([
    // make this funnier obv
    { id: 0, from: "you", msg: "hey" },
    { id: 1, from: "them", msg: "nah" },
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
        <Info
          messages={messages}
          setMessages={setMessages}
          match={match}
          setMatch={setMatch}
          matchedOn={matchedOn}
          setMatchedOn={setMatchedOn}
          setSelectedPic={setSelectedPic}
          selectedPic={selectedPic}
          previewPic={previewPic}
          picZoom={picZoom}
          picX={picX}
          picY={picY}
          setPicZoom={setPicZoom}
          setPicX={setPicX}
          setPicY={setPicY}
        />
      </div>

      <Preview
        match={match}
        matchedOn={matchedOn}
        messages={messages}
        selectedPic={selectedPic}
        previewPic={previewPic}
        picZoom={picZoom}
        picX={picX}
        picY={picY}
      />
    </div>
  );
}

export default Tinder;
