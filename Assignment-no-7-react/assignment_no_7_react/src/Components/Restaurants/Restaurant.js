import { useState } from "react";
import Header from "../filter/Header";

function Restaurant() {
  let [restDetailsToggle, setRestDetailsToggle] = useState(true);
  return (
    <>
      <div className="row justify-content-center">
        <Header bg="bg-danger" />
      </div>

      <div className="row justify-content-center">
        <div className="col-10">
          <div className="row">
            <div className="col-12 mt-5">
              <div className="restaurant-main-image position-relative">
                <img src="/images/search-item.png" alt="" className="" />
                <button
                  className="btn btn-outline-light position-absolute btn-gallery"
                  data-bs-toggle="modal"
                  data-bs-target="#modalGallery"
                >
                  Click To Get Image Gallery
                </button>
              </div>
            </div>
            <div className="col-12">
              <h3 className="mt-4">The Big Chill Cakery</h3>
              <div className="d-flex justify-content-between">
                <ul className="list-unstyled d-flex gap-3">
                  <li
                    className="fw-bold btn"
                    onClick={() => setRestDetailsToggle(true)}
                    
                  >
                    Overview
                  </li>
                  <li
                    className="fw-bold btn"
                    onClick={() => setRestDetailsToggle(false)}
                  >
                    Contact
                  </li>
                </ul>

                <a
                  className="btn btn-danger align-self-start"
                  data-bs-toggle="modal"
                  href="#modalMenuList"
                  role="button"
                >
                  Place Online Order
                </a>
              </div>
              <hr className="mt-0" />
              {restDetailsToggle === true ? (
                <div className="over-view">
                  <p className="h5 mb-4">About this place</p>

                  <p className="mb-0 fw-bold">Cuisine</p>
                  <p>Bakery, Fast-food</p>

                  <p className="mb-0 fw-bold">Average Cost</p>
                  <p>₹700 for two people (approx.)</p>
                </div>
              ) : (
                <div className="over-view">
                  <p className="mb-0 fw-bold">Phone Number</p>
                  <p>912756554520</p>

                  <p className="mb-0 fw-bold">Address</p>
                  <p>Shop 1, Plot D, Samruddhi Complex, Chincholi …</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Restaurant;
