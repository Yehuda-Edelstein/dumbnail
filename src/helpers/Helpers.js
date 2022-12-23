import * as htmlToImage from "html-to-image";

export const download = async (ref, name) => {
  try {
    const dataUrl = await htmlToImage.toPng(ref.current, {
      // backgroundColor: "white",
    });
    // download image
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
