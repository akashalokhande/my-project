//1.Please find customer's rating data for multiple restaurants as : 

ratingData = [
  { restaurant: "KFC", rating: 5 },
  { restaurant: "Burger King", rating: 4 },
  { restaurant: "KFC", rating: 3 },
  { restaurant: "Domino", rating: 2 },
  { restaurant: "Subway", rating: 3 },
  { restaurant: "Domino", rating: 1 },
  { restaurant: "Subway", rating: 4 },
  { restaurant: "Pizza Hut", rating: 5 },
];

//a.Calculate the Average rating for all the restaurants. 

let sortrestaurant = ratingData.sort(function (a, b) {
  if (a.restaurant > b.restaurant) return 1;
  if (a.restaurant < b.restaurant) return -1;
});

let arr2 = [];
let restaurentname = "";
sortrestaurant.forEach((value, index) => {
  if (restaurentname === value.restaurant) {
    let Index = arr2.length - 1;
    arr2[Index].rating += value.rating
    arr2[Index].count += 1;
  } else {
    arr2.push({ restaurant: value.restaurant, rating: value.rating, count: 1 });
    restaurentname = value.restaurant;
  }
});

let avg = arr2.map((value)=>{
  
  return  {
      restaurant:value.restaurant,
      rating:(value.rating/value.count)
    }    
  })
   console.log(avg);
  
 //b.List of all restaurants with average rating greater than or equal to 4.
   
 let ratingabovefour = avg.filter(value=>value.rating >= 4)
 console.log(ratingabovefour);


 