const express = require("express");
const bookRouter = require("./book");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/../pages/index.html"));
});

router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/../pages/about.html"));
});

router.use("/book", bookRouter);

router.all("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../pages/404.html"));
});

module.exports = router;
