const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/Tazweed",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("Successfully Established Connection with MongoDB");
    } else {
      console.log(
        "Failed to Establish Connection with MongoDB with Error: " + err
      );
    }
  }
);

//Connecting Node and MongoDB
require("./user.model");
