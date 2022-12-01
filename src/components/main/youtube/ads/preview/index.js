import React from "react";
import AdSense from "react-adsense";

function PreviewAd(props) {
  return (
    <div>
      <AdSense.Google
        client="ca-pub-2806029732302260"
        slot="7316418125"
        style={{ display: "block", maxHeight: "95" }}
        format="auto"
        responsive="true"
        test="true"
      />
    </div>
  );
}

export default PreviewAd;
