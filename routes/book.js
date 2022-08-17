const express = require("express");
const bookRouter = express.Router();
const connect = require('./../database/db')

bookRouter
  .route("/")
  .get(async (req, res) => {
    // const db = await connect()
    res.send("All books");
  })
  .post(async (req, res) => {
    const db = await connect()
    const  data = {
      title: "harry potter",
      author: 'JK'
    }
    await db.collection('book').insertOne(data)
    res.json({ data: "Book Stored" });
  });

bookRouter
  .route("./:id")
  .get((req, res) => {
    res.send(`single book id:${req.params.id} to get Details`);
  })
  .patch((req, res) => {
    res.send(`single book id:${req.params.id} to update`);
  })
  .delete((req, res) => {
    res.send(`single book id:${req.params.id} to delete`);
  });

module.exports = bookRouter;
