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
              Dumbnail allows you to produce a screenshot (png) of a fictious
              YouTube video. It does not let you create and export actual
              thumbnails.
              <br></br>
              <br></br>
              Imagine you're scrolling through YouTube on a lazy Sunday
              afternoon and you stumble upon an amusing-looking video. You know
              you're not going to watch it, your friends surely won't, so
              instead you snap take a quick screenshot and send it over to your
              group chat for their enjoyment.
              <br></br>
              <br></br>
              <em>"lol"</em>
              <br></br>
              <br></br>
              That's all you ever wanted.
              <br></br>
              <br></br>
              This website allows you to create that amusing screenshot yourself
              before the video ever exists. Endless memes at your disposal.Just
              think of the possibilities.
              <br></br>
              <br></br>
              If you like the site give us a follow and/or a shoutout on{" "}
              <a
                href="https://twitter.com/dumbnail2"
                rel="noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Twitter
              </a>
              <br></br>
              <br></br>~ Y.E.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
