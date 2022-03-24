const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();

const restaurants = require("../data");

//Declare currentRestaurantId
let currentRestaurantId = 9;

router.get("/", (req, res) => {
  res.json(restaurants);
});

router.get("/:id", (req, res) => {
  const restaurantId = Number.parseInt(req.params.id, 10);
  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === restaurantId
  );
  res.json(restaurant);
});

router.post("/", (req, res) => {
  currentRestaurantId += 1;
  const newRestaurant = {
    //add currentRestaurantId
    id: currentRestaurantId,
    //pass object is a new restaurant from user
    ...req.body,
  };
  //pass newRestaurant to array
  restaurants.push(newRestaurant);
  //convert array to json
  res.json(newRestaurant);
});

router.put("/:id", (req, res) => {
  const restaurantId = Number.parseInt(req.params.id, 10);
  const restaurantIndex = restaurants.findIndex(
    (restaurant) => restaurant.id === restaurantId
  );

  const updatedRestaurant = {
    id: restaurantId,
    ...req.body,
  };
  restaurants[restaurantIndex] = updatedRestaurant;
  res.json(updatedRestaurant);
});

router.delete("/:id", (req, res) => {
  const restaurantId = Number.parseInt(req.params.id, 10);
  const restaurantIndex = restaurants.findIndex(
    (restaurant) => restaurant.id === restaurantId
  );
  restaurants.splice(restaurantIndex, 1);
  res.sendStatus(204);
});

module.exports = router;
