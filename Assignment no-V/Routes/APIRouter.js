const express = require("express");
const router  = express.Router()
const location = require('../Controller/LocationController')
const Restaurent = require('../Controller/RestaurentController')
const Mealtype = require("../Controller/MealtypeController")

router.get("/get-location-list",location.getlocationlist)

router.get("/get-restaurent-list/:cityname",Restaurent.getrestaurentlist)

router.get("/widget",Mealtype.getMealtypeController)

module.exports = router