const RestaurantModel = require("../model/RestaurentModel");

module.exports.filter = async (request, response) => {
  let { location, mealtype, l_cost, h_cost, sort, cuisine, page,itemsPerPage } =
    request.body;
  page = page ? page : 1;
  sort = sort ? sort : 1;
  itemsPerPage = itemsPerPage ? itemsPerPage : 2;

  let staringIndex = page * itemsPerPage - itemsPerPage;
  let lastIndex = page * itemsPerPage;

  const filterData = {};
 

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
    }).sort({ min_price: sort });

    if (result.length === 0) {
      response.send({
        status: false,
        message: "restaurant is not available",
      });
    } else {
      const filterResult = result.slice(staringIndex, lastIndex);
      response.status(200).send({
        status: true,
        result: filterResult,
        pageCount: Math.ceil(result.length / 2),
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
