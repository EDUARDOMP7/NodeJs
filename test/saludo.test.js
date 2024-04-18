const request = require("supertest");

const app = require("../app");

describe("Prueba de integración para /saludo endpoint", function () {
  it("Debería devolver un saludo", function (done) {
    request(app)
      .get("/saludo")
      .expect(200)
      .expect("Content-Type", /json/)
      .end(function (err, res) {
        if (err) return done(err);
        if (res.body.message === "¡Hola, mundo!") {
          done(); // Si la respuesta es correcta, la prueba pasa
        } else {
          done(new Error("El saludo recibido no coincide con el esperado"));
        }
      });
  });
});
