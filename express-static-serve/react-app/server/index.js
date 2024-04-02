
const express = require("express");
const app = express(); // create express app
const path = require("path");

//This will inform Express.js to serve all the files from public folder
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});
