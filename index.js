const express = require("express");
const path = require("path");
const enforce = require("express-sslify");
require("dotenv").config();

const app = express();

// always force https in production
if (process.env.NODE_ENV === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

// static assets
app.use(express.static(path.join(__dirname, "client/build")));

// Always serve React's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

// error handling
app.use((err, req, res, next) => {
  if (err) {
    res.sendStatus(400);
  } else {
    next();
  }
});

// start
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`${process.env.NODE_ENV} || ${PORT}`);
});
