const express = require("express");
//imporort handlebar
const hbs = require("express-handlebars");
const restaurantsRouter = require("./routes/restaurants");
const app = express();
//Import middleware
const logger = require("./middleware/logger");
//Setup Template engines
app.engine();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Custom middleware
app.use(logger);
// Routes
app.use("/apis/restaurants", restaurantsRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello Express</h1>");
});

app.listen(3000, () => {
  console.log(`Listening to port 3000`);
});
