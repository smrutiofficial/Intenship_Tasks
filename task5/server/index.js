const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
require("dotenv").config();
app.use(cors());

const port = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;
const checkApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (apiKey === API_KEY) {
    next();
  } else {
    return res.status(403).json({ message: "Invalid user operation" });
  }
};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRoutes = require("./routers/user.routes.js");
app.get("/", (req, res) => {
  res.send("REST API Conneted Successfully ....");
});
app.use("/user", userRoutes);
// app.use("/user", checkApiKey, userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
