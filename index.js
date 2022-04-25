const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
//import handlebar
const restaurantsRouter = require("./routes/restaurants");

//import index.js in routes folder
const indexRouter = require("./routes/index");

const app = express();

//Import middleware
const logger = require("./middleware/logger");

//Setup Template engines
app.engine("hbs", engine({ extname: "hbs" }));
app.set("view engine", "hbs");

//Middleware
//help read req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
//Custom middleware
app.use(logger);

// Routes
app.use("/apis/restaurants", restaurantsRouter);
app.use("/", indexRouter);

// Render URL
app.get("/", (req, res) => {
  //index is index.hbs
  res.render("index", { restaurants });
});

app.listen(3000, () => {
  console.log(`Listening to port 3000`);
});

module.exports = app;
