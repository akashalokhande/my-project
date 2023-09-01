//1.Create a JavaScript restaurantManager Class with the Following properties

class RestaurantManager {
  constructor(_list) {
    this.list = _list;
  }

  printresturentname() {
    this.list.map(function (value) {
      console.log(value.Name);
    });
  }

  filterRestaurantByCity(hotel) {
    var hotel = this.list.filter(function (value) {
      return value.city === hotel;
    });
    console.log(hotel);
  }
}

restaurentlist = [
  {
    Name: "hotel taj",
    Address: "marina beach",
    city: "mumbai",
  },
  {
    Name: "hotel green",
    Address: "cvil lines",
    city: "nagpur",
  },
  {
    Name: "anand vihar",
    Address: "wakad",
    city: "pune",
  },
  {
    Name: "kfc",
    Address: "cannot place",
    city: "nashik",
  },
];

var rest = new RestaurantManager(restaurentlist);

rest.printresturentname();

rest.filterRestaurantByCity(cityname = "mumbai");

//2. Please find order details for Punjabi Tadka restaurant in Delhi as:

orderData = {
  "Below 500": 20,
  "500-1000": 29,
  "1000-1500": 30,
  "1500-2000": 44,
  "Above 2000": 76,
};

//a
var value = Object.values(orderData);
var total = value.reduce(function (pvalue, cvalue) {
  return pvalue + cvalue;
});

console.log("Total number of orders placed =", total);

//b
var proportion = value.length;
console.log("Total number of order proportions =", proportion);

//c
var portion = Object.keys(orderData);
var arr = [];
var response = portion.map((item, index) => {
  var obj = {
    id: index + 1,
    order: item,
    orderpercentage: ((orderData[item] / total) * 100).toFixed(2),
    resturent: "punjabi tadaka ",
  };
  arr.push(obj);
});
console.log(arr);