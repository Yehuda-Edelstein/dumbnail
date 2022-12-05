/*! For license information please see main.js.LICENSE.txt */
!(function () {
  var e,
    t,
    r,
    n = {
      6753: function (e, t, r) {
        "use strict";
        var n = r(7294),
          a = r(745),
          o = r(3379),
          i = r.n(o),
          l = r(7795),
          c = r.n(l),
          s = r(569),
          p = r.n(s),
          d = r(3565),
          u = r.n(d),
          m = r(9216),
          h = r.n(m),
          f = r(4589),
          g = r.n(f),
          w = r(4800),
          v = {};
        (v.styleTagTransform = g()),
          (v.setAttributes = u()),
          (v.insert = p().bind(null, "head")),
          (v.domAPI = c()),
          (v.insertStyleElement = h()),
          i()(w.Z, v),
          w.Z && w.Z.locals && w.Z.locals,
          r(5805);
        var b = r(4554),
          x = {};
        (x.styleTagTransform = g()),
          (x.setAttributes = u()),
          (x.insert = p().bind(null, "head")),
          (x.domAPI = c()),
          (x.insertStyleElement = h()),
          i()(b.Z, x),
          b.Z && b.Z.locals && b.Z.locals;
        var y = r(4203),
          E = {};
        (E.styleTagTransform = g()),
          (E.setAttributes = u()),
          (E.insert = p().bind(null, "head")),
          (E.domAPI = c()),
          (E.insertStyleElement = h()),
          i()(y.Z, E),
          y.Z && y.Z.locals && y.Z.locals;
        var k = r.p + "src/static/logo.png!extract-loader!html-loader",
          N = function (e) {
            return n.createElement(
              "div",
              { className: "header" },
              n.createElement("img", {
                className: "logo",
                src: k,
                width: "200",
                alt: "",
              })
            );
          },
          T = r(414),
          S = {};
        (S.styleTagTransform = g()),
          (S.setAttributes = u()),
          (S.insert = p().bind(null, "head")),
          (S.domAPI = c()),
          (S.insertStyleElement = h()),
          i()(T.Z, S),
          T.Z && T.Z.locals && T.Z.locals;
        var P = function (e) {
            return n.createElement(
              "div",
              { className: "about" },
              n.createElement(
                "div",
                { className: "" },
                n.createElement(
                  "div",
                  { className: "content p-3" },
                  n.createElement(
                    "div",
                    { className: "p-3" },
                    n.createElement(
                      "p",
                      null,
                      "Dumbnail allows you to produce a screenshot (.png) of a fictious YouTube video or Tweet. It does not let you create and export actual thumbnails.",
                      n.createElement("br", null),
                      n.createElement("br", null),
                      "Imagine you're scrolling through YouTube on a lazy Sunday afternoon and you stumble upon an amusing-looking video. You know you're not going to watch it, your friends surely won't, so instead you snap take a quick screenshot and send it over to your group chat for their enjoyment.",
                      n.createElement("br", null),
                      n.createElement("br", null),
                      n.createElement("em", null, '"lol"'),
                      n.createElement("br", null),
                      n.createElement("br", null),
                      "That's all you ever wanted.",
                      n.createElement("br", null),
                      n.createElement("br", null),
                      "Now, as far as Twitter goes, only psychos or boomers send links to the actual tweet instead of just sending over a picture. At least when a simple screenshot will do the trick. And it usually does.",
                      n.createElement("br", null),
                      n.createElement("br", null),
                      "This website allows you to create that amusing screenshot yourself before the video or tweet ever exists. Endless memes at your disposal. Just think of the possibilities.",
                      n.createElement("br", null),
                      n.createElement("br", null),
                      "If you like the site give us a follow and/or a shoutout on",
                      " ",
                      n.createElement(
                        "a",
                        {
                          href: "https://twitter.com/dumbnail2",
                          rel: "noreferrer",
                          target: "_blank",
                          style: { textDecoration: "none" },
                        },
                        "Twitter"
                      ),
                      n.createElement("br", null),
                      n.createElement("br", null),
                      "~ Y.E."
                    )
                  )
                )
              )
            );
          },
          _ = r(7905),
          C = r(4581),
          Z = r(5534),
          A = {};
        (A.styleTagTransform = g()),
          (A.setAttributes = u()),
          (A.insert = p().bind(null, "head")),
          (A.domAPI = c()),
          (A.insertStyleElement = h()),
          i()(Z.Z, A),
          Z.Z && Z.Z.locals && Z.Z.locals;
        var z = r(4770),
          L = {};
        (L.styleTagTransform = g()),
          (L.setAttributes = u()),
          (L.insert = p().bind(null, "head")),
          (L.domAPI = c()),
          (L.insertStyleElement = h()),
          i()(z.Z, L),
          z.Z && z.Z.locals && z.Z.locals;
        var B = function (e) {
            var t = e.setDuration,
              r = e.setTitle,
              a = e.setChannelName,
              o = e.setViews,
              i = e.exactViews,
              l = e.setTimeAgo,
              c = e.setIncrement;
            return n.createElement(
              "div",
              null,
              n.createElement(
                "div",
                { className: "info-content" },
                n.createElement(
                  "div",
                  { className: "input-container d-grid" },
                  n.createElement("label", null, "Title"),
                  n.createElement("input", {
                    onChange: function (e) {
                      return r(e.target.value);
                    },
                    maxLength: "100",
                  })
                ),
                n.createElement(
                  "div",
                  { className: "input-container d-grid" },
                  n.createElement("label", null, "Channel name"),
                  n.createElement("input", {
                    onChange: function (e) {
                      return a(e.target.value);
                    },
                    maxLength: "60",
                  })
                ),
                n.createElement(
                  "div",
                  { className: "d-flex justify-content-between" },
                  n.createElement(
                    "div",
                    { className: "input-container d-grid" },
                    n.createElement("label", null, "Views"),
                    n.createElement(
                      "div",
                      null,
                      n.createElement("input", {
                        className: "views-input",
                        type: "number",
                        onChange: function (e) {
                          var t, r;
                          o(
                            !0 === i
                              ? e.target.value
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                              : ((t = e.target.value),
                                (r = [
                                  { value: 1, symbol: "" },
                                  { value: 1e3, symbol: "k" },
                                  { value: 1e6, symbol: "M" },
                                  { value: 1e9, symbol: "B" },
                                  { value: 1e12, symbol: "T" },
                                  { value: 1e15, symbol: "P" },
                                  { value: 1e18, symbol: "E" },
                                ]
                                  .slice()
                                  .reverse()
                                  .find(function (e) {
                                    return t >= e.value;
                                  }))
                                  ? (t / r.value)
                                      .toFixed(undefined)
                                      .replace(
                                        /\.0+$|(\.[0-9]*[1-9])0+$/,
                                        "$1"
                                      ) + r.symbol
                                  : "0")
                          );
                        },
                      })
                    )
                  ),
                  n.createElement(
                    "div",
                    { className: "input-container d-grid" },
                    n.createElement("label", null, "Posted"),
                    n.createElement("input", {
                      className: "posted-input",
                      type: "number",
                      onChange: function (e) {
                        return l(e.target.value);
                      },
                    })
                  ),
                  n.createElement(
                    "div",
                    { className: "input-container d-grid" },
                    n.createElement("label", null, "Ago"),
                    n.createElement(
                      "select",
                      {
                        className: "ago-select",
                        onChange: function (e) {
                          return c(e.target.value);
                        },
                      },
                      n.createElement("option", { value: "minute" }, "minutes"),
                      n.createElement("option", { value: "hour" }, "hours"),
                      n.createElement("option", { value: "day" }, "days"),
                      n.createElement("option", { value: "month" }, "months"),
                      n.createElement("option", { value: "year" }, "years")
                    )
                  )
                ),
                n.createElement(
                  "div",
                  { className: "input-container d-grid" },
                  n.createElement("label", null, "Duration"),
                  n.createElement("input", {
                    type: "number",
                    onChange: function (e) {
                      t(
                        e.target.value
                          .toString()
                          .replace(/\B(?=(\d{2})+(?!\d))/g, ":")
                      );
                    },
                  })
                )
              )
            );
          },
          O = r(183),
          j = r(7814),
          I = r(3636),
          D = r(6299),
          M = {};
        (M.styleTagTransform = g()),
          (M.setAttributes = u()),
          (M.insert = p().bind(null, "head")),
          (M.domAPI = c()),
          (M.insertStyleElement = h()),
          i()(D.Z, M),
          D.Z && D.Z.locals && D.Z.locals;
        var G = r(2076),
          R = r(3489),
          K = function (e) {
            var t = e.isActive,
              r = e.downloadImage;
            return n.createElement(
              "div",
              null,
              " ",
              t
                ? n.createElement(
                    "button",
                    { className: "download", onClick: r },
                    "DOWNLOAD",
                    " ",
                    n.createElement(j.G, {
                      icon: (0, I.qv)({ name: "download", style: "solid" }),
                    })
                  )
                : n.createElement(
                    G.Z,
                    {
                      key: "top",
                      placement: "top",
                      delay: { show: "700", hide: "100" },
                      overlay: n.createElement(
                        R.Z,
                        { id: "tooltip-top" },
                        "Upload images or enter info to activate"
                      ),
                    },
                    n.createElement(
                      "div",
                      { className: "not-active" },
                      "DOWNLOAD",
                      " ",
                      n.createElement(j.G, {
                        icon: (0, I.qv)({ name: "download", style: "solid" }),
                      })
                    )
                  )
            );
          },
          Y = r(7384),
          F = {};
        (F.styleTagTransform = g()),
          (F.setAttributes = u()),
          (F.insert = p().bind(null, "head")),
          (F.domAPI = c()),
          (F.insertStyleElement = h()),
          i()(Y.Z, F),
          Y.Z && Y.Z.locals && Y.Z.locals;
        var J = r(9351),
          H = {};
        (H.styleTagTransform = g()),
          (H.setAttributes = u()),
          (H.insert = p().bind(null, "head")),
          (H.domAPI = c()),
          (H.insertStyleElement = h()),
          i()(J.Z, H),
          J.Z && J.Z.locals && J.Z.locals;
        var X = function (e) {
            var t = e.duration,
              a = e.title,
              o = e.channelName,
              i = e.views,
              l = e.timeAgo,
              c = e.increment,
              s = e.selectedThumb,
              p = e.previewThumb,
              d = e.selectedChannelPic,
              u = e.previewChannelPic,
              m = e.thumbZoom,
              h = e.thumbX,
              f = e.thumbY,
              g = e.channelPicZoom,
              w = e.channelPicX,
              v = e.channelPicY,
              b = e.isTemplate,
              x = e.template,
              y = e.channelTemp,
              E = e.isDarkMode,
              k = e.isChannelTemp,
              N = 0.1 * w,
              T = 0.1 * v;
            return n.createElement(
              "div",
              { className: E ? "mobile-preview-dark" : "mobile-preview" },
              n.createElement(
                "div",
                { className: E ? "dark" : "mobile" },
                n.createElement(
                  "div",
                  {
                    className: s
                      ? "thumbnail"
                      : "upload-thumbnail thumbnail-border",
                  },
                  n.createElement("span", { className: "time-stamp" }, t),
                  s &&
                    n.createElement(
                      "div",
                      { className: "cover-this" },
                      n.createElement("img", {
                        className: "pic",
                        src: p,
                        alt: "",
                        style: {
                          transform: "scale("
                            .concat(m, "%) translate(")
                            .concat(h, "px, ")
                            .concat(f, "px)"),
                        },
                      })
                    ),
                  b &&
                    n.createElement("img", {
                      className: "template",
                      alt: "",
                      src: x,
                      style: {},
                    })
                ),
                n.createElement(
                  "div",
                  { className: "d-flex" },
                  n.createElement(
                    "div",
                    { className: "d-flex" },
                    d &&
                      !k &&
                      n.createElement(
                        "div",
                        { className: "channel-pic" },
                        n.createElement("img", {
                          src: u,
                          alt: "",
                          style: {
                            transform: "scale("
                              .concat(g, "%) translate(")
                              .concat(N, "px, ")
                              .concat(T, "px)"),
                          },
                        })
                      ),
                    !d &&
                      k &&
                      n.createElement(
                        "div",
                        { className: "channel-temp" },
                        n.createElement("img", {
                          src: r(5172)("./".concat(y)),
                          alt: "",
                        })
                      ),
                    !d &&
                      !b &&
                      !k &&
                      n.createElement("div", {
                        className: "upload-channel-pic",
                      })
                  ),
                  n.createElement(
                    "div",
                    { className: "info" },
                    n.createElement(
                      "div",
                      { className: "d-flex justify-content-between" },
                      n.createElement("div", { className: "title" }, a),
                      n.createElement(j.G, {
                        className: "mobile-options",
                        icon: ["fa", "ellipsis-vertical"],
                      })
                    ),
                    n.createElement(
                      "div",
                      { className: "details" },
                      n.createElement("div", { className: "channel-name" }, o),
                      n.createElement("span", { className: "bullet" }),
                      n.createElement(
                        "div",
                        { className: "views" },
                        i,
                        " views"
                      ),
                      n.createElement("span", { className: "bullet" }),
                      n.createElement(
                        "div",
                        { className: "time-ago" },
                        l <= 1
                          ? n.createElement(
                              "div",
                              { className: "time-ago" },
                              l,
                              " ",
                              c,
                              " ago"
                            )
                          : n.createElement(
                              "div",
                              { className: "time-ago" },
                              l,
                              " ",
                              c,
                              "s ago"
                            )
                      )
                    )
                  )
                )
              )
            );
          },
          U = r(7542),
          W = {};
        (W.styleTagTransform = g()),
          (W.setAttributes = u()),
          (W.insert = p().bind(null, "head")),
          (W.domAPI = c()),
          (W.insertStyleElement = h()),
          i()(U.Z, W),
          U.Z && U.Z.locals && U.Z.locals;
        var V = r(3567),
          $ = {};
        ($.styleTagTransform = g()),
          ($.setAttributes = u()),
          ($.insert = p().bind(null, "head")),
          ($.domAPI = c()),
          ($.insertStyleElement = h()),
          i()(V.Z, $),
          V.Z && V.Z.locals && V.Z.locals;
        var q =
            r.p +
            "src/static/temps/mrbeast/thumb.png!extract-loader!html-loader",
          Q = r(7251),
          ee = {};
        (ee.styleTagTransform = g()),
          (ee.setAttributes = u()),
          (ee.insert = p().bind(null, "head")),
          (ee.domAPI = c()),
          (ee.insertStyleElement = h()),
          i()(Q.Z, ee),
          Q.Z && Q.Z.locals && Q.Z.locals;
        var te = function (e) {
            var t = e.setChannelName,
              r = e.setIsTemplate,
              a = e.setTemplate,
              o = e.setIsActive,
              i = e.setChannelTemp,
              l = e.setIsChannelTemp;
            return n.createElement(
              "div",
              null,
              n.createElement(
                "div",
                { className: "temp-container" },
                n.createElement("h5", null, "Templates"),
                n.createElement(
                  "div",
                  { className: "d-flex" },
                  n.createElement(
                    "div",
                    {
                      className: "blank-temp d-grid me-3",
                      onClick: function () {
                        r(!1), l(!1), t("Channel");
                      },
                    },
                    n.createElement(
                      "div",
                      { className: "blank-temp-label" },
                      "Reset"
                    )
                  ),
                  n.createElement(
                    "div",
                    {
                      className: "temp d-grid",
                      onClick: function () {
                        o(!0),
                          r(!0),
                          l(!0),
                          a(q),
                          i("Mr_Beast.png"),
                          t("MrBeast");
                      },
                    },
                    n.createElement(
                      "div",
                      { className: "temp-label" },
                      "MrBeast"
                    ),
                    n.createElement("img", {
                      className: "border-top-0",
                      src: q,
                      alt: "",
                    })
                  )
                )
              )
            );
          },
          re = function (e) {
            var t = e.uploadThumbnail,
              r = e.thumbZoom,
              a = e.setThumbZoom,
              o = e.thumbX,
              i = e.thumbY,
              l = e.setThumbX,
              c = e.setThumbY,
              s = e.selectedThumb,
              p = e.previewThumb,
              d = e.setChannelName,
              u = (e.uploadChannelPic, e.setIsTemplate),
              m = e.setTemplate,
              h = e.setPreviewThumb,
              f = e.setSelectedThumb,
              g = e.setIsActive,
              w = e.setChannelTemp,
              v = e.setIsChannelTemp;
            return n.createElement(
              "div",
              null,
              n.createElement(
                "div",
                { className: "d-grid" },
                s
                  ? n.createElement(
                      "div",
                      null,
                      n.createElement(
                        "div",
                        { className: "upload-container" },
                        n.createElement(
                          "div",
                          { className: "crop-border" },
                          n.createElement(
                            "div",
                            { className: "vertical" },
                            n.createElement(j.G, {
                              className: "arrow-up",
                              icon: ["fa", "arrow-up"],
                              onClick: function () {
                                c(i + 10);
                              },
                            }),
                            n.createElement(j.G, {
                              className: "arrow-down",
                              icon: ["fa", "arrow-down"],
                              onClick: function () {
                                c(i - 10);
                              },
                            })
                          ),
                          n.createElement(
                            "div",
                            { className: "horizontal" },
                            n.createElement(j.G, {
                              className: "arrow-left",
                              icon: ["fa", "arrow-left"],
                              onClick: function () {
                                l(o + 10);
                              },
                            }),
                            n.createElement(j.G, {
                              className: "arrow-right",
                              icon: ["fa", "arrow-right"],
                              onClick: function () {
                                l(o - 10);
                              },
                            })
                          )
                        ),
                        s &&
                          n.createElement(
                            "div",
                            { className: "sidebar" },
                            n.createElement(
                              "div",
                              null,
                              n.createElement(j.G, {
                                className: "clear",
                                icon: ["fa", "trash"],
                                onClick: function () {
                                  h(), f();
                                },
                              })
                            ),
                            n.createElement(
                              "div",
                              { className: "d-grid" },
                              n.createElement(j.G, {
                                className: "zoom",
                                icon: ["fa", "magnifying-glass-plus"],
                                onClick: function () {
                                  r < 200 && a(r + 10);
                                },
                              }),
                              n.createElement(j.G, {
                                className: "zoom",
                                icon: ["fa", "magnifying-glass-minus"],
                                onClick: function () {
                                  r > 100 && a(r - 10);
                                },
                              })
                            ),
                            n.createElement(
                              "div",
                              null,
                              n.createElement(j.G, {
                                className: "reset",
                                icon: ["fa", "rotate-left"],
                                onClick: function () {
                                  l(0), c(0), a(100);
                                },
                              })
                            )
                          ),
                        n.createElement(
                          "div",
                          null,
                          s &&
                            n.createElement("img", {
                              className: "pic",
                              src: p,
                              alt: "",
                              style: {
                                transform: "scale("
                                  .concat(r, "%) translate(")
                                  .concat(o, "px, ")
                                  .concat(i, "px)"),
                                width: "100%",
                              },
                            })
                        )
                      )
                    )
                  : n.createElement(
                      "div",
                      { onChange: t },
                      n.createElement(
                        "div",
                        {
                          className: "upload-container upload-container-hover",
                        },
                        n.createElement(
                          "div",
                          { className: "upload" },
                          n.createElement("input", {
                            type: "file",
                            accept: "image/*",
                            title: "",
                            onChange: t,
                            className: "hidden-input",
                          }),
                          n.createElement(
                            "span",
                            null,
                            "Click here to upload thumbnail"
                          ),
                          n.createElement(
                            "div",
                            null,
                            n.createElement(j.G, { icon: ["fa", "upload"] })
                          )
                        )
                      )
                    )
              ),
              n.createElement(te, {
                setChannelName: d,
                setIsTemplate: u,
                setTemplate: m,
                setIsActive: g,
                setChannelTemp: w,
                setIsChannelTemp: v,
              })
            );
          },
          ne = r(2297),
          ae = {};
        (ae.styleTagTransform = g()),
          (ae.setAttributes = u()),
          (ae.insert = p().bind(null, "head")),
          (ae.domAPI = c()),
          (ae.insertStyleElement = h()),
          i()(ne.Z, ae),
          ne.Z && ne.Z.locals && ne.Z.locals;
        var oe = r(6368),
          ie = {};
        (ie.styleTagTransform = g()),
          (ie.setAttributes = u()),
          (ie.insert = p().bind(null, "head")),
          (ie.domAPI = c()),
          (ie.insertStyleElement = h()),
          i()(oe.Z, ie),
          oe.Z && oe.Z.locals && oe.Z.locals;
        var le = function (e) {
            var t = e.setChannelName,
              a = (e.setIsTemplate, e.setTemplate, e.setChannelTemp),
              o = e.setIsChannelTemp,
              i = e.setSelectedChannelPic,
              l = r(9005);
            function c(e) {
              return e.includes("_")
                ? e.replace(/_/g, " ").split(".png")
                : e.split(".png");
            }
            return n.createElement(
              "div",
              { className: "popular-container" },
              n.createElement("h5", null, "Popular"),
              n.createElement(
                "div",
                { className: "scroll d-flex" },
                n.createElement("div", { className: "before-overlay" }),
                n.createElement(
                  G.Z,
                  {
                    key: "blank",
                    placement: "top",
                    delay: { show: "100", hide: "10" },
                    overlay: n.createElement(
                      R.Z,
                      { id: "tooltip-top" },
                      "Reset"
                    ),
                  },
                  n.createElement(
                    "div",
                    {
                      className: "popular d-grid",
                      onClick: function () {
                        o(!1), t("Channel");
                      },
                    },
                    n.createElement("div", { className: "blank-popular" })
                  )
                ),
                l.map(function (e) {
                  return n.createElement(
                    G.Z,
                    {
                      key: e,
                      placement: "top",
                      delay: { show: "100", hide: "10" },
                      overlay: n.createElement(
                        R.Z,
                        { id: "tooltip-top" },
                        c(e)
                      ),
                    },
                    n.createElement(
                      "div",
                      {
                        className: "popular",
                        key: e,
                        onClick: function () {
                          o(!0), i(), a(e), t(c(e));
                        },
                      },
                      n.createElement("img", {
                        src: r(5172)("./".concat(e)),
                        alt: "",
                      })
                    )
                  );
                }),
                n.createElement("div", { className: "overlay" })
              )
            );
          },
          ce = function (e) {
            var t = e.setPreviewChannelPic,
              r = e.setSelectedChannelPic,
              a = e.selectedChannelPic,
              o = e.previewChannelPic,
              i = e.uploadChannelPic,
              l = e.channelPicZoom,
              c = e.setChannelPicZoom,
              s = e.channelPicX,
              p = e.channelPicY,
              d = e.setChannelPicX,
              u = e.setChannelPicY,
              m = e.setChannelName,
              h = e.setIsTemplate,
              f = e.setTemplate,
              g = e.setIsActive,
              w = e.setChannelTemp,
              v = e.setIsChannelTemp;
            return n.createElement(
              "div",
              null,
              n.createElement(
                "div",
                { className: "d-grid" },
                a
                  ? n.createElement(
                      "div",
                      null,
                      n.createElement(
                        "div",
                        { className: "upload-channel-container" },
                        n.createElement(
                          "div",
                          { className: "crop-border" },
                          n.createElement(
                            "div",
                            { className: "vertical" },
                            n.createElement(j.G, {
                              className: "arrow-up",
                              icon: ["fa", "arrow-up"],
                              onClick: function () {
                                u(p + 10);
                              },
                            }),
                            n.createElement(j.G, {
                              className: "arrow-down",
                              icon: ["fa", "arrow-down"],
                              onClick: function () {
                                u(p - 10);
                              },
                            })
                          ),
                          n.createElement(
                            "div",
                            { className: "horizontal" },
                            n.createElement(j.G, {
                              className: "arrow-left",
                              icon: ["fa", "arrow-left"],
                              onClick: function () {
                                d(s + 10);
                              },
                            }),
                            n.createElement(j.G, {
                              className: "arrow-right",
                              icon: ["fa", "arrow-right"],
                              onClick: function () {
                                d(s - 10);
                              },
                            })
                          )
                        ),
                        a &&
                          n.createElement(
                            "div",
                            { className: "sidebar" },
                            n.createElement(
                              "div",
                              null,
                              n.createElement(j.G, {
                                className: "clear",
                                icon: ["fa", "trash"],
                                onClick: function () {
                                  t(), r();
                                },
                              })
                            ),
                            n.createElement(
                              "div",
                              { className: "d-grid" },
                              n.createElement(j.G, {
                                className: "zoom",
                                icon: ["fa", "magnifying-glass-plus"],
                                onClick: function () {
                                  l < 200 && c(l + 10);
                                },
                              }),
                              n.createElement(j.G, {
                                className: "zoom",
                                icon: ["fa", "magnifying-glass-minus"],
                                onClick: function () {
                                  l > 100 && c(l - 10);
                                },
                              })
                            ),
                            n.createElement(
                              "div",
                              null,
                              n.createElement(j.G, {
                                className: "reset",
                                icon: ["fa", "rotate-left"],
                                onClick: function () {
                                  d(0), u(0), c(100);
                                },
                              })
                            )
                          ),
                        n.createElement(
                          "div",
                          null,
                          a &&
                            n.createElement("img", {
                              className: "pic",
                              src: o,
                              alt: "",
                              style: {
                                transform: "scale("
                                  .concat(l, "%) translate(")
                                  .concat(s, "px, ")
                                  .concat(p, "px)"),
                                width: "100%",
                              },
                            })
                        )
                      )
                    )
                  : n.createElement(
                      "div",
                      { onChange: i },
                      n.createElement(
                        "div",
                        {
                          className:
                            "upload-channel-container upload-container-hover",
                        },
                        n.createElement(
                          "div",
                          { className: "upload" },
                          n.createElement("input", {
                            type: "file",
                            accept: "image/*",
                            title: "",
                            onChange: i,
                            className: "hidden-input",
                          }),
                          n.createElement(
                            "span",
                            null,
                            "Click here to upload channel image"
                          ),
                          n.createElement(
                            "div",
                            null,
                            n.createElement(j.G, { icon: ["fa", "upload"] })
                          )
                        )
                      )
                    )
              ),
              n.createElement(
                "div",
                null,
                n.createElement(le, {
                  setChannelName: m,
                  setIsTemplate: h,
                  setTemplate: f,
                  setIsActive: g,
                  setChannelTemp: w,
                  setIsChannelTemp: v,
                  setSelectedChannelPic: r,
                })
              )
            );
          },
          se = r(3121),
          pe = {};
        (pe.styleTagTransform = g()),
          (pe.setAttributes = u()),
          (pe.insert = p().bind(null, "head")),
          (pe.domAPI = c()),
          (pe.insertStyleElement = h()),
          i()(se.Z, pe),
          se.Z && se.Z.locals && se.Z.locals;
        var de = function (e) {
          var t = e.isOn,
            r = e.handleToggle;
          return n.createElement(
            n.Fragment,
            null,
            n.createElement("input", {
              checked: t,
              onChange: r,
              className: "react-switch-checkbox",
              id: "react-switch-new",
              type: "checkbox",
            }),
            n.createElement(
              "label",
              {
                className: "react-switch-label",
                htmlFor: "react-switch-new",
                style: {
                  background: t
                    ? "rgba(255, 0, 0, 0.5)"
                    : "rgba(255, 0, 0, 0.25)",
                },
              },
              n.createElement("span", { className: "react-switch-button" })
            )
          );
        };
        function ue(e) {
          return (
            (ue =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            ue(e)
          );
        }
        function me() {
          me = function () {
            return e;
          };
          var e = {},
            t = Object.prototype,
            r = t.hasOwnProperty,
            n =
              Object.defineProperty ||
              function (e, t, r) {
                e[t] = r.value;
              },
            a = "function" == typeof Symbol ? Symbol : {},
            o = a.iterator || "@@iterator",
            i = a.asyncIterator || "@@asyncIterator",
            l = a.toStringTag || "@@toStringTag";
          function c(e, t, r) {
            return (
              Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            c({}, "");
          } catch (e) {
            c = function (e, t, r) {
              return (e[t] = r);
            };
          }
          function s(e, t, r, a) {
            var o = t && t.prototype instanceof u ? t : u,
              i = Object.create(o.prototype),
              l = new T(a || []);
            return n(i, "_invoke", { value: y(e, r, l) }), i;
          }
          function p(e, t, r) {
            try {
              return { type: "normal", arg: e.call(t, r) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = s;
          var d = {};
          function u() {}
          function m() {}
          function h() {}
          var f = {};
          c(f, o, function () {
            return this;
          });
          var g = Object.getPrototypeOf,
            w = g && g(g(S([])));
          w && w !== t && r.call(w, o) && (f = w);
          var v = (h.prototype = u.prototype = Object.create(f));
          function b(e) {
            ["next", "throw", "return"].forEach(function (t) {
              c(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function x(e, t) {
            function a(n, o, i, l) {
              var c = p(e[n], e, o);
              if ("throw" !== c.type) {
                var s = c.arg,
                  d = s.value;
                return d && "object" == ue(d) && r.call(d, "__await")
                  ? t.resolve(d.__await).then(
                      function (e) {
                        a("next", e, i, l);
                      },
                      function (e) {
                        a("throw", e, i, l);
                      }
                    )
                  : t.resolve(d).then(
                      function (e) {
                        (s.value = e), i(s);
                      },
                      function (e) {
                        return a("throw", e, i, l);
                      }
                    );
              }
              l(c.arg);
            }
            var o;
            n(this, "_invoke", {
              value: function (e, r) {
                function n() {
                  return new t(function (t, n) {
                    a(e, r, t, n);
                  });
                }
                return (o = o ? o.then(n, n) : n());
              },
            });
          }
          function y(e, t, r) {
            var n = "suspendedStart";
            return function (a, o) {
              if ("executing" === n)
                throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === a) throw o;
                return { value: void 0, done: !0 };
              }
              for (r.method = a, r.arg = o; ; ) {
                var i = r.delegate;
                if (i) {
                  var l = E(i, r);
                  if (l) {
                    if (l === d) continue;
                    return l;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = "executing";
                var c = p(e, t, r);
                if ("normal" === c.type) {
                  if (
                    ((n = r.done ? "completed" : "suspendedYield"), c.arg === d)
                  )
                    continue;
                  return { value: c.arg, done: r.done };
                }
                "throw" === c.type &&
                  ((n = "completed"), (r.method = "throw"), (r.arg = c.arg));
              }
            };
          }
          function E(e, t) {
            var r = t.method,
              n = e.iterator[r];
            if (void 0 === n)
              return (
                (t.delegate = null),
                ("throw" === r &&
                  e.iterator.return &&
                  ((t.method = "return"),
                  (t.arg = void 0),
                  E(e, t),
                  "throw" === t.method)) ||
                  ("return" !== r &&
                    ((t.method = "throw"),
                    (t.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                d
              );
            var a = p(n, e.iterator, t.arg);
            if ("throw" === a.type)
              return (
                (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), d
              );
            var o = a.arg;
            return o
              ? o.done
                ? ((t[e.resultName] = o.value),
                  (t.next = e.nextLoc),
                  "return" !== t.method &&
                    ((t.method = "next"), (t.arg = void 0)),
                  (t.delegate = null),
                  d)
                : o
              : ((t.method = "throw"),
                (t.arg = new TypeError("iterator result is not an object")),
                (t.delegate = null),
                d);
          }
          function k(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function N(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function T(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(k, this),
              this.reset(!0);
          }
          function S(e) {
            if (e) {
              var t = e[o];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var n = -1,
                  a = function t() {
                    for (; ++n < e.length; )
                      if (r.call(e, n))
                        return (t.value = e[n]), (t.done = !1), t;
                    return (t.value = void 0), (t.done = !0), t;
                  };
                return (a.next = a);
              }
            }
            return { next: P };
          }
          function P() {
            return { value: void 0, done: !0 };
          }
          return (
            (m.prototype = h),
            n(v, "constructor", { value: h, configurable: !0 }),
            n(h, "constructor", { value: m, configurable: !0 }),
            (m.displayName = c(h, l, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === m || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, h)
                  : ((e.__proto__ = h), c(e, l, "GeneratorFunction")),
                (e.prototype = Object.create(v)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            b(x.prototype),
            c(x.prototype, i, function () {
              return this;
            }),
            (e.AsyncIterator = x),
            (e.async = function (t, r, n, a, o) {
              void 0 === o && (o = Promise);
              var i = new x(s(t, r, n, a), o);
              return e.isGeneratorFunction(r)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            b(v),
            c(v, l, "Generator"),
            c(v, o, function () {
              return this;
            }),
            c(v, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = Object(e),
                r = [];
              for (var n in t) r.push(n);
              return (
                r.reverse(),
                function e() {
                  for (; r.length; ) {
                    var n = r.pop();
                    if (n in t) return (e.value = n), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (e.values = S),
            (T.prototype = {
              constructor: T,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(N),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) &&
                      r.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = void 0);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;
                function n(r, n) {
                  return (
                    (i.type = "throw"),
                    (i.arg = e),
                    (t.next = r),
                    n && ((t.method = "next"), (t.arg = void 0)),
                    !!n
                  );
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var o = this.tryEntries[a],
                    i = o.completion;
                  if ("root" === o.tryLoc) return n("end");
                  if (o.tryLoc <= this.prev) {
                    var l = r.call(o, "catchLoc"),
                      c = r.call(o, "finallyLoc");
                    if (l && c) {
                      if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                    } else if (l) {
                      if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    } else {
                      if (!c)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), d)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  d
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.finallyLoc === e)
                    return this.complete(r.completion, r.afterLoc), N(r), d;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.tryLoc === e) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var a = n.arg;
                      N(r);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, t, r) {
                return (
                  (this.delegate = {
                    iterator: S(e),
                    resultName: t,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  d
                );
              },
            }),
            e
          );
        }
        function he(e, t, r, n, a, o, i) {
          try {
            var l = e[o](i),
              c = l.value;
          } catch (e) {
            return void r(e);
          }
          l.done ? t(c) : Promise.resolve(c).then(n, a);
        }
        function fe(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var r =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != r) {
                var n,
                  a,
                  o,
                  i,
                  l = [],
                  c = !0,
                  s = !1;
                try {
                  if (((o = (r = r.call(e)).next), 0 === t)) {
                    if (Object(r) !== r) return;
                    c = !1;
                  } else
                    for (
                      ;
                      !(c = (n = o.call(r)).done) &&
                      (l.push(n.value), l.length !== t);
                      c = !0
                    );
                } catch (e) {
                  (s = !0), (a = e);
                } finally {
                  try {
                    if (
                      !c &&
                      null != r.return &&
                      ((i = r.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (s) throw a;
                  }
                }
                return l;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return ge(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? ge(e, t)
                    : void 0
                );
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function ge(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        var we = function () {
            var e = fe((0, n.useState)(!1), 2),
              t = e[0],
              r = e[1],
              a = fe((0, n.useState)(), 2),
              o = a[0],
              i = a[1],
              l = fe((0, n.useState)(), 2),
              c = l[0],
              s = l[1],
              p = fe((0, n.useState)(), 2),
              d = p[0],
              u = p[1],
              m = fe((0, n.useState)(), 2),
              h = m[0],
              f = m[1],
              g = fe((0, n.useState)("4:20"), 2),
              w = g[0],
              v = g[1],
              b = fe((0, n.useState)("Title"), 2),
              x = b[0],
              y = b[1],
              E = fe((0, n.useState)("Channel"), 2),
              k = E[0],
              N = E[1],
              T = fe((0, n.useState)("69K"), 2),
              S = T[0],
              P = T[1],
              Z = fe((0, n.useState)(!1), 2),
              A = Z[0],
              z = Z[1],
              L = fe((0, n.useState)("23"), 2),
              j = L[0],
              I = L[1],
              D = fe((0, n.useState)("minute"), 2),
              M = D[0],
              Y = D[1],
              F = fe((0, n.useState)(!1), 2),
              J = F[0],
              H = F[1],
              U = fe((0, n.useState)(!1), 2),
              W = U[0],
              V = U[1],
              $ = fe((0, n.useState)(100), 2),
              q = $[0],
              Q = $[1],
              ee = fe((0, n.useState)(0), 2),
              te = ee[0],
              ne = ee[1],
              ae = fe((0, n.useState)(0), 2),
              oe = ae[0],
              ie = ae[1],
              le = fe((0, n.useState)(100), 2),
              se = le[0],
              pe = le[1],
              ue = fe((0, n.useState)(0), 2),
              ge = ue[0],
              we = ue[1],
              ve = fe((0, n.useState)(0), 2),
              be = ve[0],
              xe = ve[1],
              ye = fe((0, n.useState)(!1), 2),
              Ee = ye[0],
              ke = ye[1],
              Ne = fe((0, n.useState)(), 2),
              Te = Ne[0],
              Se = Ne[1],
              Pe = fe((0, n.useState)(!1), 2),
              _e = Pe[0],
              Ce = Pe[1],
              Ze = fe((0, n.useState)(), 2),
              Ae = Ze[0],
              ze = Ze[1];
            function Le(e) {
              e.target.files && 0 !== e.target.files.length
                ? (r(!0), i(e.target.files[0]))
                : i(void 0);
            }
            function Be(e) {
              Ce(!1),
                ze(),
                e.target.files && 0 !== e.target.files.length
                  ? (r(!0), u(e.target.files[0]))
                  : u(void 0);
            }
            (0, n.useEffect)(
              function () {
                if (o) {
                  var e = URL.createObjectURL(o);
                  return (
                    s(e),
                    function () {
                      return URL.revokeObjectURL(e);
                    }
                  );
                }
                s(void 0);
              },
              [o]
            ),
              (0, n.useEffect)(
                function () {
                  if (d) {
                    var e = URL.createObjectURL(d);
                    return (
                      f(e),
                      function () {
                        return URL.revokeObjectURL(e);
                      }
                    );
                  }
                  f(void 0);
                },
                [d]
              );
            var Oe = (0, n.useRef)(null),
              je = (function () {
                var e,
                  t =
                    ((e = me().mark(function e() {
                      var t, r;
                      return me().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  O.YM(Oe.current, { backgroundColor: "white" })
                                );
                              case 3:
                                (t = e.sent),
                                  ((r = document.createElement("a")).download =
                                    "youtube.png"),
                                  (r.href = t),
                                  r.click(),
                                  (e.next = 14);
                                break;
                              case 10:
                                (e.prev = 10),
                                  (e.t0 = e.catch(0)),
                                  console.log("Ohhhh nooo!"),
                                  console.log(e.t0);
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 10]]
                      );
                    })),
                    function () {
                      var t = this,
                        r = arguments;
                      return new Promise(function (n, a) {
                        var o = e.apply(t, r);
                        function i(e) {
                          he(o, n, a, i, l, "next", e);
                        }
                        function l(e) {
                          he(o, n, a, i, l, "throw", e);
                        }
                        i(void 0);
                      });
                    });
                return function () {
                  return t.apply(this, arguments);
                };
              })();
            return n.createElement(
              "div",
              { className: "content" },
              n.createElement(
                "div",
                { className: "upload-content-container" },
                n.createElement(
                  "div",
                  { className: "d-grid", style: { maxWidth: "fit-content" } },
                  n.createElement(
                    C.Z,
                    {
                      defaultActiveKey: "thumbnail",
                      id: "uncontrolled-tab-example",
                      className: "upload-header mb-3",
                    },
                    n.createElement(
                      _.Z,
                      { eventKey: "thumbnail", title: "Thumbnail" },
                      n.createElement(re, {
                        uploadThumbnail: Le,
                        previewThumb: c,
                        selectedThumb: o,
                        thumbZoom: q,
                        setThumbZoom: Q,
                        thumbX: te,
                        thumbY: oe,
                        setThumbX: ne,
                        setThumbY: ie,
                        setIsTemplate: ke,
                        setTemplate: Se,
                        setPreviewThumb: s,
                        setPreviewChannelPic: f,
                        setChannelName: N,
                        uploadChannelPic: Be,
                        setSelectedThumb: i,
                        setIsActive: r,
                        setChannelTemp: ze,
                        setIsChannelTemp: Ce,
                      })
                    ),
                    n.createElement(
                      _.Z,
                      { eventKey: "channel", title: "Channel" },
                      n.createElement(ce, {
                        setPreviewChannelPic: f,
                        setSelectedChannelPic: u,
                        uploadChannelPic: Be,
                        previewChannelPic: h,
                        selectedChannelPic: d,
                        channelPicZoom: se,
                        setChannelPicZoom: pe,
                        channelPicX: ge,
                        channelPicY: be,
                        setChannelPicX: we,
                        setChannelPicY: xe,
                        setChannelName: N,
                        setIsTemplate: ke,
                        setTemplate: Se,
                        setIsActive: r,
                        setChannelTemp: ze,
                        setIsChannelTemp: Ce,
                      })
                    ),
                    n.createElement(
                      _.Z,
                      { eventKey: "info", title: "Info" },
                      n.createElement(B, {
                        setDuration: v,
                        setTitle: y,
                        setChannelName: N,
                        setViews: P,
                        exactViews: A,
                        setExactViews: z,
                        setTimeAgo: I,
                        setIncrement: Y,
                      })
                    )
                  )
                )
              ),
              n.createElement(
                "div",
                { className: "preview" },
                n.createElement("h5", null, "Preview"),
                n.createElement(
                  "div",
                  { className: "preview-header" },
                  n.createElement(
                    G.Z,
                    {
                      key: "right",
                      placement: "right",
                      delay: { show: "700", hide: "100" },
                      overlay: n.createElement(
                        R.Z,
                        { id: "tooltip-right" },
                        "Toggle mode"
                      ),
                    },
                    n.createElement(
                      "div",
                      { className: "switch" },
                      n.createElement(de, {
                        isOn: W,
                        handleToggle: function () {
                          V(!W), H(!J);
                        },
                      })
                    )
                  ),
                  W
                    ? n.createElement("h4", null, "[ Dark ]")
                    : n.createElement("h4", null, "[ Light ]")
                ),
                n.createElement(
                  "div",
                  { className: "preview-container" },
                  n.createElement(
                    "div",
                    {
                      className: J
                        ? "border border-dark border-bottom-0"
                        : "border  border-dark border-bottom-0",
                    },
                    " ",
                    n.createElement(
                      "div",
                      { ref: Oe },
                      n.createElement(X, {
                        duration: w,
                        title: x,
                        channelName: k,
                        views: S,
                        timeAgo: j,
                        increment: M,
                        uploadThumbnail: Le,
                        uploadChannelPic: Be,
                        selectedThumb: o,
                        previewThumb: c,
                        selectedChannelPic: d,
                        previewChannelPic: h,
                        isDarkMode: J,
                        thumbZoom: q,
                        setThumbZoom: Q,
                        thumbX: te,
                        thumbY: oe,
                        channelPicZoom: se,
                        channelPicX: ge,
                        channelPicY: be,
                        isTemplate: Ee,
                        template: Te,
                        channelTemp: Ae,
                        isChannelTemp: _e,
                      })
                    )
                  ),
                  n.createElement(
                    "div",
                    { className: "d-flex" },
                    n.createElement(
                      "div",
                      null,
                      n.createElement(K, {
                        className: "download-mobile",
                        isActive: t,
                        downloadImage: je,
                      })
                    )
                  )
                )
              )
            );
          },
          ve =
            r.p + "src/static/twitter-verified.png!extract-loader!html-loader",
          be =
            r.p +
            "src/static/twitter-verified-dark.png!extract-loader!html-loader",
          xe = r(6087),
          ye = {};
        (ye.styleTagTransform = g()),
          (ye.setAttributes = u()),
          (ye.insert = p().bind(null, "head")),
          (ye.domAPI = c()),
          (ye.insertStyleElement = h()),
          i()(xe.Z, ye),
          xe.Z && xe.Z.locals && xe.Z.locals;
        var Ee = function (e) {
            var t = e.isOn,
              r = e.handleToggle;
            return n.createElement(
              n.Fragment,
              null,
              n.createElement("input", {
                checked: t,
                onChange: r,
                className: "twitter-switch-checkbox",
                id: "twitter-switch-new",
                type: "checkbox",
              }),
              n.createElement(
                "label",
                {
                  className: "twitter-switch-label",
                  htmlFor: "twitter-switch-new",
                  style: {
                    background: t
                      ? "rgba(29, 155, 240, 0.5)"
                      : "rgba(29, 155, 240, 0.25)",
                  },
                },
                n.createElement("span", { className: "twitter-switch-button" })
              )
            );
          },
          ke = r(9375),
          Ne = {};
        (Ne.styleTagTransform = g()),
          (Ne.setAttributes = u()),
          (Ne.insert = p().bind(null, "head")),
          (Ne.domAPI = c()),
          (Ne.insertStyleElement = h()),
          i()(ke.Z, Ne),
          ke.Z && ke.Z.locals && ke.Z.locals;
        var Te = function (e) {
            var t = e.isActive,
              r = e.downloadTweet;
            return n.createElement(
              "div",
              null,
              " ",
              t
                ? n.createElement(
                    "div",
                    { className: "twitter-download", onClick: r },
                    "DOWNLOAD",
                    " ",
                    n.createElement(j.G, {
                      icon: (0, I.qv)({ name: "download", style: "solid" }),
                    })
                  )
                : n.createElement(
                    G.Z,
                    {
                      key: "top",
                      placement: "top",
                      delay: { show: "700", hide: "100" },
                      overlay: n.createElement(
                        R.Z,
                        { id: "tooltip-top" },
                        "Upload images or enter info to activate"
                      ),
                    },
                    n.createElement(
                      "div",
                      { className: "twitter-not-active" },
                      "DOWNLOAD",
                      " ",
                      n.createElement(j.G, {
                        icon: (0, I.qv)({ name: "download", style: "solid" }),
                      })
                    )
                  )
            );
          },
          Se = r(1588),
          Pe = {};
        function _e(e) {
          return (
            (_e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            _e(e)
          );
        }
        function Ce() {
          Ce = function () {
            return e;
          };
          var e = {},
            t = Object.prototype,
            r = t.hasOwnProperty,
            n =
              Object.defineProperty ||
              function (e, t, r) {
                e[t] = r.value;
              },
            a = "function" == typeof Symbol ? Symbol : {},
            o = a.iterator || "@@iterator",
            i = a.asyncIterator || "@@asyncIterator",
            l = a.toStringTag || "@@toStringTag";
          function c(e, t, r) {
            return (
              Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            c({}, "");
          } catch (e) {
            c = function (e, t, r) {
              return (e[t] = r);
            };
          }
          function s(e, t, r, a) {
            var o = t && t.prototype instanceof u ? t : u,
              i = Object.create(o.prototype),
              l = new T(a || []);
            return n(i, "_invoke", { value: y(e, r, l) }), i;
          }
          function p(e, t, r) {
            try {
              return { type: "normal", arg: e.call(t, r) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = s;
          var d = {};
          function u() {}
          function m() {}
          function h() {}
          var f = {};
          c(f, o, function () {
            return this;
          });
          var g = Object.getPrototypeOf,
            w = g && g(g(S([])));
          w && w !== t && r.call(w, o) && (f = w);
          var v = (h.prototype = u.prototype = Object.create(f));
          function b(e) {
            ["next", "throw", "return"].forEach(function (t) {
              c(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function x(e, t) {
            function a(n, o, i, l) {
              var c = p(e[n], e, o);
              if ("throw" !== c.type) {
                var s = c.arg,
                  d = s.value;
                return d && "object" == _e(d) && r.call(d, "__await")
                  ? t.resolve(d.__await).then(
                      function (e) {
                        a("next", e, i, l);
                      },
                      function (e) {
                        a("throw", e, i, l);
                      }
                    )
                  : t.resolve(d).then(
                      function (e) {
                        (s.value = e), i(s);
                      },
                      function (e) {
                        return a("throw", e, i, l);
                      }
                    );
              }
              l(c.arg);
            }
            var o;
            n(this, "_invoke", {
              value: function (e, r) {
                function n() {
                  return new t(function (t, n) {
                    a(e, r, t, n);
                  });
                }
                return (o = o ? o.then(n, n) : n());
              },
            });
          }
          function y(e, t, r) {
            var n = "suspendedStart";
            return function (a, o) {
              if ("executing" === n)
                throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === a) throw o;
                return { value: void 0, done: !0 };
              }
              for (r.method = a, r.arg = o; ; ) {
                var i = r.delegate;
                if (i) {
                  var l = E(i, r);
                  if (l) {
                    if (l === d) continue;
                    return l;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = "executing";
                var c = p(e, t, r);
                if ("normal" === c.type) {
                  if (
                    ((n = r.done ? "completed" : "suspendedYield"), c.arg === d)
                  )
                    continue;
                  return { value: c.arg, done: r.done };
                }
                "throw" === c.type &&
                  ((n = "completed"), (r.method = "throw"), (r.arg = c.arg));
              }
            };
          }
          function E(e, t) {
            var r = t.method,
              n = e.iterator[r];
            if (void 0 === n)
              return (
                (t.delegate = null),
                ("throw" === r &&
                  e.iterator.return &&
                  ((t.method = "return"),
                  (t.arg = void 0),
                  E(e, t),
                  "throw" === t.method)) ||
                  ("return" !== r &&
                    ((t.method = "throw"),
                    (t.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                d
              );
            var a = p(n, e.iterator, t.arg);
            if ("throw" === a.type)
              return (
                (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), d
              );
            var o = a.arg;
            return o
              ? o.done
                ? ((t[e.resultName] = o.value),
                  (t.next = e.nextLoc),
                  "return" !== t.method &&
                    ((t.method = "next"), (t.arg = void 0)),
                  (t.delegate = null),
                  d)
                : o
              : ((t.method = "throw"),
                (t.arg = new TypeError("iterator result is not an object")),
                (t.delegate = null),
                d);
          }
          function k(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function N(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function T(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(k, this),
              this.reset(!0);
          }
          function S(e) {
            if (e) {
              var t = e[o];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var n = -1,
                  a = function t() {
                    for (; ++n < e.length; )
                      if (r.call(e, n))
                        return (t.value = e[n]), (t.done = !1), t;
                    return (t.value = void 0), (t.done = !0), t;
                  };
                return (a.next = a);
              }
            }
            return { next: P };
          }
          function P() {
            return { value: void 0, done: !0 };
          }
          return (
            (m.prototype = h),
            n(v, "constructor", { value: h, configurable: !0 }),
            n(h, "constructor", { value: m, configurable: !0 }),
            (m.displayName = c(h, l, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === m || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, h)
                  : ((e.__proto__ = h), c(e, l, "GeneratorFunction")),
                (e.prototype = Object.create(v)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            b(x.prototype),
            c(x.prototype, i, function () {
              return this;
            }),
            (e.AsyncIterator = x),
            (e.async = function (t, r, n, a, o) {
              void 0 === o && (o = Promise);
              var i = new x(s(t, r, n, a), o);
              return e.isGeneratorFunction(r)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            b(v),
            c(v, l, "Generator"),
            c(v, o, function () {
              return this;
            }),
            c(v, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = Object(e),
                r = [];
              for (var n in t) r.push(n);
              return (
                r.reverse(),
                function e() {
                  for (; r.length; ) {
                    var n = r.pop();
                    if (n in t) return (e.value = n), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (e.values = S),
            (T.prototype = {
              constructor: T,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(N),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) &&
                      r.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = void 0);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;
                function n(r, n) {
                  return (
                    (i.type = "throw"),
                    (i.arg = e),
                    (t.next = r),
                    n && ((t.method = "next"), (t.arg = void 0)),
                    !!n
                  );
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var o = this.tryEntries[a],
                    i = o.completion;
                  if ("root" === o.tryLoc) return n("end");
                  if (o.tryLoc <= this.prev) {
                    var l = r.call(o, "catchLoc"),
                      c = r.call(o, "finallyLoc");
                    if (l && c) {
                      if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                    } else if (l) {
                      if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    } else {
                      if (!c)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), d)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  d
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.finallyLoc === e)
                    return this.complete(r.completion, r.afterLoc), N(r), d;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.tryLoc === e) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var a = n.arg;
                      N(r);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, t, r) {
                return (
                  (this.delegate = {
                    iterator: S(e),
                    resultName: t,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  d
                );
              },
            }),
            e
          );
        }
        function Ze(e, t, r, n, a, o, i) {
          try {
            var l = e[o](i),
              c = l.value;
          } catch (e) {
            return void r(e);
          }
          l.done ? t(c) : Promise.resolve(c).then(n, a);
        }
        (Pe.styleTagTransform = g()),
          (Pe.setAttributes = u()),
          (Pe.insert = p().bind(null, "head")),
          (Pe.domAPI = c()),
          (Pe.insertStyleElement = h()),
          i()(Se.Z, Pe),
          Se.Z && Se.Z.locals && Se.Z.locals;
        var Ae = function (e) {
            var t = e.switchDevice,
              a = e.setSwitchDevice,
              o = e.isDarkMode,
              i = e.setIsDarkMode,
              l = e.name,
              c = e.verified,
              s = e.handle,
              p = e.tweet,
              d = e.time,
              u = (e.meridiem, e.date),
              m = e.device,
              h = e.isActive,
              f = e.isPopular,
              g = e.popular,
              w = e.previewProf,
              v = e.selectedProf,
              b = e.profZoom,
              x = e.profX,
              y = e.profY,
              E = (0, n.useRef)(null),
              k = (function () {
                var e,
                  t =
                    ((e = Ce().mark(function e() {
                      var t, r;
                      return Ce().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  O.YM(E.current, {})
                                );
                              case 3:
                                (t = e.sent),
                                  ((r = document.createElement("a")).download =
                                    "twitter.png"),
                                  (r.href = t),
                                  r.click(),
                                  (e.next = 14);
                                break;
                              case 10:
                                (e.prev = 10),
                                  (e.t0 = e.catch(0)),
                                  console.log("Ohhhh nooo!"),
                                  console.log(e.t0);
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 10]]
                      );
                    })),
                    function () {
                      var t = this,
                        r = arguments;
                      return new Promise(function (n, a) {
                        var o = e.apply(t, r);
                        function i(e) {
                          Ze(o, n, a, i, l, "next", e);
                        }
                        function l(e) {
                          Ze(o, n, a, i, l, "throw", e);
                        }
                        i(void 0);
                      });
                    });
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
              N = 0.1 * x,
              T = 0.1 * y;
            return n.createElement(
              "div",
              null,
              n.createElement(
                "div",
                { className: "twitter-preview" },
                n.createElement("h5", null, "Preview"),
                n.createElement(
                  "div",
                  { className: "twitter-preview-header" },
                  n.createElement(
                    G.Z,
                    {
                      key: "right",
                      placement: "right",
                      delay: { show: "700", hide: "100" },
                      overlay: n.createElement(
                        R.Z,
                        { id: "tooltip-right" },
                        "Toggle mode"
                      ),
                    },
                    n.createElement(
                      "div",
                      { className: "switch" },
                      n.createElement(Ee, {
                        isOn: t,
                        handleToggle: function () {
                          a(!t), i(!o);
                        },
                      })
                    )
                  ),
                  t
                    ? n.createElement("h4", null, "[ Dark ]")
                    : n.createElement("h4", null, "[ Light ]")
                ),
                n.createElement(
                  "div",
                  { className: "border border-dark border-bottom-0" },
                  n.createElement(
                    "div",
                    {
                      ref: E,
                      className: t
                        ? "twitter-preview-container dark"
                        : "twitter-preview-container light",
                    },
                    n.createElement(
                      "div",
                      { className: "account-info" },
                      n.createElement(
                        "div",
                        { className: "d-flex" },
                        f &&
                          !v &&
                          n.createElement("img", {
                            className: "twitter-popular-prof",
                            src: r(6766)("./".concat(g)),
                            alt: "",
                          }),
                        !f &&
                          v &&
                          n.createElement(
                            "div",
                            { className: "twitter-custom-prof" },
                            n.createElement("img", {
                              src: w,
                              style: {
                                transform: "scale("
                                  .concat(b, "%) translate(")
                                  .concat(N, "px, ")
                                  .concat(T, "px)"),
                              },
                              alt: "",
                            })
                          ),
                        !f &&
                          !v &&
                          n.createElement("div", { className: "twitter-prof" }),
                        n.createElement(
                          "div",
                          { className: "d-grid indent" },
                          n.createElement(
                            "div",
                            { className: "d-flex" },
                            n.createElement(
                              "div",
                              { className: "twitter-name" },
                              l
                            ),
                            c &&
                              !t &&
                              n.createElement("img", {
                                className: "verified",
                                src: ve,
                                alt: "",
                              }),
                            c &&
                              t &&
                              n.createElement("img", {
                                className: "verified-dark",
                                src: be,
                                alt: "",
                              })
                          ),
                          n.createElement(
                            "div",
                            { className: "twitter-handle" },
                            "@",
                            s
                          )
                        )
                      )
                    ),
                    n.createElement("div", { className: "tweet" }, p),
                    n.createElement(
                      "div",
                      { className: "tweet-info" },
                      n.createElement(
                        "div",
                        { className: "tweet-time" },
                        (function (e) {
                          var t = e.toString().split(":"),
                            r = t[0].replace(/^0/, ""),
                            n = r - 12,
                            a = t[1];
                          return r < 12
                            ? ""
                                .concat(r.replace(/^0/, "12"), ":")
                                .concat(a, " AM")
                            : ""
                                .concat(n.toString().replace(/^0/, "12"), ":")
                                .concat(a, " PM");
                        })(d)
                      ),
                      n.createElement("div", { className: "tweet-bullet" }),
                      n.createElement("div", { className: "tweet-date" }, u),
                      n.createElement("div", { className: "tweet-bullet" }),
                      n.createElement("div", { className: "tweet-device" }, m)
                    )
                  )
                ),
                n.createElement(Te, {
                  className: "download-twitter",
                  isActive: h,
                  downloadTweet: k,
                })
              )
            );
          },
          ze = r(7117),
          Le = {};
        (Le.styleTagTransform = g()),
          (Le.setAttributes = u()),
          (Le.insert = p().bind(null, "head")),
          (Le.domAPI = c()),
          (Le.insertStyleElement = h()),
          i()(ze.Z, Le),
          ze.Z && ze.Z.locals && ze.Z.locals;
        var Be = function (e) {
            var t = e.setIsActive,
              a = e.setIsPopular,
              o = e.setName,
              i = e.setHandle,
              l = e.setPopular,
              c = e.setSelectedProf,
              s = r(7526);
            return n.createElement(
              "div",
              { className: "twitter-popular-container" },
              n.createElement("h5", null, "Popular"),
              n.createElement(
                "div",
                { className: "scroll d-flex" },
                n.createElement("div", { className: "before-overlay" }),
                n.createElement(
                  G.Z,
                  {
                    key: "blank",
                    placement: "top",
                    delay: { show: "100", hide: "10" },
                    overlay: n.createElement(
                      R.Z,
                      { id: "tooltip-top" },
                      "Reset"
                    ),
                  },
                  n.createElement(
                    "div",
                    {
                      className: "twitter-popular d-grid",
                      onClick: function () {
                        c(), a(!1), o("Name"), i("Handle");
                      },
                    },
                    n.createElement("div", {
                      className: "twitter-blank-popular",
                    })
                  )
                ),
                s.map(function (e) {
                  return n.createElement(
                    G.Z,
                    {
                      key: e.handle,
                      placement: "top",
                      delay: { show: "100", hide: "10" },
                      overlay: n.createElement(
                        R.Z,
                        { id: "tooltip-top" },
                        ((s = e.img),
                        s.includes("_")
                          ? s.replace(/_/g, " ").split(".png")
                          : s.split(".png"))
                      ),
                    },
                    n.createElement(
                      "div",
                      {
                        className: "twitter-popular",
                        key: e.handle,
                        onClick: function () {
                          t(!0), a(!0), c(), l(e.img), o(e.name), i(e.handle);
                        },
                      },
                      n.createElement("img", {
                        src: r(6766)("./".concat(e.img)),
                        alt: "",
                      })
                    )
                  );
                  var s;
                }),
                n.createElement("div", { className: "overlay" })
              )
            );
          },
          Oe = r(7648),
          je = r(5520),
          Ie = {};
        function De(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        (Ie.styleTagTransform = g()),
          (Ie.setAttributes = u()),
          (Ie.insert = p().bind(null, "head")),
          (Ie.domAPI = c()),
          (Ie.insertStyleElement = h()),
          i()(je.Z, Ie),
          je.Z && je.Z.locals && je.Z.locals;
        var Me = new Date(),
          Ge =
            Me.getDate() < 10
              ? ""
                  .concat(Me.getFullYear(), "-")
                  .concat(Me.getMonth() + 1, "-0")
                  .concat(Me.getDate())
              : ""
                  .concat(Me.getFullYear(), "-")
                  .concat(Me.getMonth() + 1, "-")
                  .concat(Me.getDate()),
          Re = function (e) {
            var t,
              r,
              a = e.setName,
              o = e.setHandle,
              i = e.verified,
              l = e.setVerified,
              c = e.setTweet,
              s = e.setDevice,
              p = e.setIsActive,
              d = e.time,
              u = e.setTime,
              m = (e.setMeridiem, e.setDate),
              h = (e.date, e.setIsPopular),
              f = e.setPopular,
              g = e.setSelectedProf,
              w =
                ((t = (0, n.useState)(Ge)),
                (r = 2),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e, t) {
                    var r =
                      null == e
                        ? null
                        : ("undefined" != typeof Symbol &&
                            e[Symbol.iterator]) ||
                          e["@@iterator"];
                    if (null != r) {
                      var n,
                        a,
                        o,
                        i,
                        l = [],
                        c = !0,
                        s = !1;
                      try {
                        if (((o = (r = r.call(e)).next), 0 === t)) {
                          if (Object(r) !== r) return;
                          c = !1;
                        } else
                          for (
                            ;
                            !(c = (n = o.call(r)).done) &&
                            (l.push(n.value), l.length !== t);
                            c = !0
                          );
                      } catch (e) {
                        (s = !0), (a = e);
                      } finally {
                        try {
                          if (
                            !c &&
                            null != r.return &&
                            ((i = r.return()), Object(i) !== i)
                          )
                            return;
                        } finally {
                          if (s) throw a;
                        }
                      }
                      return l;
                    }
                  })(t, r) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return De(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(e)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? De(e, t)
                          : void 0
                      );
                    }
                  })(t, r) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()),
              v = w[0],
              b = w[1];
            return n.createElement(
              "div",
              null,
              n.createElement(
                "div",
                null,
                n.createElement(Be, {
                  setIsActive: p,
                  setSelectedProf: g,
                  setName: a,
                  setHandle: o,
                  setIsPopular: h,
                  setPopular: f,
                })
              ),
              n.createElement(
                "div",
                { className: "d-flex justify-content-between center" },
                n.createElement(
                  "div",
                  { className: "twitter-input-container d-grid" },
                  n.createElement("label", null, "Name"),
                  n.createElement("input", {
                    className: "twitter-name",
                    onChange: function (e) {
                      p(!0), a(e.target.value);
                    },
                    maxLength: "37",
                  })
                ),
                n.createElement(
                  "div",
                  { className: "d-grid" },
                  " ",
                  n.createElement("label", null, "Verified"),
                  n.createElement(Oe.Z.Check, {
                    className: "twitter-verified",
                    "aria-label": "option 1",
                    checked: i,
                    onChange: function (e) {
                      p(!0), l(!i);
                    },
                  })
                )
              ),
              n.createElement(
                "div",
                { className: "twitter-input-container d-grid" },
                n.createElement("label", null, "Handle"),
                n.createElement("input", {
                  className: "twitter-input",
                  onChange: function (e) {
                    p(!0),
                      o(
                        e.target.value
                          .replace(/ /g, "_")
                          .replace(/[^a-zA-Z0-9_]/g, "")
                      );
                  },
                  maxLength: "15",
                })
              ),
              n.createElement(
                "div",
                { className: "twitter-input-container d-grid" },
                n.createElement("label", null, "Tweet"),
                n.createElement("textarea", {
                  onChange: function (e) {
                    p(!0),
                      c(e.target.value),
                      13 === window.event.keyCode && console.log("hello");
                  },
                  maxLength: "280",
                })
              ),
              n.createElement(
                "div",
                { className: "d-flex justify-content-between" },
                n.createElement(
                  "div",
                  { className: "twitter-input-container d-grid" },
                  n.createElement("label", null, "Time"),
                  n.createElement("input", {
                    className: "twitter-timepicker",
                    type: "time",
                    onChange: function (e) {
                      u(e.target.value);
                    },
                    value: d,
                  })
                ),
                n.createElement(
                  "div",
                  { className: "d-grid" },
                  " ",
                  n.createElement("label", null, "Date"),
                  n.createElement("input", {
                    className: "twitter-date-input",
                    type: "date",
                    value: v,
                    onChange: function (e) {
                      b(e.target.value),
                        (function (e) {
                          var t = e.toString().split("-"),
                            r = t[1].replace(/0/g, ""),
                            n = t[2].replace(/0/g, ""),
                            a = t[0].slice(2);
                          m("".concat(r, "/").concat(n, "/").concat(a));
                        })(e.target.value);
                    },
                  })
                )
              ),
              n.createElement(
                "div",
                { className: "d-flex" },
                n.createElement(
                  "div",
                  { className: "d-grid" },
                  n.createElement("label", null, "Device"),
                  n.createElement(
                    "select",
                    {
                      className: "twitter-select",
                      onChange: function (e) {
                        p(!0), s(e.target.value);
                      },
                    },
                    n.createElement(
                      "option",
                      { value: "Twitter For iPhone" },
                      "Twitter For iPhone"
                    ),
                    n.createElement(
                      "option",
                      { value: "Twitter Web App" },
                      "Twitter Web App"
                    )
                  )
                )
              )
            );
          },
          Ke = r(8392),
          Ye = {};
        (Ye.styleTagTransform = g()),
          (Ye.setAttributes = u()),
          (Ye.insert = p().bind(null, "head")),
          (Ye.domAPI = c()),
          (Ye.insertStyleElement = h()),
          i()(Ke.Z, Ye),
          Ke.Z && Ke.Z.locals && Ke.Z.locals;
        var Fe = function (e) {
            var t = e.profZoom,
              r = e.profX,
              a = e.profY,
              o = e.setProfX,
              i = e.setProfY,
              l = e.setProfZoom,
              c = e.selectedProf,
              s = e.previewProf,
              p = e.uploadProf,
              d = e.setPreviewProf,
              u = e.setSelectedProf;
            return n.createElement(
              "div",
              { className: "d-grid" },
              c
                ? n.createElement(
                    "div",
                    null,
                    n.createElement(
                      "div",
                      { className: "upload-container" },
                      n.createElement(
                        "div",
                        { className: "crop-border" },
                        n.createElement(
                          "div",
                          { className: "vertical" },
                          n.createElement(j.G, {
                            className: "arrow-up",
                            icon: ["fa", "arrow-up"],
                            onClick: function () {
                              i(a + 10);
                            },
                          }),
                          n.createElement(j.G, {
                            className: "arrow-down",
                            icon: ["fa", "arrow-down"],
                            onClick: function () {
                              i(a - 10);
                            },
                          })
                        ),
                        n.createElement(
                          "div",
                          { className: "horizontal" },
                          n.createElement(j.G, {
                            className: "arrow-left",
                            icon: ["fa", "arrow-left"],
                            onClick: function () {
                              o(r + 10);
                            },
                          }),
                          n.createElement(j.G, {
                            className: "arrow-right",
                            icon: ["fa", "arrow-right"],
                            onClick: function () {
                              o(r - 10);
                            },
                          })
                        )
                      ),
                      c &&
                        n.createElement(
                          "div",
                          { className: "sidebar" },
                          n.createElement(
                            "div",
                            null,
                            n.createElement(j.G, {
                              className: "clear",
                              icon: ["fa", "trash"],
                              onClick: function () {
                                d(), u();
                              },
                            })
                          ),
                          n.createElement(
                            "div",
                            { className: "d-grid" },
                            n.createElement(j.G, {
                              className: "zoom",
                              icon: ["fa", "magnifying-glass-plus"],
                              onClick: function () {
                                t < 200 && l(t + 10);
                              },
                            }),
                            n.createElement(j.G, {
                              className: "zoom",
                              icon: ["fa", "magnifying-glass-minus"],
                              onClick: function () {
                                t > 100 && l(t - 10);
                              },
                            })
                          ),
                          n.createElement(
                            "div",
                            null,
                            n.createElement(j.G, {
                              className: "reset",
                              icon: ["fa", "rotate-left"],
                              onClick: function () {
                                o(0), i(0), l(100);
                              },
                            })
                          )
                        ),
                      n.createElement(
                        "div",
                        null,
                        c &&
                          n.createElement("img", {
                            className: "pic",
                            src: s,
                            alt: "",
                            style: {
                              transform: "scale("
                                .concat(t, "%) translate(")
                                .concat(r, "px, ")
                                .concat(a, "px)"),
                              width: "100%",
                            },
                          })
                      )
                    )
                  )
                : n.createElement(
                    "div",
                    { onChange: p },
                    n.createElement(
                      "div",
                      { className: "upload-container upload-container-hover" },
                      n.createElement(
                        "div",
                        { className: "upload" },
                        n.createElement("input", {
                          type: "file",
                          accept: "image/*",
                          title: "",
                          onChange: p,
                          className: "hidden-input",
                        }),
                        n.createElement(
                          "span",
                          null,
                          "Click here to upload profile pic"
                        ),
                        n.createElement(
                          "div",
                          null,
                          n.createElement(j.G, { icon: ["fa", "upload"] })
                        )
                      )
                    )
                  )
            );
          },
          Je = function (e) {
            var t = e.setName,
              r = e.verified,
              a = e.setVerified,
              o = e.setHandle,
              i = e.setTweet,
              l = e.setDevice,
              c = e.setIsActive,
              s = e.time,
              p = e.setTime,
              d = e.setMeridiem,
              u = e.setDate,
              m = e.date,
              h = e.setIsPopular,
              f = e.setPopular,
              g = e.uploadProf,
              w = e.previewProf,
              v = e.setPreviewProf,
              b = e.selectedProf,
              x = e.setSelectedProf,
              y = e.profZoom,
              E = e.profX,
              k = e.profY,
              N = e.setProfX,
              T = e.setProfY,
              S = e.setProfZoom;
            return n.createElement(
              "div",
              { className: "twitter-upload-container" },
              n.createElement(
                C.Z,
                {
                  defaultActiveKey: "tweet",
                  id: "uncontrolled-tab-example",
                  className: "twitter-upload-header mb-3",
                },
                n.createElement(
                  _.Z,
                  { eventKey: "tweet", title: "Tweet" },
                  n.createElement(Re, {
                    setName: t,
                    verified: r,
                    setVerified: a,
                    setHandle: o,
                    setTweet: i,
                    setDevice: l,
                    setIsActive: c,
                    time: s,
                    setTime: p,
                    setMeridiem: d,
                    setDate: u,
                    date: m,
                    setIsPopular: h,
                    setPopular: f,
                    setSelectedProf: x,
                  })
                ),
                n.createElement(
                  _.Z,
                  { eventKey: "upload", title: "Upload" },
                  n.createElement(Fe, {
                    uploadProf: g,
                    previewProf: w,
                    setPreviewProf: v,
                    selectedProf: b,
                    setSelectedProf: x,
                    profZoom: y,
                    profX: E,
                    profY: k,
                    setProfX: N,
                    setProfY: T,
                    setProfZoom: S,
                  })
                )
              )
            );
          },
          He = r(9859),
          Xe = {};
        function Ue(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var r =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != r) {
                var n,
                  a,
                  o,
                  i,
                  l = [],
                  c = !0,
                  s = !1;
                try {
                  if (((o = (r = r.call(e)).next), 0 === t)) {
                    if (Object(r) !== r) return;
                    c = !1;
                  } else
                    for (
                      ;
                      !(c = (n = o.call(r)).done) &&
                      (l.push(n.value), l.length !== t);
                      c = !0
                    );
                } catch (e) {
                  (s = !0), (a = e);
                } finally {
                  try {
                    if (
                      !c &&
                      null != r.return &&
                      ((i = r.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (s) throw a;
                  }
                }
                return l;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return We(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? We(e, t)
                    : void 0
                );
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function We(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        (Xe.styleTagTransform = g()),
          (Xe.setAttributes = u()),
          (Xe.insert = p().bind(null, "head")),
          (Xe.domAPI = c()),
          (Xe.insertStyleElement = h()),
          i()(He.Z, Xe),
          He.Z && He.Z.locals && He.Z.locals;
        var Ve = new Date(),
          $e = Ve.getFullYear().toString().slice(-2),
          qe = Ve.getHours() % 12,
          Qe = ""
            .concat(Ve.getMonth() + 1, "/")
            .concat(Ve.getDate(), "/")
            .concat($e),
          et =
            Ve.getMinutes() < 10
              ? "".concat(qe, ":0").concat(Ve.getMinutes())
              : "".concat(qe, ":").concat(Ve.getMinutes()),
          tt = function (e) {
            var t = Ue((0, n.useState)(!1), 2),
              r = t[0],
              a = t[1],
              o = Ue((0, n.useState)("Name"), 2),
              i = o[0],
              l = o[1],
              c = Ue((0, n.useState)(!0), 2),
              s = c[0],
              p = c[1],
              d = Ue((0, n.useState)("Handle"), 2),
              u = d[0],
              m = d[1],
              h = Ue((0, n.useState)("This is a tweet."), 2),
              f = h[0],
              g = h[1],
              w = Ue((0, n.useState)(et), 2),
              v = w[0],
              b = w[1],
              x = Ue((0, n.useState)(Ve.getHours() >= 12 ? "PM" : "AM"), 2),
              y = x[0],
              E = x[1],
              k = Ue((0, n.useState)(Qe), 2),
              N = k[0],
              T = k[1],
              S = Ue((0, n.useState)("Twitter For iPhone"), 2),
              P = S[0],
              _ = S[1],
              C = Ue((0, n.useState)(), 2),
              Z = C[0],
              A = C[1],
              z = Ue((0, n.useState)(), 2),
              L = z[0],
              B = z[1],
              O = Ue((0, n.useState)(100), 2),
              j = O[0],
              I = O[1],
              D = Ue((0, n.useState)(0), 2),
              M = D[0],
              G = D[1],
              R = Ue((0, n.useState)(0), 2),
              K = R[0],
              Y = R[1],
              F = Ue((0, n.useState)(!1), 2),
              J = F[0],
              H = F[1],
              X = Ue((0, n.useState)(), 2),
              U = X[0],
              W = X[1],
              V = Ue((0, n.useState)(!1), 2),
              $ = V[0],
              q = V[1],
              Q = Ue((0, n.useState)(!1), 2),
              ee = Q[0],
              te = Q[1];
            return (
              (0, n.useEffect)(
                function () {
                  if (Z) {
                    var e = URL.createObjectURL(Z);
                    return (
                      B(e),
                      function () {
                        return URL.revokeObjectURL(e);
                      }
                    );
                  }
                  A(void 0);
                },
                [Z]
              ),
              n.createElement(
                "div",
                { className: "content p-3 pt-0" },
                n.createElement(Je, {
                  setName: l,
                  verified: s,
                  setVerified: p,
                  setHandle: m,
                  setTweet: g,
                  setDevice: _,
                  setIsActive: a,
                  setMeridiem: E,
                  time: v,
                  setTime: b,
                  setDate: T,
                  date: N,
                  setIsPopular: H,
                  setPopular: W,
                  uploadProf: function (e) {
                    H(!1),
                      e.target.files && 0 !== e.target.files.length
                        ? (a(!0), A(e.target.files[0]))
                        : A(void 0);
                  },
                  previewProf: L,
                  setPreviewProf: B,
                  setSelectedProf: A,
                  selectedProf: Z,
                  profZoom: j,
                  profX: M,
                  profY: K,
                  setProfX: G,
                  setProfY: Y,
                  setProfZoom: I,
                }),
                n.createElement(Ae, {
                  switchDevice: ee,
                  setSwitchDevice: te,
                  isDarkMode: $,
                  setIsDarkMode: q,
                  name: i,
                  verified: s,
                  handle: u,
                  tweet: f,
                  time: v,
                  meridiem: y,
                  date: N,
                  device: P,
                  isActive: r,
                  isPopular: J,
                  popular: U,
                  previewProf: L,
                  selectedProf: Z,
                  profZoom: j,
                  profX: M,
                  profY: K,
                })
              )
            );
          },
          rt = function () {
            return n.createElement(
              "div",
              { className: "main" },
              n.createElement(
                "div",
                { className: "content-container" },
                n.createElement(
                  C.Z,
                  {
                    defaultActiveKey: "youtube",
                    id: "uncontrolled-tab-example",
                    className: "",
                  },
                  n.createElement(
                    _.Z,
                    {
                      eventKey: "youtube",
                      title: "YouTube",
                      className: "youtube-tab",
                    },
                    n.createElement(we, null)
                  ),
                  n.createElement(
                    _.Z,
                    { eventKey: "twitter", title: "Twitter" },
                    n.createElement(tt, null)
                  ),
                  n.createElement(
                    _.Z,
                    { eventKey: "about", title: "About" },
                    n.createElement(P, null)
                  )
                )
              )
            );
          },
          nt = r(9417);
        I.vI.add(
          nt.FPD,
          nt.r5q,
          nt.acZ,
          nt.eFW,
          nt.$aW,
          nt.q9v,
          nt.Wq6,
          nt.XnX,
          nt.cf$,
          nt.Uwo
        );
        var at,
          ot = function () {
            return React.createElement(
              "div",
              { className: "App" },
              React.createElement(N, null),
              React.createElement(rt, null)
            );
          };
        a
          .createRoot(document.getElementById("root"))
          .render(
            n.createElement(n.StrictMode, null, n.createElement(ot, null))
          ),
          at &&
            at instanceof Function &&
            r
              .e(131)
              .then(r.bind(r, 2131))
              .then(function (e) {
                var t = e.getCLS,
                  r = e.getFID,
                  n = e.getFCP,
                  a = e.getLCP,
                  o = e.getTTFB;
                t(at), r(at), n(at), a(at), o(at);
              });
      },
      4554: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([e.id, ".App{min-height:100%}", ""]), (t.Z = i);
      },
      4203: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          ".header{width:100%;display:flex;align-items:center;padding:10px;background-color:#fff;border-bottom:1px solid rgba(0,0,0,.6)}.header .logo{align-items:center}.header h1{font-size:35px;align-items:center}",
          "",
        ]),
          (t.Z = i);
      },
      414: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          ".main{height:calc(100% - 70.77px)}.about{display:flex;min-width:420px;font-size:15px;font-weight:bold;max-width:801px;height:100%}@media screen and (max-width: 1023px){.about{max-width:801px}}@media screen and (max-width: 830px){.about{max-width:436px;min-width:420px}}",
          "",
        ]),
          (t.Z = i);
      },
      5534: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          ".main{height:calc(100% - 70.77px);min-width:390px}.main .content-container{border:1px solid rgba(0,0,0,.6);border-top:none;background-color:#fff;margin:0 auto;width:fit-content;min-height:100%}.main .content-container .content{padding:1rem;padding-top:0em}.toggle{color:rgba(255,0,0,.5);margin-left:5px;padding:0}.preview-header{display:flex;justify-content:space-between;align-items:center}.preview-header h4{font-size:20px;text-align:center;color:rgba(128,128,128,.5);margin-bottom:0}.switch{display:flex;align-items:center}.nav-link.active{color:#000 !important;font-weight:500;text-decoration:none !important}.nav-link.active:hover{cursor:default;opacity:1 !important}.nav-link{color:rgba(128,128,128,.5) !important}.nav-link:hover{opacity:.75 !important;text-decoration:underline}.nav-tabs{--bs-nav-tabs-border-width: 0;--bs-nav-tabs-border-radius: 0}@media screen and (min-width: 831px){.content-container .content{justify-content:space-between;min-height:fit-content}}@media screen and (max-width: 830px){.create{display:block}.content-container{width:fit-content;padding-bottom:10px}.content-container .content{flex-direction:column;align-items:center}}@media screen and (max-height: 800px){.main .content-container{border-top:0;border-bottom:0}}@media screen and (max-width: 450px){.main .content-container{margin:0 auto;width:100%;border:none}.main .content-container .content{padding:0px !important}.main .content-container .content .upload-content-container{padding:.25em !important;padding-bottom:1em !important}.main .content-container .content .preview{padding:1em 0px !important}}",
          "",
        ]),
          (t.Z = i);
      },
      9375: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          ".twitter-download{text-align:center;align-items:center;border:1px solid #000;background-color:#1d9bf0;color:#fff;padding:10px}.twitter-download:hover{cursor:pointer;opacity:.75}.twitter-not-active{cursor:default;text-align:center;align-items:center;border:1px solid #000;background-color:rgba(29,155,240,.75);color:#fff;padding:10px}",
          "",
        ]),
          (t.Z = i);
      },
      1588: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          ".twitter-preview{padding:8px 16px 16px}.twitter-preview .twitter-preview-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}.twitter-preview .twitter-preview-header h4{font-size:20px;text-align:center;color:rgba(128,128,128,.5);margin-bottom:0}.twitter-preview .light{background-color:#fff}.twitter-preview .light .twitter-name{color:#2d3234;overflow-wrap:break-word}.twitter-preview .light .twitter-handle{color:#79848c}.twitter-preview .light .tweet{font-weight:300;overflow-wrap:break-word}.twitter-preview .light .tweet-time,.twitter-preview .light .tweet-date{color:#606a6b}.twitter-preview .light .tweet-bullet{background-color:#606a6b}.twitter-preview .light .tweet-device{color:#47a4e3}.twitter-preview .dark{background-color:#000}.twitter-preview .dark .twitter-name{color:#fff;overflow-wrap:break-word}.twitter-preview .dark .twitter-handle{color:#717374}.twitter-preview .dark .tweet{color:#fff;font-weight:200;overflow-wrap:break-word}.twitter-preview .dark .tweet-time,.twitter-preview .dark .tweet-date{color:#717374}.twitter-preview .dark .tweet-bullet{background-color:#717374}.twitter-preview .dark .tweet-device{color:#21a6ff}.twitter-preview .twitter-preview-container{padding:10px 20px 5px 10px;min-width:370px;max-width:370px}.twitter-preview .twitter-preview-container .account-info{margin-bottom:4px;line-height:15px}.twitter-preview .twitter-preview-container .account-info .twitter-popular-prof{width:48px;height:48px;margin-right:5px;border-radius:50%;border:.25px solid rgba(0,0,0,.05)}.twitter-preview .twitter-preview-container .account-info .twitter-custom-prof{background-color:#1d9bf0;width:48px;height:48px;margin-right:5px;border-radius:50%;overflow:hidden}.twitter-preview .twitter-preview-container .account-info .twitter-custom-prof img{width:100%}.twitter-preview .twitter-preview-container .account-info .twitter-prof{width:48px;height:48px;margin-right:5px;border-radius:50%;border:1px dashed rgba(29,155,240,.5);background-color:rgba(29,155,240,.1)}.twitter-preview .twitter-preview-container .account-info .indent{font-size:13px;padding-top:5px;height:5px}.twitter-preview .twitter-preview-container .account-info .twitter-name{margin-top:2px;font-weight:700}.twitter-preview .twitter-preview-container .account-info .verified,.twitter-preview .twitter-preview-container .account-info .verified-dark{width:15.02px;height:15.02px;margin-left:3px;margin-top:1px}.twitter-preview .twitter-preview-container .tweet{line-height:28px;font-size:23px;margin:30px 0 20px 0}.twitter-preview .twitter-preview-container .tweet-info{display:flex}.twitter-preview .twitter-preview-container .tweet-info .tweet-time,.twitter-preview .twitter-preview-container .tweet-info .tweet-date{font-size:14px}.twitter-preview .twitter-preview-container .tweet-info .tweet-bullet{display:flex;margin:auto 5px;width:2px;height:2px;border-radius:100%}.twitter-preview .twitter-preview-container .tweet-info .tweet-device{font-size:14px}",
          "",
        ]),
          (t.Z = i);
      },
      9859: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([e.id, ".content{display:flex;justify-content:flex-start}", ""]),
          (t.Z = i);
      },
      6087: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          '.twitter-switch-checkbox{height:0;width:0;visibility:hidden}.twitter-switch-label{display:flex;align-items:center;justify-content:space-between;cursor:pointer;width:50px;height:25px;background:gray;border-radius:100px;position:relative;transition:background-color .2s}.twitter-switch-label .twitter-switch-button{content:"";position:absolute;top:1px;left:1px;width:22.5px;height:22.5px;border-radius:22.5px;transition:.2s;background:#fff;box-shadow:0 0 2px 0 rgba(29,155,240,.29)}.twitter-switch-checkbox:checked+.twitter-switch-label .twitter-switch-button{left:calc(100% - 2px);transform:translateX(-100%)}.twitter-switch-label:active .twitter-switch-button{width:30px}',
          "",
        ]),
          (t.Z = i);
      },
      8392: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          ".twitter-upload-container{margin-top:20px;padding:1em;padding-top:0;overflow:hidden;background-size:contain;position:relative}.twitter-upload-container .twitter-upload-header{font-size:13px}.twitter-upload-container .nav-link.active{color:rgba(29,155,240,.75) !important}.twitter-upload-container .nav-link{color:#000 !important}.twitter-upload-container .nav-link:hover{opacity:1 !important;text-decoration:none}.twitter-upload-container .nav-tabs{--bs-nav-tabs-border-width: 1px;--bs-nav-tabs-border-radius: 0}",
          "",
        ]),
          (t.Z = i);
      },
      7117: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          '.twitter-popular-container{margin-top:20px;min-height:100px}.twitter-popular-container .scroll{overflow-x:scroll;max-width:330px;padding:10px 0 0 0;padding-bottom:20px}.twitter-popular-container .scroll .before-overlay{content:"";position:absolute;z-index:1;top:95px;left:0;height:85px;pointer-events:none;background-image:linear-gradient(to left, rgba(255, 255, 255, 0), white);width:15%}.twitter-popular-container .scroll .overlay{content:"";position:absolute;z-index:1;top:95px;right:0;height:85px;pointer-events:none;background-image:linear-gradient(to right, rgba(255, 255, 255, 0), white);width:15%}.twitter-popular-container label{margin-bottom:.25em}.twitter-popular-container .twitter-popular{margin-right:1.25em;min-width:65px;max-width:65px}.twitter-popular-container .twitter-popular:hover{cursor:pointer;opacity:.75}.twitter-popular-container .twitter-popular .popular-label{text-align:center;color:#fff;background-color:#fff;opacity:.75;border:1px solid rgba(0,0,0,.6);font-size:10px}.twitter-popular-container .twitter-popular .blank-popular-label{text-align:center;color:#000;background-color:rgba(128,128,128,.1);opacity:.75;font-size:10px}.twitter-popular-container .twitter-popular img{border-radius:50%;width:75px;height:100%;border:1px solid rgba(0,0,0,.6)}.twitter-popular-container .twitter-popular .twitter-blank-popular{border-radius:50%;width:75px;height:100%;background-color:rgba(29,155,240,.1);border:1px dashed rgba(29,155,240,.5)}@media screen and (max-width: 1023px){.twitter-popular-container .scroll{width:370px}.twitter-popular-container .scroll .overlay{bottom:58px}.twitter-popular-container .scroll .before-overlay{bottom:58px}}@media screen and (max-width: 830px){.twitter-popular-container{padding:10px 0;width:100%;position:relative}.twitter-popular-container .scroll .overlay{top:45px;right:0;background-image:linear-gradient(to right, rgba(255, 255, 255, 0), white)}.twitter-popular-container .scroll .before-overlay{top:45px;left:0;background-image:linear-gradient(to left, rgba(255, 255, 255, 0), white)}}',
          "",
        ]),
          (t.Z = i);
      },
      5520: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          ".center{align-items:baseline}.twitter-input-container{margin-bottom:3px;height:fit-content}.twitter-input-container label{font-size:18px}.twitter-input-container .twitter-input,.twitter-input-container textarea{width:333px}.twitter-input-container .twitter-input,.twitter-input-container textarea{background-color:rgba(128,128,128,.1);margin-bottom:10px;padding-left:10px;font-size:25px;outline:none;border:1px dashed rgba(128,128,128,.75);resize:none}.twitter-input-container .twitter-name{background-color:rgba(128,128,128,.1);margin-bottom:10px;padding-left:10px;font-size:25px;outline:none;border:1px dashed rgba(128,128,128,.75);resize:none}.twitter-input-container .twitter-input:focus,.twitter-input-container textarea:focus{background-color:rgba(128,128,128,.25)}.twitter-date-input,.twitter-timepicker,.twitter-select{background-color:rgba(128,128,128,.1);outline:none;border:1px dashed rgba(128,128,128,.75);font-size:18px;margin-bottom:10px;height:40px}.twitter-date-input,.twitter-timepicker{width:160px}.form-check-input{height:42px;width:42px;margin-top:1px;border-radius:0 !important;float:right;background-color:rgba(128,128,128,.1);outline:none;border:1px dashed rgba(128,128,128,.75)}.form-check-input:focus{box-shadow:none;border:1px dashed rgba(128,128,128,.75)}.form-check-input:checked{background-color:#1d9bf0}",
          "",
        ]),
          (t.Z = i);
      },
      6299: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          ".download{width:372px;border:1px solid #000;background-color:red;color:#fff;padding:10px}.download:hover{opacity:.75}.not-active{cursor:default;text-align:center;align-items:center;width:372px;border:1px solid #000;background-color:red;color:#fff;padding:10px;opacity:.75}",
          "",
        ]),
          (t.Z = i);
      },
      9351: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          '.mobile-preview-dark{height:fit-content;min-width:370px;max-width:370px;background-color:#161616}.mobile-preview-dark .dark .thumbnail-border{border-bottom:1px dashed rgba(255,0,0,.503)}.mobile-preview-dark .dark .upload-thumbnail{background-color:rgba(255,0,0,.1);aspect-ratio:1.7778552503;display:flex;flex-direction:column;flex-wrap:wrap-reverse;overflow:hidden;background-size:contain;position:relative}.mobile-preview-dark .dark .upload-thumbnail .template{width:100%;z-index:1;position:absolute}.mobile-preview-dark .dark .upload-thumbnail .hidden-input{cursor:pointer;opacity:0;position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}.mobile-preview-dark .dark .upload-thumbnail .upload{text-align:center;margin:auto 0;color:rgba(255,0,0,.5)}.mobile-preview-dark .dark .upload-thumbnail .time-stamp{font-family:"Roboto","Arial",sans-serif;border-radius:4px;font-size:14px;background-color:rgba(0,0,0,.8);color:#fff;opacity:.9;padding:0 4px;width:fit-content;position:absolute;bottom:0;margin-top:auto;margin-bottom:4px;margin-right:4px}.mobile-preview-dark .dark .thumbnail{aspect-ratio:1.7778552503;display:flex;flex-direction:column;flex-wrap:wrap-reverse;overflow:hidden;background-size:contain;position:relative}.mobile-preview-dark .dark .thumbnail .hidden-input{cursor:pointer;opacity:0;position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}.mobile-preview-dark .dark .thumbnail .hidden-upload-icon{cursor:pointer;color:rgba(255,0,0,.75);opacity:1;display:none;position:absolute;top:0;left:0;bottom:0;right:0;margin:auto 0;width:100%}.mobile-preview-dark .dark .thumbnail .pic{width:100%}.mobile-preview-dark .dark .thumbnail .template{width:100%;z-index:1;position:absolute}.mobile-preview-dark .dark .thumbnail .time-stamp{font-family:"Roboto","Arial",sans-serif;border-radius:4px;font-size:14px;background-color:rgba(0,0,0,.8);color:#fff;opacity:.9;padding:0 4px;width:fit-content;position:absolute;bottom:0;margin-top:auto;margin-bottom:4px;margin-right:4px;z-index:9999}.mobile-preview-dark .dark .cover-this{background-color:red}.mobile-preview-dark .dark .upload-channel-pic{border-radius:50%;font-size:18px;border:1px dashed rgba(255,0,0,.5);width:38px;height:38px;background-color:rgba(255,0,0,.1);margin:10px 10px 40px 10px;overflow:hidden;background-size:contain;position:relative}.mobile-preview-dark .dark .upload-channel-pic .hidden-input{cursor:pointer;opacity:0;position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}.mobile-preview-dark .dark .upload-channel-pic .user-plus-icon{margin:9px 9px;align-items:center;color:rgba(255,0,0,.5)}.mobile-preview-dark .dark .channel-pic{border-radius:50%;width:38px;height:38px;margin:10px 10px 40px 10px;overflow:hidden;position:relative;background-color:red}.mobile-preview-dark .dark .channel-pic img{height:100%;width:100%;object-fit:contain}.mobile-preview-dark .dark .channel-temp{border-radius:50%;width:38px;height:38px;margin:10px 10px 40px 10px;overflow:hidden;position:relative}.mobile-preview-dark .dark .channel-temp img{height:100%;width:100%;object-fit:contain}.mobile-preview-dark .dark .info{padding:0 24px 0 0;overflow-x:hidden;max-width:370px;word-wrap:break-word;min-width:325px}.mobile-preview-dark .dark .info .mobile-options{float:right;margin:15px 0 0 0;font-size:13px;color:#f1f1f1}.mobile-preview-dark .dark .info .details{display:flex;flex-wrap:nowrap;overflow:hidden}.mobile-preview-dark .dark .info .title{font-family:"Roboto","Arial",sans-serif;font-size:16.8px;color:#f1f1f1;margin:12px 0 0 0;line-height:normal;max-height:4rem;overflow:hidden;display:block;-webkit-line-clamp:2;text-overflow:ellipsis;white-space:wrap}.mobile-preview-dark .dark .info .channel-name,.mobile-preview-dark .dark .info .views,.mobile-preview-dark .dark .info .time-ago{font-family:"Roboto","Arial",sans-serif;color:#aaa;font-size:13.75px;overflow:hidden;text-overflow:ellipsis;white-space:wrap}.mobile-preview-dark .dark .info .bullet{background-color:#aaa;width:2px;height:2px;margin:auto 4px;border-radius:100%}',
          "",
        ]),
          (t.Z = i);
      },
      7384: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          '.mobile-preview{height:fit-content;min-width:370px;max-width:370px}.mobile-preview .mobile .thumbnail-border{border-bottom:1px dashed rgba(255,0,0,.503)}.mobile-preview .mobile .upload-thumbnail{background-color:rgba(255,0,0,.1);aspect-ratio:1.7778552503;display:flex;flex-direction:column;flex-wrap:wrap-reverse;overflow:hidden;background-size:contain;position:relative}.mobile-preview .mobile .upload-thumbnail .template{width:100%;z-index:1;position:absolute}.mobile-preview .mobile .upload-thumbnail .hidden-input{cursor:pointer;opacity:0;position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}.mobile-preview .mobile .upload-thumbnail .upload{text-align:center;margin:auto 0;color:rgba(255,0,0,.5)}.mobile-preview .mobile .upload-thumbnail .time-stamp{font-family:"Roboto","Arial",sans-serif;border-radius:4px;font-size:14px;background-color:rgba(0,0,0,.8);color:#fff;opacity:.9;padding:0 4px;width:fit-content;position:absolute;bottom:0;margin-top:auto;margin-bottom:4px;margin-right:4px}.mobile-preview .mobile .thumbnail{aspect-ratio:1.7778552503;display:flex;flex-direction:column;flex-wrap:wrap-reverse;overflow:hidden;background-size:contain;position:relative}.mobile-preview .mobile .thumbnail .hidden-input{cursor:pointer;opacity:0;position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}.mobile-preview .mobile .thumbnail .hidden-upload-icon{cursor:pointer;color:rgba(255,0,0,.75);opacity:1;display:none;position:absolute;top:0;left:0;bottom:0;right:0;margin:auto 0;width:100%}.mobile-preview .mobile .thumbnail .pic{width:100%}.mobile-preview .mobile .thumbnail .template{width:100%;z-index:1;position:absolute}.mobile-preview .mobile .thumbnail .time-stamp{font-family:"Roboto","Arial",sans-serif;border-radius:4px;font-size:14px;background-color:rgba(0,0,0,.8);color:#fff;opacity:.9;padding:0 4px;width:fit-content;position:absolute;bottom:0;margin-top:auto;margin-bottom:4px;margin-right:4px;z-index:9999}.mobile-preview .mobile .cover-this{background-color:red}.mobile-preview .mobile .upload-channel-pic{border-radius:50%;font-size:18px;border:1px dashed rgba(255,0,0,.5);width:38px;height:38px;background-color:rgba(255,0,0,.1);margin:10px 10px 40px 10px;overflow:hidden;background-size:contain;position:relative}.mobile-preview .mobile .upload-channel-pic .hidden-input{cursor:pointer;opacity:0;position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}.mobile-preview .mobile .upload-channel-pic .user-plus-icon{margin:9px 9px;align-items:center;color:rgba(255,0,0,.5)}.mobile-preview .mobile .channel-pic{border-radius:50%;width:38px;height:38px;margin:10px 10px 40px 10px;overflow:hidden;position:relative;background-color:red}.mobile-preview .mobile .channel-pic img{height:100%;width:100%;object-fit:contain}.mobile-preview .mobile .channel-temp{border-radius:50%;width:38px;height:38px;margin:10px 10px 40px 10px;overflow:hidden;position:relative}.mobile-preview .mobile .channel-temp img{height:100%;width:100%;object-fit:contain}.mobile-preview .mobile .info{padding:0 24px 0 0;overflow-x:hidden;max-width:370px;word-wrap:break-word;min-width:325px}.mobile-preview .mobile .info .mobile-options{float:right;margin:15px 0 0 0;font-size:13px;color:#575757}.mobile-preview .mobile .info .details{display:flex;flex-wrap:nowrap;overflow:hidden}.mobile-preview .mobile .info .title{font-family:"Roboto","Arial",sans-serif;font-size:16.8px;color:#0f0f0f;margin:12px 0 0 0;line-height:normal;max-height:4rem;overflow:hidden;display:block;-webkit-line-clamp:2;text-overflow:ellipsis;white-space:wrap}.mobile-preview .mobile .info .channel-name,.mobile-preview .mobile .info .views,.mobile-preview .mobile .info .time-ago{font-family:"Roboto","Arial",sans-serif;color:#575757;font-size:13.75px;word-wrap:break-word}.mobile-preview .mobile .info .bullet{background-color:#575757;width:2px;height:2px;margin:auto 4px;border-radius:100%}',
          "",
        ]),
          (t.Z = i);
      },
      7542: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          ".upload-content-container{margin-top:20px;padding:1em;padding-top:0;overflow:hidden;background-size:contain;position:relative}.upload-content-container .upload-header{font-size:13px}.upload-content-container .nav-link.active{color:rgba(255,0,0,.75) !important}.upload-content-container .nav-link{color:#000 !important}.upload-content-container .nav-link:hover{opacity:1 !important;text-decoration:none}.upload-content-container .nav-tabs{--bs-nav-tabs-border-width: 1px;--bs-nav-tabs-border-radius: 0}.preview{padding:1em;padding-top:.5em}.preview .preview-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}.preview .preview-header h4{font-size:20px;text-align:center;color:rgba(128,128,128,.5);margin-bottom:0}.preview .switch{display:flex;align-items:center}.preview .nav-link.active{color:#000 !important;font-weight:500;text-decoration:none !important}.preview .nav-link.active:hover{cursor:default;opacity:1 !important}.info-ad-box{display:flex;justify-content:center;align-items:center;margin-top:7px;height:210px;border:1px dashed rgba(128,128,128,.75);background-color:rgba(0,128,0,.5)}.sm-thumbnail-ad-box{display:none}@media screen and (max-width: 1023px){.upload-content-container{width:fit-content}.upload-content-container .sm-thumbnail-ad-box{display:flex;justify-content:center;align-items:center;margin-top:11px;height:90px;border:1px dashed rgba(128,128,128,.75);background-color:rgba(0,128,0,.5)}.preview,.preview-container{width:fit-content}.preview-header{display:flex;justify-content:space-between}}@media screen and (max-width: 1023px)and (max-width: 830px){.upload-content-container{min-height:none}.upload-content-container .sm-thumbnail-ad-box{display:none}.info-ad-box{display:none}.preview{border-top:1px solid rgba(255,0,0,.25)}}",
          "",
        ]),
          (t.Z = i);
      },
      3121: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          '.react-switch-checkbox{height:0;width:0;visibility:hidden}.react-switch-label{display:flex;align-items:center;justify-content:space-between;cursor:pointer;width:50px;height:25px;background:gray;border-radius:100px;position:relative;transition:background-color .2s}.react-switch-label .react-switch-button{content:"";position:absolute;top:1px;left:1px;width:22.5px;height:22.5px;border-radius:22.5px;transition:.2s;background:#fff;box-shadow:0 0 2px 0 rgba(10,10,10,.29)}.react-switch-checkbox:checked+.react-switch-label .react-switch-button{left:calc(100% - 2px);transform:translateX(-100%)}.react-switch-label:active .react-switch-button{width:30px}',
          "",
        ]),
          (t.Z = i);
      },
      6368: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          '.popular-container{margin-top:20px;min-height:100px}.popular-container .scroll{overflow-x:scroll;max-width:330px;padding:10px 0 0 0;padding-bottom:20px}.popular-container .scroll .before-overlay{content:"";position:absolute;z-index:1;bottom:33px;left:16px;height:85px;pointer-events:none;background-image:linear-gradient(to left, rgba(255, 255, 255, 0), white);width:5%}.popular-container .scroll .overlay{content:"";position:absolute;z-index:1;bottom:33px;right:18px;height:85px;pointer-events:none;background-image:linear-gradient(to right, rgba(255, 255, 255, 0), white);width:5%}.popular-container label{margin-bottom:.25em}.popular-container .popular{margin-right:1.25em;min-width:65px;max-width:65px}.popular-container .popular:hover{cursor:pointer;opacity:.75}.popular-container .popular .popular-label{text-align:center;color:#fff;background-color:#fff;opacity:.75;border:1px solid rgba(0,0,0,.6);font-size:10px}.popular-container .popular .blank-popular-label{text-align:center;color:#000;background-color:rgba(128,128,128,.1);opacity:.75;font-size:10px}.popular-container .popular img{border-radius:50%;width:75px;height:100%;border:1px solid rgba(0,0,0,.6)}.popular-container .popular .blank-popular{border-radius:50%;width:75px;height:100%;background-color:rgba(255,0,0,.1);border:1px dashed rgba(255,0,0,.5)}@media screen and (max-width: 1023px){.popular-container .scroll{width:370px}.popular-container .scroll .overlay{bottom:58px}.popular-container .scroll .before-overlay{bottom:58px}}@media screen and (max-width: 830px){.popular-container{padding:10px 0;width:100%;position:relative}.popular-container .scroll .overlay{bottom:25px;right:0px;background-image:linear-gradient(to right, rgba(255, 255, 255, 0), white)}.popular-container .scroll .before-overlay{bottom:25px;left:-1px;background-image:linear-gradient(to left, rgba(255, 255, 255, 0), white)}}',
          "",
        ]),
          (t.Z = i);
      },
      2297: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          ".upload-container-hover:hover{opacity:.75;transform:scale(101%)}.upload-channel-container{border:1px dashed rgba(128,128,128,.75);background-color:rgba(128,128,128,.1);border-radius:12px;width:333px;height:187.299px;display:flex;flex-direction:column;flex-wrap:wrap-reverse;overflow:hidden;background-size:contain;position:relative}.upload-channel-container img{-khtml-user-select:none;-o-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none}.upload-channel-container .crop-border{position:absolute;z-index:2;height:100%;left:0;width:292px}.upload-channel-container .crop-border .vertical{height:100%;display:flex;flex-direction:column;justify-content:space-between}.upload-channel-container .crop-border .vertical .arrow-up,.upload-channel-container .crop-border .vertical .arrow-down{background-color:rgba(0,0,0,.6);padding:7.5px 0 7.5px 18px;font-size:18px;color:#fff}.upload-channel-container .crop-border .vertical .arrow-up:hover,.upload-channel-container .crop-border .vertical .arrow-down:hover{cursor:pointer;background-color:rgba(0,0,0,.75)}.upload-channel-container .crop-border .horizontal{height:100px;width:100%;margin-top:33px;position:absolute;display:flex;top:0;justify-content:space-between}.upload-channel-container .crop-border .horizontal .arrow-left,.upload-channel-container .crop-border .horizontal .arrow-right{background-color:rgba(0,0,0,.6);padding:50.5px 7.5px;font-size:18px;color:#fff}.upload-channel-container .crop-border .horizontal .arrow-left:hover,.upload-channel-container .crop-border .horizontal .arrow-right:hover{cursor:pointer;background-color:rgba(0,0,0,.75)}.upload-channel-container .sidebar{position:absolute;background-color:#000;border-left:1px solid #000;margin-top:auto;z-index:2;padding:10px;display:flex;flex-direction:column;justify-content:space-between;height:100%}.upload-channel-container .sidebar .zoom,.upload-channel-container .sidebar .clear,.upload-channel-container .sidebar .reset{color:#fff;font-size:18px}.upload-channel-container .sidebar .zoom:hover,.upload-channel-container .sidebar .clear:hover,.upload-channel-container .sidebar .reset:hover{cursor:pointer;opacity:.75}.upload-channel-container .sidebar .zoom{margin-top:20px}.upload-channel-container .sidebar .reset:focus,.upload-channel-container .sidebar .reset:active{outline:none !important;box-shadow:none !important}.upload-channel-container .upload{text-align:center;margin:auto 0;color:rgba(128,128,128,.75)}.upload-channel-container .upload .hidden-input{cursor:pointer;opacity:0;position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}.notes{font-size:11px;max-width:500px;font-style:italic}.notes ul{list-style:none;margin-top:5px;padding-left:10px}@media screen and (max-width: 1023px){.upload-channel-container{width:333px;height:187.299px}.upload-channel-container .crop-border{width:329px}.upload-channel-container .crop-border .vertical .arrow-up,.upload-channel-container .crop-border .vertical .arrow-down{padding:7.5px 0 7.5px 10px;font-size:18px}.upload-channel-container .crop-border .horizontal{top:-2px;justify-content:space-between}.upload-channel-container .crop-border .horizontal .arrow-left,.upload-channel-container .crop-border .horizontal .arrow-right{padding:61px 7.5px;font-size:18px}.upload-channel-container .sidebar .zoom,.upload-channel-container .sidebar .clear,.upload-channel-container .sidebar .reset{font-size:18px}.upload-channel-container .sidebar .zoom{margin-top:20px}.notes{width:350px}}",
          "",
        ]),
          (t.Z = i);
      },
      4770: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          ".info-content{width:fit-content}.info-content .input-container .views-input,.info-content .input-container .posted-input{width:101.5px;margin-right:25px}.info-content .input-container{margin-bottom:3px;height:fit-content}.info-content .input-container .ago-select{background-color:rgba(128,128,128,.1);outline:none;border:1px dashed rgba(128,128,128,.75);padding:9.5px 0}.info-content .input-container label{font-size:18px;height:fit-content}.info-content .input-container input,.info-content .input-container input:focus{margin-bottom:10px;padding-left:10px;font-size:25px;outline:none;border:1px dashed rgba(128,128,128,.75)}.info-content .input-container input{background-color:rgba(128,128,128,.1)}.info-content .input-container input:focus{background-color:rgba(128,128,128,.25)}",
          "",
        ]),
          (t.Z = i);
      },
      3567: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          ".upload-container-hover:hover{opacity:.75;transform:scale(101%)}.upload-container{border:1px dashed rgba(128,128,128,.75);background-color:rgba(128,128,128,.1);border-radius:12px;width:333px;height:187.299px;display:flex;flex-direction:column;flex-wrap:wrap-reverse;overflow:hidden;background-size:contain;position:relative}.upload-container img{-khtml-user-select:none;-o-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none}.upload-container .crop-border{position:absolute;z-index:2;height:100%;left:0;width:292px}.upload-container .crop-border .vertical{height:100%;display:flex;flex-direction:column;justify-content:space-between}.upload-container .crop-border .vertical .arrow-up,.upload-container .crop-border .vertical .arrow-down{background-color:rgba(0,0,0,.6);padding:7.5px 0 7.5px 18px;font-size:18px;color:#fff}.upload-container .crop-border .vertical .arrow-up:hover,.upload-container .crop-border .vertical .arrow-down:hover{cursor:pointer;background-color:rgba(0,0,0,.75)}.upload-container .crop-border .horizontal{height:100px;width:100%;margin-top:33px;position:absolute;display:flex;top:0;justify-content:space-between}.upload-container .crop-border .horizontal .arrow-left,.upload-container .crop-border .horizontal .arrow-right{background-color:rgba(0,0,0,.6);padding:50.5px 7.5px;font-size:18px;color:#fff}.upload-container .crop-border .horizontal .arrow-left:hover,.upload-container .crop-border .horizontal .arrow-right:hover{cursor:pointer;background-color:rgba(0,0,0,.75)}.upload-container .sidebar{position:absolute;background-color:#000;border-left:1px solid #000;margin-top:auto;z-index:2;padding:10px;display:flex;flex-direction:column;justify-content:space-between;height:100%}.upload-container .sidebar .zoom,.upload-container .sidebar .clear,.upload-container .sidebar .reset{color:#fff;font-size:18px}.upload-container .sidebar .zoom:hover,.upload-container .sidebar .clear:hover,.upload-container .sidebar .reset:hover{cursor:pointer;opacity:.75}.upload-container .sidebar .zoom{margin-top:20px}.upload-container .sidebar .reset:focus,.upload-container .sidebar .reset:active{outline:none !important;box-shadow:none !important}.upload-container .upload{text-align:center;margin:auto 0;color:rgba(128,128,128,.75)}.upload-container .upload .hidden-input{cursor:pointer;opacity:0;position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}.notes{font-size:11px;max-width:500px;font-style:italic}.notes ul{list-style:none;margin-top:5px;padding-left:10px}.notes ul li{margin-bottom:5px}@media screen and (max-width: 1023px){.upload-container{width:333px;height:187.299px}.upload-container .crop-border{width:329px}.upload-container .crop-border .vertical .arrow-up,.upload-container .crop-border .vertical .arrow-down{padding:7.5px 0 7.5px 10px;font-size:18px}.upload-container .crop-border .horizontal{top:-2px;justify-content:space-between}.upload-container .crop-border .horizontal .arrow-left,.upload-container .crop-border .horizontal .arrow-right{padding:61px 7.5px;font-size:18px}.upload-container .sidebar .zoom,.upload-container .sidebar .clear,.upload-container .sidebar .reset{font-size:18px}.upload-container .sidebar .zoom{margin-top:20px}.notes{width:350px}}.notes-overlay:hover{cursor:pointer;text-decoration:underline}",
          "",
        ]),
          (t.Z = i);
      },
      7251: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          ".temp-container{margin-top:20px;min-height:100px}.temp-container label{margin-bottom:.25em}.temp-container .temp,.temp-container .blank-temp{min-width:157.25px;max-width:157.25px;min-height:88.445px}.temp-container .temp:hover,.temp-container .blank-temp:hover{cursor:pointer;opacity:.75}.temp-container .temp .temp-label,.temp-container .blank-temp .temp-label{text-align:center;color:#fff;background-color:red;opacity:.75;border:1px solid rgba(0,0,0,.6);font-size:10px}.temp-container .temp .blank-temp-label,.temp-container .blank-temp .blank-temp-label{text-align:center;color:#000;background-color:rgba(255,0,0,.1);opacity:.75;border:1px dashed rgba(255,0,0,.5);font-size:10px}.temp-container .temp img,.temp-container .blank-temp img{width:100%;height:100%;border:1px solid rgba(0,0,0,.6)}.temp-container-collapse{display:none}@media screen and (max-width: 830px){.temp-container{padding:10px 0;width:100%;position:relative}}",
          "",
        ]),
          (t.Z = i);
      },
      4800: function (e, t, r) {
        "use strict";
        var n = r(8081),
          a = r.n(n),
          o = r(3645),
          i = r.n(o)()(a());
        i.push([
          e.id,
          'html,body{font-family:"Roboto","Arial",sans-serif}body{margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}code{font-family:"Roboto","Arial",sans-serif}html,body,#root,.App{height:100%;background-color:#dae0e6}',
          "",
        ]),
          (t.Z = i);
      },
      9220: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Adam_Schefter.png!extract-loader!html-loader");
      },
      3200: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Barack_Obama.png!extract-loader!html-loader");
      },
      9392: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Barstool_Sports.png!extract-loader!html-loader");
      },
      2789: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Ben_Shapiro.png!extract-loader!html-loader");
      },
      8482: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Big_Cat.png!extract-loader!html-loader");
      },
      8538: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Bill_Gates.png!extract-loader!html-loader");
      },
      4157: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/CNN.png!extract-loader!html-loader");
      },
      5592: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/CNN_Breaking_News.png!extract-loader!html-loader");
      },
      3485: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Dave_Portnoy.png!extract-loader!html-loader");
      },
      8286: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Donald_Trump.png!extract-loader!html-loader");
      },
      8051: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Donald_Trump_Jr.png!extract-loader!html-loader");
      },
      9176: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Dr._Parik_Patel.png!extract-loader!html-loader");
      },
      1809: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/ESPN.png!extract-loader!html-loader");
      },
      3381: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Elon_Musk.png!extract-loader!html-loader");
      },
      3362: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Google.png!extract-loader!html-loader");
      },
      9150: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Ian_Rapoport.png!extract-loader!html-loader");
      },
      3583: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Internet_Hall_Of_Fame.png!extract-loader!html-loader");
      },
      8518: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Joe_Biden.png!extract-loader!html-loader");
      },
      2673: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Joe_Rogan.png!extract-loader!html-loader");
      },
      4107: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Justin_Bieber.png!extract-loader!html-loader");
      },
      8621: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Kamala_Harris.png!extract-loader!html-loader");
      },
      9759: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Kanye_West.png!extract-loader!html-loader");
      },
      7853: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Katy_Perry.png!extract-loader!html-loader");
      },
      4634: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Ken_Rosenthal.png!extract-loader!html-loader");
      },
      2854: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Kevin_Durant.png!extract-loader!html-loader");
      },
      4095: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Kim_Kardashian.png!extract-loader!html-loader");
      },
      7679: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Kylie_Jenner.png!extract-loader!html-loader");
      },
      6947: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/LeBron_James.png!extract-loader!html-loader");
      },
      3363: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Miley_Cyrus.png!extract-loader!html-loader");
      },
      5747: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/NASA.png!extract-loader!html-loader");
      },
      6196: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/NBA.png!extract-loader!html-loader");
      },
      2247: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/New_York_Times.png!extract-loader!html-loader");
      },
      4302: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Neymar.png!extract-loader!html-loader");
      },
      1174: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Ron_DeSantis.png!extract-loader!html-loader");
      },
      8816: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Scott_Hanson.png!extract-loader!html-loader");
      },
      9088: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Selena_Gomez.png!extract-loader!html-loader");
      },
      6847: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Shibetoshi_Nakamoto.png!extract-loader!html-loader");
      },
      3224: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Stephen_A_Smith.png!extract-loader!html-loader");
      },
      6198: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Taylor_Swift.png!extract-loader!html-loader");
      },
      4310: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/The_Babylon_Bee.png!extract-loader!html-loader");
      },
      2200: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/Twitter.png!extract-loader!html-loader");
      },
      5173: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/twitter/YouTube.png!extract-loader!html-loader");
      },
      679: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/youtube/Ben_Shapiro.png!extract-loader!html-loader");
      },
      3963: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/youtube/CBS.png!extract-loader!html-loader");
      },
      8786: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/youtube/CNN.png!extract-loader!html-loader");
      },
      2392: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/youtube/FOX.png!extract-loader!html-loader");
      },
      4478: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/youtube/Hot_Ones.png!extract-loader!html-loader");
      },
      4330: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/youtube/Joe_Rogan.png!extract-loader!html-loader");
      },
      830: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/youtube/Lyrical_Lemonade.png!extract-loader!html-loader");
      },
      6177: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/youtube/MLB.png!extract-loader!html-loader");
      },
      310: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/youtube/MSNBC.png!extract-loader!html-loader");
      },
      6608: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/youtube/Mr_Beast.png!extract-loader!html-loader");
      },
      3301: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/youtube/NBA.png!extract-loader!html-loader");
      },
      3852: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/youtube/NBC.png!extract-loader!html-loader");
      },
      2651: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/youtube/NELK.png!extract-loader!html-loader");
      },
      1043: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/youtube/NFL.png!extract-loader!html-loader");
      },
      8021: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/youtube/NHL.png!extract-loader!html-loader");
      },
      1512: function (e, t, r) {
        "use strict";
        r.r(t),
          (t.default =
            r.p +
            "src/static/popular/youtube/PewDiePie.png!extract-loader!html-loader");
      },
      6766: function (e, t, r) {
        var n = {
          "./Adam_Schefter.png": 9220,
          "./Barack_Obama.png": 3200,
          "./Barstool_Sports.png": 9392,
          "./Ben_Shapiro.png": 2789,
          "./Big_Cat.png": 8482,
          "./Bill_Gates.png": 8538,
          "./CNN.png": 4157,
          "./CNN_Breaking_News.png": 5592,
          "./Dave_Portnoy.png": 3485,
          "./Donald_Trump.png": 8286,
          "./Donald_Trump_Jr.png": 8051,
          "./Dr._Parik_Patel.png": 9176,
          "./ESPN.png": 1809,
          "./Elon_Musk.png": 3381,
          "./Google.png": 3362,
          "./Ian_Rapoport.png": 9150,
          "./Internet_Hall_Of_Fame.png": 3583,
          "./Joe_Biden.png": 8518,
          "./Joe_Rogan.png": 2673,
          "./Justin_Bieber.png": 4107,
          "./Kamala_Harris.png": 8621,
          "./Kanye_West.png": 9759,
          "./Katy_Perry.png": 7853,
          "./Ken_Rosenthal.png": 4634,
          "./Kevin_Durant.png": 2854,
          "./Kim_Kardashian.png": 4095,
          "./Kylie_Jenner.png": 7679,
          "./LeBron_James.png": 6947,
          "./Miley_Cyrus.png": 3363,
          "./NASA.png": 5747,
          "./NBA.png": 6196,
          "./New_York_Times.png": 2247,
          "./Neymar.png": 4302,
          "./Ron_DeSantis.png": 1174,
          "./Scott_Hanson.png": 8816,
          "./Selena_Gomez.png": 9088,
          "./Shibetoshi_Nakamoto.png": 6847,
          "./Stephen_A_Smith.png": 3224,
          "./Taylor_Swift.png": 6198,
          "./The_Babylon_Bee.png": 4310,
          "./Twitter.png": 2200,
          "./YouTube.png": 5173,
          "./popular.json": 7526,
        };
        function a(e) {
          var t = o(e);
          return r(t);
        }
        function o(e) {
          if (!r.o(n, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return n[e];
        }
        (a.keys = function () {
          return Object.keys(n);
        }),
          (a.resolve = o),
          (e.exports = a),
          (a.id = 6766);
      },
      5172: function (e, t, r) {
        var n = {
          "./Ben_Shapiro.png": 679,
          "./CBS.png": 3963,
          "./CNN.png": 8786,
          "./FOX.png": 2392,
          "./Hot_Ones.png": 4478,
          "./Joe_Rogan.png": 4330,
          "./Lyrical_Lemonade.png": 830,
          "./MLB.png": 6177,
          "./MSNBC.png": 310,
          "./Mr_Beast.png": 6608,
          "./NBA.png": 3301,
          "./NBC.png": 3852,
          "./NELK.png": 2651,
          "./NFL.png": 1043,
          "./NHL.png": 8021,
          "./PewDiePie.png": 1512,
          "./popular.json": 9005,
        };
        function a(e) {
          var t = o(e);
          return r(t);
        }
        function o(e) {
          if (!r.o(n, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return n[e];
        }
        (a.keys = function () {
          return Object.keys(n);
        }),
          (a.resolve = o),
          (e.exports = a),
          (a.id = 5172);
      },
      2204: function (e) {
        "use strict";
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";
      },
      9609: function (e) {
        "use strict";
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";
      },
      2469: function (e) {
        "use strict";
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";
      },
      7486: function (e) {
        "use strict";
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";
      },
      4144: function (e) {
        "use strict";
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";
      },
      6254: function (e) {
        "use strict";
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e";
      },
      2740: function (e) {
        "use strict";
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";
      },
      3460: function (e) {
        "use strict";
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";
      },
      5647: function (e) {
        "use strict";
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";
      },
      1692: function (e) {
        "use strict";
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";
      },
      6770: function (e) {
        "use strict";
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";
      },
      8931: function (e) {
        "use strict";
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";
      },
      6199: function (e) {
        "use strict";
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";
      },
      1217: function (e) {
        "use strict";
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";
      },
      2956: function (e) {
        "use strict";
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";
      },
      5122: function (e) {
        "use strict";
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";
      },
      7526: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '[{"name":"Elon Musk","handle":"elonmusk","img":"Elon_Musk.png"},{"name":"Donald J. Trump","handle":"realDonaldTrump","img":"Donald_Trump.png"},{"name":"Ye","handle":"kanyewest","img":"Kanye_West.png"},{"name":"Joe Biden","handle":"JoeBiden","img":"Joe_Biden.png"},{"name":"Twitter","handle":"Twitter","img":"Twitter.png"},{"name":"Kylie Jenner","handle":"KylieJenner","img":"Kylie_Jenner.png"},{"name":"Barack Obama","handle":"BarackObama","img":"Barack_Obama.png"},{"name":"The New York Times","handle":"nytimes","img":"New_York_Times.png"},{"name":"CNN","handle":"CNN","img":"CNN.png"},{"name":"Barstool Sports","handle":"barstoolsports","img":"Barstool_Sports.png"},{"name":"Dave Portnoy","handle":"stoolpresidente","img":"Dave_Portnoy.png"},{"name":"Big Cat","handle":"BarstoolBigCat","img":"Big_Cat.png"},{"name":"NASA","handle":"NASA","img":"NASA.png"},{"name":"Selena Gomez","handle":"selenagomez","img":"Selena_Gomez.png"},{"name":"Justin Bieber","handle":"justinbieber","img":"Justin_Bieber.png"},{"name":"Kim Kardashian","handle":"KimKardashian","img":"Kim_Kardashian.png"},{"name":"KATY PERRY","handle":"katyperry","img":"Katy_Perry.png"},{"name":"The Babylon Bee","handle":"TheBabylonBee","img":"The_Babylon_Bee.png"},{"name":"Kevin Durant","handle":"KDTrey5","img":"Kevin_Durant.png"},{"name":"Ian Rapoport","handle":"RapSheet","img":"Ian_Rapoport.png"},{"name":"Adam Schefter","handle":"AdamSchefter","img":"Adam_Schefter.png"},{"name":"Ken Rosenthal","handle":"Ken_Rosenthal","img":"Ken_Rosenthal.png"},{"name":"Stephen A Smith","handle":"stephenasmith","img":"Stephen_A_Smith.png"},{"name":"Shibetoshi Nakamoto","handle":"BillyM2K","img":"Shibetoshi_Nakamoto.png"},{"name":"internet hall of fame","handle":"InternetHOF","img":"Internet_Hall_Of_Fame.png"},{"name":"Dr. Parik Patel, BA, CFA, ACCA Esq.","handle":"ParikPatelCFA","img":"Dr._Parik_Patel.png"},{"name":"Ron DeSantis","handle":"GovRonDeSantis","img":"Ron_DeSantis.png"},{"name":"CNN Breaking News","handle":"cnnbrk","img":"CNN_Breaking_News.png"},{"name":"Kamala Harris","handle":"KamalaHarris","img":"Kamala_Harris.png"},{"name":"Scott Hanson","handle":"ScottHanson","img":"Scott_Hanson.png"},{"name":"Donald Trump Jr.","handle":"DonaldJTrumpJr","img":"Donald_Trump_Jr.png"},{"name":"Miley Cyrus","handle":"MileyCyrus","img":"Miley_Cyrus.png"},{"name":"LeBron James","handle":"KingJames","img":"LeBron_James.png"},{"name":"Joe Rogan","handle":"joerogan","img":"Joe_Rogan.png"},{"name":"Ben Shapiro","handle":"benshapiro","img":"Ben_Shapiro.png"},{"name":"YouTube","handle":"YouTube","img":"YouTube.png"},{"name":"ESPN","handle":"espn","img":"ESPN.png"},{"name":"NBA","handle":"NBA","img":"NBA.png"},{"name":"Google","handle":"Google","img":"Google.png"},{"name":"Taylor Swift","handle":"taylorswift13","img":"Taylor_Swift.png"},{"name":"Bill Gates","handle":"BillGates","img":"Bill_Gates.png"},{"name":"Neymar Jr","handle":"neymarjr","img":"Neymar.png"}]'
        );
      },
      9005: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '["Joe_Rogan.png","CNN.png","Ben_Shapiro.png","Lyrical_Lemonade.png","NBA.png","PewDiePie.png","NELK.png","Mr_Beast.png","Hot_Ones.png","CBS.png","MLB.png","MSNBC.png","NHL.png","NFL.png","NBC.png","FOX.png"]'
        );
      },
    },
    a = {};
  function o(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var r = (a[e] = { id: e, exports: {} });
    return n[e](r, r.exports, o), r.exports;
  }
  (o.m = n),
    (e = []),
    (o.O = function (t, r, n, a) {
      if (!r) {
        var i = 1 / 0;
        for (p = 0; p < e.length; p++) {
          (r = e[p][0]), (n = e[p][1]), (a = e[p][2]);
          for (var l = !0, c = 0; c < r.length; c++)
            (!1 & a || i >= a) &&
            Object.keys(o.O).every(function (e) {
              return o.O[e](r[c]);
            })
              ? r.splice(c--, 1)
              : ((l = !1), a < i && (i = a));
          if (l) {
            e.splice(p--, 1);
            var s = n();
            void 0 !== s && (t = s);
          }
        }
        return t;
      }
      a = a || 0;
      for (var p = e.length; p > 0 && e[p - 1][2] > a; p--) e[p] = e[p - 1];
      e[p] = [r, n, a];
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, { a: t }), t;
    }),
    (o.d = function (e, t) {
      for (var r in t)
        o.o(t, r) &&
          !o.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (o.f = {}),
    (o.e = function (e) {
      return Promise.all(
        Object.keys(o.f).reduce(function (t, r) {
          return o.f[r](e, t), t;
        }, [])
      );
    }),
    (o.u = function (e) {
      return e + ".js";
    }),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t = {}),
    (r = "dumbnails:"),
    (o.l = function (e, n, a, i) {
      if (t[e]) t[e].push(n);
      else {
        var l, c;
        if (void 0 !== a)
          for (
            var s = document.getElementsByTagName("script"), p = 0;
            p < s.length;
            p++
          ) {
            var d = s[p];
            if (
              d.getAttribute("src") == e ||
              d.getAttribute("data-webpack") == r + a
            ) {
              l = d;
              break;
            }
          }
        l ||
          ((c = !0),
          ((l = document.createElement("script")).charset = "utf-8"),
          (l.timeout = 120),
          o.nc && l.setAttribute("nonce", o.nc),
          l.setAttribute("data-webpack", r + a),
          (l.src = e)),
          (t[e] = [n]);
        var u = function (r, n) {
            (l.onerror = l.onload = null), clearTimeout(m);
            var a = t[e];
            if (
              (delete t[e],
              l.parentNode && l.parentNode.removeChild(l),
              a &&
                a.forEach(function (e) {
                  return e(n);
                }),
              r)
            )
              return r(n);
          },
          m = setTimeout(
            u.bind(null, void 0, { type: "timeout", target: l }),
            12e4
          );
        (l.onerror = u.bind(null, l.onerror)),
          (l.onload = u.bind(null, l.onload)),
          c && document.head.appendChild(l);
      }
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (function () {
      var e;
      o.g.importScripts && (e = o.g.location + "");
      var t = o.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (o.p = e);
    })(),
    (function () {
      o.b = document.baseURI || self.location.href;
      var e = { 179: 0 };
      (o.f.j = function (t, r) {
        var n = o.o(e, t) ? e[t] : void 0;
        if (0 !== n)
          if (n) r.push(n[2]);
          else {
            var a = new Promise(function (r, a) {
              n = e[t] = [r, a];
            });
            r.push((n[2] = a));
            var i = o.p + o.u(t),
              l = new Error();
            o.l(
              i,
              function (r) {
                if (o.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = a),
                    (l.request = i),
                    n[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          }
      }),
        (o.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, r) {
          var n,
            a,
            i = r[0],
            l = r[1],
            c = r[2],
            s = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (n in l) o.o(l, n) && (o.m[n] = l[n]);
            if (c) var p = c(o);
          }
          for (t && t(r); s < i.length; s++)
            (a = i[s]), o.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return o.O(p);
        },
        r = (self.webpackChunkdumbnails = self.webpackChunkdumbnails || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (o.nc = void 0);
  var i = o.O(void 0, [96], function () {
    return o(6753);
  });
  i = o.O(i);
})();
