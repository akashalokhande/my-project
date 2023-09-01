const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5006;
const MONGODB_URI = "mongodb://127.0.0.1:27017/RestaurantData";
const APIRouter = require("./routes/APIRouter");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", APIRouter);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, function () {
      console.log("db connectd successfully");
      console.log("server port is running", PORT);
    });
  })
  .catch((error) => {
    console.log("unable to connect db");
    console.log(error);
  });
