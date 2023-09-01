const MealtypeController = require("../Model/mealtype.json");

module.exports.getMealtypeController = (request, response) => {
  response.send({
    meltypes: MealtypeController
  });
};
