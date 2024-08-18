const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/test",(req,res)=>{
  res.send("hello world")
})

const nameRegex = /^[a-zA-Z\s]{3,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

app.post("/result", (req, res) => {
  const { name, email, password } = req.body;
  const requestBody = req.body;
  const errors = {
    name: null,
    email: null,
    password: null,
  };

  if (!name || !email || !password) {
    if (!name) errors.name = "Name is required.";
    if (!email) errors.email = "Email is required.";
    if (!password) errors.password = "Password is required.";
  } else {
    if (!nameRegex.test(name)) {
      errors.name =
        "Name must be at least 3 characters long and contain only letters and spaces.";
    }
    if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!passwordRegex.test(password)) {
      errors.password =
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.";
    }
  }

 
  const temporaryStorage = {
    name: name,
    email: email,
    password: password,
  };

  console.log(temporaryStorage);

  res.render("error", { name, email, password, errors, requestBody });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
