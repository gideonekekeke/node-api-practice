require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const { Upload } = require("./controller/controller");
const port = 8080;
const callRoute = require("./router/router");

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

app.use(express.json());
app.use(express.static("public"));
app.use("/api/users", Upload);

app.get("index.html");
app.use("/api", callRoute);

app.listen(process.env.PORT, () => {
  console.log("listening");
});
