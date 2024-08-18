const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require('cors');
 
app.use(cors())
const port = 3000;

const API_KEY = "knckhs9oufwo7usd7rf34n";

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

const userRoutes = require("./routes/user.router");
app.get("/",checkApiKey, (req, res) => {
  res.send("REST API Conneted Successfully ....");
});
app.use("/user", checkApiKey, userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
