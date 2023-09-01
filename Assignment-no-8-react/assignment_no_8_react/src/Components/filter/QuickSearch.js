import Header from "../common/Header";
import FilterOption from "./FilterOption";
import RestaurantList from "./RestaurentList";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function QuickSearch() {
  let { meal_id } = useParams();
  let [locationList, setLocationList] = useState([]);
  let [restaurantList, setRestaurantList] = useState([]);
  let [pagecount, setpagecount] = useState(0);
  let [filterData, setFilterData] = useState({
    mealtype: meal_id,
  });

  let getLocationList = async () => {
    let url = "http://localhost:5008/api/get-location-list";
    let { data } = await axios.get(url);
    console.log(data.location);
    setLocationList(data.location);
  };

  let filter = async () => {
    let url = "http://localhost:5008/api/filter";

    let { data } = await axios.post(url, filterData);
    setRestaurantList(data.result);
    setpagecount(data.pageCount);
   
  };
  let getFilterResult = (event, type) => {
    let value = event.target.value;
    let _filterData = { ...filterData };
    console.log(type, value);
    switch (type) {
      case "sort":
        _filterData["sort"] = value;
        break;
      case "costForTwo":
        value = value.split("-");
        _filterData["l_cost"] = value[0]
        _filterData["h_cost"] = value[1]
        break;
      case "cuisine":
        _filterData["cuisine"] = [parseInt(value)];
        break;
      case "page":
        _filterData["page"] = value;
        break;
      default:
        break;
    }
    setFilterData(_filterData);
  };

  useEffect(() => {
    getLocationList();
  }, []);

  useEffect(() => {
    filter();
  }, [filterData]);

  return (
    <>
      <Header bg="bg-danger"/>
      <div className="row">
        <div className="col-12 px-5 pt-4">
          <p className="h3">Breakfast Places In Mumbai</p>
        </div>

        <div className="col-12 d-flex flex-wrap px-lg-5 px-md-5 pt-4">
          <FilterOption
            locationList={locationList}
            getFilterResult={getFilterResult}
          />
          <RestaurantList
            restaurantList={restaurantList}
            getFilterResult={getFilterResult}
            pagecount={pagecount}
          />
        </div>
      </div>
    </>
  );
}

export default QuickSearch;
