import React, { useRef } from "react";
import { download } from "../../../helpers/Helpers";
import PreviewHeader from "../../previewHeader/previewHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import headerIcons from "./../../../assets/images/tinder/tinder-header-icons.png";
import "./Preview.scss";
import { lastMessage } from "../../../helpers/MessageHelpers";
import { formatDateToMDDYY } from "../../../helpers/DateTimeHelpers";

function Preview({
  match,
  matchedOn,
  messages,
  selectedPic,
  previewPic,
  picZoom,
  picX,
  picY,
}) {
  const ref = useRef(null);

  const x = picX * 0.1;
  const y = picY * 0.1;

  function lastPicture(id) {
    return messages[id + 1]?.from !== "them" && "last-picture";
  }

  return (
    <div className="preview-container tinder">
      <PreviewHeader needsSwitch={false} />
      <div className="border border-dark">
        <div ref={ref} className="preview-ref bg-white">
          <div className="message-header">
            <div>
              <FontAwesomeIcon
                className="tinder-chevron-left"
                icon={["fa", "chevron-left"]}
              />
            </div>
            <div className="match">
              <div className="custom-match-pic">
                {selectedPic ? (
                  <img
                    src={previewPic}
                    alt=""
                    style={{
                      transform: `scale(${picZoom}%) translate(${x}px, ${y}px)`,
                    }}
                  />
                ) : (
                  <div className="match-pic-backdrop"></div>
                )}
              </div>
              <div className="name">{match}</div>
            </div>
            <div>
              <img src={headerIcons} alt="" className="tinder-header-icons" />
            </div>
          </div>
          <div className="message-body">
            <div className="matched-on">
              YOU MATCHED WITH {match.toUpperCase()} ON{" "}
              {formatDateToMDDYY(matchedOn)}
            </div>
            {messages.map((m) => {
              return m.from === "them" ? (
                <div className="from-match" key={m.id}>
                  <div className="d-flex">
                    <div>
                      {lastPicture(m.id) && (
                        <div className="custom-match-pic">
                          {selectedPic ? (
                            <img
                              src={previewPic}
                              alt=""
                              style={{
                                transform: `scale(${picZoom}%) translate(${x}px, ${y}px)`,
                              }}
                            />
                          ) : (
                            <div className="match-pic-backdrop "></div>
                          )}
                        </div>
                      )}
                    </div>
                    <div
                      className={`msg tinder-msg ${lastMessage(
                        m.id,
                        messages
                      )} ${lastPicture(m.id)}`}
                    >
                      <div>{m.msg}</div>
                    </div>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={["fa-regular", "heart"]} />
                  </div>
                </div>
              ) : (
                <div key={m.id}>
                  <>
                    {m.from === "you" ? (
                      <div className="from-you" key={m.id}>
                        <div
                          className={`msg tinder-msg ${lastMessage(
                            m.id,
                            messages
                          )}`}
                        >
                          {m.msg}
                        </div>
                      </div>
                    ) : (
                      <div className="time" key={m.id}>
                        time
                      </div>
                    )}
                  </>
                </div>
              );
            })}
          </div>
        </div>
        <button
          className="tinder-download"
          onClick={() => {
            download(ref, "match");
          }}
        >
          DOWNLOAD
        </button>
      </div>
    </div>
  );
}

export default Preview;
