import * as htmlToImage from "html-to-image";

// download png image
export const download = async (ref, name) => {
  try {
    const dataUrl = await htmlToImage.toPng(ref.current, {
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

// upload image
export function upload(ev, setSelected) {
  if (!ev.target.files || ev.target.files.length === 0) {
    setSelected(undefined);
    return;
  }
  setSelected(ev.target.files[0]);
}

// create tooltip for popular accounts
export function createTooltip(str) {
  if (str.includes("_")) {
    return str.replace(/_/g, " ").split(".png");
  }
  return str.split(".png");
}
