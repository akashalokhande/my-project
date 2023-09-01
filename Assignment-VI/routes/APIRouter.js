const express = require("express")
const router = express.Router()
const Filter = require("../Controller/RestaurentController")


router.post("/api/filter",Filter.filter)

module.exports = router