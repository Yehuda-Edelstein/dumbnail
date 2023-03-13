export function updateFrom(id, from, messages) {
  const arr = [...messages];
  const index = messages.findIndex((x) => x.id === id);
  arr[index].from = from;
  return arr;
}

export function updateMessage(id, message, messages) {
  const arr = [...messages];
  const index = messages.findIndex((x) => x.id === id);
  arr[index].msg = message;
  return arr;
}

export function deleteMessage(id, messages) {
  const arr = [...messages];
  const index = messages.findIndex((x) => x.id === id);
  arr.splice(index, 1);
  const updated = arr.map((obj, i) => ({ ...obj, id: i }));
  return updated;
}

export function newMessage(messages) {
  const arr = [...messages];
  const n = { id: arr.length, from: "you", msg: "" };
  arr.push(n);
  return arr;
}

export function lastMessage(id, messages) {
  const from = messages[id].from;
  return (
    // figure this logic out
    (messages[id + 1]?.from === from || messages[id - 1]?.from === from) &&
    messages[id] === messages[messages.length - 1] &&
    "last"
  );
}

// convert any date correctly for html inputs
export function inputDate(d) {}

// convert html date to standard mm/dd/yy
export function date(d) {
  let arr = d.toString().split("-");
  let month = arr[1].replace(/0/g, "");
  let day = arr[2].replace(/0/g, "");
  let year = arr[0].slice(2);
  return `${month}/${day}/${year}`;
}

// convert any time correctly for html inputs
export function army(time) {
  let split = time.toString().split(":");
  let hour = split[0].replace(/^0/, "");
  let minute = split[1].split(" ");
  let m = minute[0];
  return hour < 10 ? `0${hour}:${m}` : `${hour}:${m}`;
}
