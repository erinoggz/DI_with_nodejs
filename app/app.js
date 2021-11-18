"use strict";

const routes = require("./route/user");
const morgan = require("morgan");

const express = require("express");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api", routes)

module.exports = app;
