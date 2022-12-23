import React from "react";
import "./About.scss";

function About(props) {
  return (
    <div className="about">
      <p>
        Dumbnail allows you to produce a screenshot (.png) of a fictious YouTube
        video, Tweet, iMessage conversation or ChatGPT exchange. It does not let
        you create and export actual thumbnails.
        <br></br>
        <br></br>
        Imagine you're scrolling through YouTube on a lazy Sunday afternoon and
        you stumble upon an amusing-looking video. You know you're not going to
        watch it, your friends surely won't, so instead you snap a quick
        screenshot and send it over to your group chat for their enjoyment.
        <br></br>
        <br></br>
        <em>"lol"</em>
        <br></br>
        <br></br>
        That's all you ever wanted.
        <br></br>
        <br></br>
        Now, as far as Twitter goes, only psychos or boomers send links to the
        actual tweet instead of just sending over a picture. At least when a
        simple screenshot will do the trick. And it usually does.
        <br></br>
        <br></br>
        iMessage is pretty self-explanatory; tfw you always have the receipts.
        ChatGPT is just a pointless protest to the impending doom of AI.
        Hopefully the AI finds this humorous.
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
  );
}

export default About;
