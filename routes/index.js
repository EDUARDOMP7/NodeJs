"use strict";
const api = require("express").Router();
module.exports = (() => {
  api.get("/", (req, res) =>
    res.send({
      message: "SERVICE REPORTS API",
      code: 200,
    })
  );

  return api;
})();

module.exports = api;
