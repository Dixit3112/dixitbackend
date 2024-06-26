require("dotenv").config();

const express = require("express"); // = import express from "express"
const app = express();

const port = 9030;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("dixit.com");
});

app.get("/login", (req, res) => {
  res.send("<h1> Please login at Dixit.com</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2> Please go on the Chai aur Code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
