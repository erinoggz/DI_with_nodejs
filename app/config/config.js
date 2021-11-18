"use strict";

require("dotenv").config();
const PORT = process.env.PORT || 3005;
const ENV = process.env.ENV;
const JWT_SECRET = process.env.JWT_SECRET;
let MONGODB_URI = process.env.DATABASE;

if (ENV === "development") {
  MONGODB_URI = "mongodb://database";
}

module.exports = {
  ENV,
  PORT,
  MONGODB_URI,
  JWT_SECRET,
};
