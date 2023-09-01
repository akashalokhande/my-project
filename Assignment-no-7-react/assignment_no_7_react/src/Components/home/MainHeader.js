import axios from "axios";
import { useEffect, useState } from "react";

function MainHeader() {
  let [locationList, setLocationList] = useState([]);

  let getLocationList = async () => {
    let url = "http://localhost:5008/api/get-location-list";
    let { data } = await axios.get(url);
    console.log(data.location);
    setLocationList(data.location);
  };

  useEffect(() => {
    getLocationList();
  }, []);

  return (
    <>
      <section className="row main-section align-content-start">
        <header className="col-12 py-3">
          <div className="container d-lg-flex justify-content-end d-none">
            <button className="btn text-white me-3">Login</button>
            <button className="btn text-white border border-white">
              Create an account
            </button>
          </div>
        </header>
        <section className="col-12 d-flex flex-column align-items-center justify-content-center">
          <p className="brand-name fw-bold my-lg-2 mb-0">e!</p>
          <p className="h1 text-white my-3 text-center">
            Find the best restaurants, cafés, and bars
          </p>
          <div className="search w-50 d-flex mt-3">
            <select
              type="text"
              className="form-control mb-3 mb-lg-0 w-50 me-lg-3 py-2 px-3"
              placeholder="Please type a Location"
            >
              <option>--- Select Location ---</option>
              {locationList.map((location, index) => {
                return (
                  <option key={index}>
                    {location.name},{location.city}
                  </option>
                );
              })}
            </select>
            <div className="w-75 input-group">
              <span className="input-group-text bg-white">
                <i className="fa fa-search text-primary"></i>
              </span>
              <input
                type="text"
                className="form-control py-2 px-3"
                placeholder="Search for restaurants"
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default MainHeader;
