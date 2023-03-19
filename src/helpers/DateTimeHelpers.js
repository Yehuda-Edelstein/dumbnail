/**
 * Returns the current date in the format of "MM/DD/YY".
 * @returns {string} The current date in the format of "MM/DD/YY".
 */
export function getDate() {
  const today = new Date();
  const year = today.getFullYear().toString().slice(-2);
  const date = `${today.getMonth() + 1}/${today.getDate()}/${year}`;
  return date;
}

/**
 * Returns the current date in HTML datepicker format (YYYY-MM-DD).
 * @returns {string} Current date in HTML datepicker format.
 */
export function getHtmlDate() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Returns the current time in 12-hour format (hh:mm AM/PM).
 * @returns {string} Current time in 12-hour format.
 */
export function get12HourTime() {
  const d = new Date();
  const hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const twelveHourFormat = hours % 12 || 12;
  return `${twelveHourFormat}:${minutes} ${ampm}`;
}

/**
 * Returns the current time in 24-hour format (hh:mm).
 * @returns {string} Current time in 24-hour format.
 */
export function get24HourTime() {
  const d = new Date();
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

/**
 * Converts time from 24-hour format to 12-hour format.
 * @param {string} time - Time in 24-hour format (hh:mm).
 * @returns {string} Time in 12-hour format (hh:mm AM/PM).
 */
export function convertTo12HourFormat(time) {
  const [hours, minutes] = time.split(":");
  const ampm = hours >= 12 ? "PM" : "AM";
  const twelveHourFormat = hours % 12 || 12;
  return `${twelveHourFormat}:${minutes} ${ampm}`;
}

/**
 * Formats the given date in the format MM/DD/YY and returns the formatted date as a string.
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date in the format MM/DD/YY.
 */
export function formatDateToMMDDYY(date) {
  let arr = date.toString().split("-");
  let month = arr[1].replace(/0/g, "");
  let day = arr[2].replace(/0/g, "");
  let year = arr[0].slice(2);
  return `${month}/${day}/${year}`;
}

/**
 * Converts a time string in "h:mm a" format to "HH:mm" format.
 * @param {string} time - The time string to convert.
 * @returns {string} The time string in "HH:mm" format.
 */
export function convertToHTMLTime(time) {
  const [hour, minute, ampm] = time.split(/[: ]/);
  let hour24 = parseInt(hour, 10);
  if (hour24 === 12) {
    hour24 = ampm === "AM" ? 0 : 12;
  } else {
    hour24 += ampm === "PM" ? 12 : 0;
  }
  return `${hour24.toString().padStart(2, "0")}:${minute}`;
}

/**
 * Formats the given date string in the format "MM/DD/YY" to "yyyy-MM-dd".
 * @param {string} dateStr - The date string to format.
 * @returns {string} - The formatted date string.
 */
export function convertToISODate(dateStr) {
  const [month, day, year] = dateStr.split("/");
  const yyyy = `20${year}`; // Assuming years between 00-99
  const MM = month.padStart(2, "0");
  const dd = day.padStart(2, "0");
  return `${yyyy}-${MM}-${dd}`;
}
