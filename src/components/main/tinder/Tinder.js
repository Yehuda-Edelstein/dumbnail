import React, { useState } from "react";
import { getDate } from "../../../helpers/Helpers";
import Info from "./info/Info";
import Preview from "./preview/Preview";

function Tinder() {
  const [match, setMatch] = useState("Match");
  const [matchedOn, setMatchedOn] = useState(getDate());
  const [messages, setMessages] = useState([
    // make this funnier obv
    { id: 0, from: "you", msg: "You are fine asf" },
    { id: 1, from: "them", msg: "message from them" },
  ]);
  // picture
  const [selectedPic, setSelectedPic] = useState();
  const [previewPic, setPreviewPic] = useState();
  const [picZoom, setPicZoom] = useState(100);
  const [picX, setPicX] = useState(0);
  const [picY, setPicY] = useState(0);
  return (
    <div className="component">
      <Info
        messages={messages}
        setMessages={setMessages}
        match={match}
        setMatch={setMatch}
        matchedOn={matchedOn}
        setMatchedOn={setMatchedOn}
        setSelectedPic={setSelectedPic}
        setPreviewPic={setPreviewPic}
        selectedPic={selectedPic}
        previewPic={previewPic}
        picZoom={picZoom}
        picX={picX}
        picY={picY}
        setPicZoom={setPicZoom}
        setPicX={setPicX}
        setPicY={setPicY}
      />
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
