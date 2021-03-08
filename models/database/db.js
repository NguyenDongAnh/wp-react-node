const mongoose = require("mongoose");
const dbURL = process.env.DB_URL || process.env.mLab_URL
mongoose.connect(
  dbURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
  },
  function (err) {
    if (err) {
      console.log("Fail!");
      console.log(err);
    } else {
      console.log("Success!");
    }
  }
);
require("../blog.model");
require("../token.model");
require("../user.model");
