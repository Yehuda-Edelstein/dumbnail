import { toPng } from "html-to-image";

// download png image
export const download = async (ref, name) => {
  try {
    const dataUrl = await toPng(ref.current, {
      // backgroundColor: "white",
    });
    const link = document.createElement("a");
    link.download = `${name}.png`;
    link.href = dataUrl;
    link.click();
  } catch (err) {
    console.log("Ohhhh nooo!");
    console.log(err);
  }
};

// regex function to convert int to string with commas
export function addCommas(int) {
  const str = int.toString();
  return str.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

export function upload(ev) {
  if (!ev.target.files || ev.target.files.length === 0) {
    return undefined;
  } else {
    return ev.target.files[0];
  }
}

// create tooltip for popular accounts
export function createTooltip(str) {
  if (str.includes("_")) {
    return str.replace(/_/g, " ").split(".png");
  }
  return str.split(".png");
}

export function getDate() {
  const today = new Date();
  const year = today.getFullYear().toString().slice(-2);
  const date = `${today.getMonth() + 1}/${today.getDate()}/${year}`;
  return date;
}

// convert views to youtube style
export function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}
