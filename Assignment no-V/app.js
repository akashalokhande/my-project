const express = require("express");
const app = express();

PORT = 5004;
const APIRouter = require ('./Routes/APIRouter')
app.use("/",APIRouter)

app.listen(PORT, () => {
  console.log("server Port is created", PORT);
});
