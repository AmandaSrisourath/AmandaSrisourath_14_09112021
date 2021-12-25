const express = require("express");
var expressStaticGzip = require("express-static-gzip");
// const path = require("path");

const app = express(); // create express app

app.use("/", expressStaticGzip("../build", {
    enableBrotli: true,
}));

app.use("/EmployeeList", expressStaticGzip("../build", {
    enableBrotli: true,
}));

app.listen(8080, () => {
    console.log("server started on port 8080");
  });