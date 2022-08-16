const express = require("express");
const bookRouter = express.Router();

bookRouter
  .route("/")
  .get((req, res) => {
    res.send("All books");
  })
  .post((req, res) => {
    res.json({ title: "Sherlock Holmes" });
  });

bookRouter.get("/:id", (req, res) => {
  res.send(`single book id:${req.params.id}`);
});

module.exports = bookRouter;
