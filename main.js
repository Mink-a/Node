const express = require("express");
const EventEmitter = require("events");
const myEvent = new EventEmitter();

const app = express();
const PORT = 5000;

myEvent.on("test-event", (data) => {
  console.log("test-event is listening");
  console.log(data);
});

app.get("/", (req, res) => {
  myEvent.emit("test-event", { name: "MInk" });
  res.send("helo");
});

app.post("/", (req, res) => {
  res.json({ greet: "helo" });
});

app.listen(PORT, () => {
  console.log(`app is running at http://localhost:${PORT}`);
});
