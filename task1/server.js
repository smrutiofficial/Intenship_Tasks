const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.render("index");
});

app.post('/result', (req, res) => {
  const { name, email, gender, department } = req.body;
  res.render('result', { name, email, gender, department });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
