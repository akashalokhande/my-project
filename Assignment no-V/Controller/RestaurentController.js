RestaurentData = require("../model/restaurantdata.json");

module.exports.getrestaurentlist = (request, response) => {
  let { cityname } = request.params;
  let result = RestaurentData.filter((restaurent) => {
    return restaurent.city_name.toLowerCase() === cityname.toLowerCase();
  });

  if (result.length === 0) {
    response.send({
      status: true,
      message: "Restaurent not found",
    });
  } else {
    response.send({
      status: true,
      restaurentlist: result
    });
  }
};
