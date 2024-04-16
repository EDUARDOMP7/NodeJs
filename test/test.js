"use strict";
var test = require("unit.js");
var index = require("../controllers/login/index");

describe("Tests index", function () {
  it("verifies successful response", function (done) {
    index.get(
      {
        /* event */
      },
      {
        /* context */
      },
      (err, result) => {
        if (err) {
          done(err); // Proporciona un mensaje de error más informativo si hay un error
          return;
        }
        try {
          test.number(result.statusCode).is(200);
          test.string(result.body).contains("Credenciales incorrectas");
          test.value(result).hasHeader("content-type", "text/html");
          done();
        } catch (error) {
          done(error);
        }
      }
    );
  });
});
