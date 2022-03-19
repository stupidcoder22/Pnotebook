const mongoose = require("mongoose");
const mongouri =
  "mongodb://localhost:27017/pnotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const connectomongo = () => {
  mongoose.connect(mongouri, () => {
    console.log("Connected to database");
  });
};

module.exports = connectomongo;
