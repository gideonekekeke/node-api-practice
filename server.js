require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const port = 8080;

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection
  .once("open", () => {
    console.log("connected successfully....");
  })
  .on("error", () => {
    console.log("there is a big fatal error here");
  });

app.listen(process.env.PORT, () => {
  console.log("listening");
});
