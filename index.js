const express = require("express");
//import handlebar
const hbs = require("express-handlebars");
const restaurantsRouter = require("./routes/restaurants");
const app = express();
//Import middleware
const logger = require("./middleware/logger");
//Setup Template engines

app.set("view engine", "hbs");
app.engine("html", require("hbs").__express);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Custom middleware
app.use(logger);
// Routes
app.use("/apis/restaurants", restaurantsRouter);

// Render
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log(`Listening to port 3000`);
});
