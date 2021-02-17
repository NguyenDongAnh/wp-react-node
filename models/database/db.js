const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/BlogProject",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  function (err) {
    if (err) {
      console.log("Fail!");
      console.log(err);
    } else {
      console.log("Success!");
    }
  }
);
require('../blog.model')
