// 'use strict'
require('dotenv').config()
require("./models/database/db");
const express = require("express");
var session = require("express-session");
const morgan = require("morgan");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const passport = require("passport")

// console.log(process.env.EMAIL_HOST)
app.use(morgan("common"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);
whitelist = ["http://192.168.2.170:3000", "http://192.168.2.170:4200"];
var corsOptions = {
  origin: function (origin, callback) {
    console.log(origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  // origin: "http://192.168.2.170:3000",
  methods: ["GET", "PUT", "POST", "DELETE"],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
  // "exposedHeaders":[]
};
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "dist")));
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use("/api", require("./routes/routes"));

// app.get("/*", function (req, res, next) {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

port = process.env.PORT || 4200;
app.set("port", port);

http.createServer(app).listen(port);
console.log("Server listen on 192.168.2.170:4200 or localhost:4200");
