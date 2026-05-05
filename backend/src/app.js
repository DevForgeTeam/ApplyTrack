const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("ApplyTrack backend is running ");
});

app.listen(5001, () => {
  console.log("Server: http://localhost:5001");
});
