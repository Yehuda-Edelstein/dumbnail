export function updateMessage(id, key, value, messages) {
  const arr = [...messages];
  const obj = messages.find((x) => x.id === id);
  obj[key] = value;
  return arr;
}

export function deleteMessage(id, messages) {
  const arr = [...messages];
  const index = messages.findIndex((x) => x.id === id);
  arr.splice(index, 1);
  const updated = arr.map((obj, i) => ({ ...obj, id: i }));
  return updated;
}

export function newTextMessage(messages) {
  const arr = [...messages];
  const n = { id: arr.length, from: "you", msg: "", type: "text" };
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
