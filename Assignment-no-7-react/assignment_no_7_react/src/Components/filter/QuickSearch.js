import Header from "./Header";
import FilterOption from "./FilterOption";
import RestaurantList from "./RestaurentList";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function QuickSearch() {
  let { meal_id } = useParams();
  let [locationList, setLocationList] = useState([]);
  let [restaurantList, setRestaurantList] = useState([]);

  let getLocationList = async () => {
    let url = "http://localhost:5008/api/get-location-list";
    let { data } = await axios.get(url);

    setLocationList(data.location);
  };

  let filter = async () => {
    let url = "http://localhost:5008/api/filter";
    let filterData = {
      mealtype: meal_id,
    };
    let { data } = await axios.post(url, filterData);
    setRestaurantList(data.restaurants);
  };

  useEffect(() => {
    getLocationList();
    filter();
  }, []);

  return (
    <>
      <Header />
      <div className="row">
        <div className="col-12 px-5 pt-4">
          <p className="h3">Breakfast Places In Mumbai</p>
        </div>

        <div className="col-12 d-flex flex-wrap px-lg-5 px-md-5 pt-4">
          <FilterOption locationList={locationList} />
          <RestaurantList restaurantList={restaurantList} />
        </div>
      </div>
    </>
  );
}

export default QuickSearch;
