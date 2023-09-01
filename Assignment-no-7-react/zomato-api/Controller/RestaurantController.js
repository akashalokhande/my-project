const RestaurantModel = require("../Model/RestaurantModel");
module.exports.getRestaurantListByLocID = async (request, response) => {
  let { loc_id } = request.params;
  try {
    let result = await RestaurantModel.find(
      { location_id: loc_id },
      { locality: 1, name: 1, city: 1, image: 1 }
    );
    if (result.length === 0) {
      response.send({
        status: false,
        message: "restaurant is not available for given location",
      });
    } else {
      response.send({
        status: true,
        restaurants: result,
      });
    }
  } catch (error) {
    response.status(500).send({
      status: false,
      message: "Invalid id is passed",
      error: error.message,
    });
  }
};

module.exports.getRestaurantDetailsByID = async (request, response) => {
  let { id } = request.params;
  try {
    let result = await RestaurantModel.findById(id);
    response.send({
      status: true,
      restaurants: result,
    });
  } catch (error) {
    response.status(500).send({
      status: false,
      message: "Invalid id is passed",
      error: error.message,
    });
  }
};

module.exports.filter = async (request, response) => {
  let { location, mealtype, l_cost, h_cost, sort, cuisine, page } =
    request.body;
  page = page ? page : 0;
  sort = sort ? sort : 1;
  const filterData = {};
  const restaurantperpage = 2;

  if (location !== undefined) filterData["location_id"] = location;
  if (mealtype !== undefined) filterData["mealtype_id"] = mealtype;
  if (l_cost !== undefined && l_cost !== undefined)
    filterData["min_price"] = { $gt: l_cost, $lt: h_cost };
  if (cuisine !== undefined) filterData["cuisine_id"] = { $in: cuisine };

  console.log(filterData);
  try {
    let result = await RestaurantModel.find(filterData, {
      name: 1,
      city: 1,
      locality: 1,
      location_id: 1,
      min_price: 1,
      image: 1,
      cuisine_id: 1,
      cuisine:1
    })
      .sort({ min_price: sort })
      
    if (result.length === 0) {
      response.send({
        status: false,
        message: "restaurant is not available",
      });
    } else {
      response.send({
        status: true,
        restaurants: result,
      });
    }
  } catch (error) {
    mongoDbError(error.message);
    response.status(500).send({
      status: false,
      message: "Invalid id is passed",
    });
  }
};