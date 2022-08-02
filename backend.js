const express = require("express");
const ejs = require("ejs");

const app = express();
let port = 3000;
let host = "localhost";
NAME = "Sheharyar";
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let name = res.render("index", { name: "Hello " + NAME });
});

app.listen(port, host, () => {
  console.log("Hello " + NAME);
  console.log("The server is running at port", port);
});
