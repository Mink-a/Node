const express = require("express");
// const EventEmitter = require("events");
// const myEvent = new EventEmitter();
const app = express();
const PORT = 5000;

const routes = require("./routes/index");

// myEvent.on("test-event", (data) => {
//   console.log("test-event is listening");
//   console.log(data);
// });

app.use(routes);

app.listen(PORT, () => {
  console.log(`app is running at http://localhost:${PORT}`);
});
