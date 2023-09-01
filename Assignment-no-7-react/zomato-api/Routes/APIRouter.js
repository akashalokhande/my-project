const express = require("express");
const router = express.Router();
const location = require("../Controller/LocationController");
const restaurant = require("../Controller/RestaurantController");
const mealtype = require("../Controller/MealTypeController");

router.get("/api/get-location-list", location.getLocationList);

router.get("/api/get-meal-types-list", mealtype.getMealTypeList);

router.post("/api/filter", restaurant.filter);

module.exports = router;
