import React from "react";
import "./style.index.scss";

function About(props) {
  return (
    <div className="about">
      <div className="">
        {/* short about section here */}
        <div className="content p-3">
          <div className="p-3">
            <p>
              Although this site was made for the purpose of entertainment, I
              feel it's important to defend myself against those who think that
              facilitating the creation of fictious thumbnails (or really{" "}
              <em>screenshots</em> of thumbnails) is a bad idea, on account of
              all the fake news out there in the ether already.
              <br></br>
              <br></br>
              ???
              <br></br>
              <br></br>
              If you want to contribute go check out the github...
              <br></br>
              <br></br>
              There are a lot of ideas already in the notes file so start there
              if you don't have any particular issues you're dying to fix.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
