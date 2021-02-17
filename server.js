// 'use strict'
require("./models/database/db");
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const blog_route = require('./routes/blog.route')

app.use(morgan("dev"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cors());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
app.get("/", function (req, res, next) {
  res.json({ message: "successful!" });
});

app.use("/blog",blog_route)

port = process.env.PORT || 4200;
app.set("port", port);

http.createServer(app).listen(port);
