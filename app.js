"use strict";
const express = require("express");
const cors = require('cors');
const app = express().use('*', cors());
const indexRoutes = require("./routes");
const calculadoraView = require("./routes/calculadora");
const login = require("./routes/login");

app.use(express.json({limit: '1024mb'}));
app.use(express.urlencoded({limit: '1024mb', extended: false }));
app.use("/", indexRoutes);
app.use("/calculadora", calculadoraView);
app.use("/login", login);

module.exports = app;
