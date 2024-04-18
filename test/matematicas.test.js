const { esPositivo } = require("../matematicas");

const { expect } = require("chai");

// Describir el conjunto de pruebas
describe("Matemáticas", function () {
  // Escribir la prueba
  it("debería verificar si un número es positivo correctamente", function () {
    const numeroPositivo = 10;
    const numeroNegativo = -7;

    const resultadoPositivo = esPositivo(numeroPositivo);
    const resultadoNegativo = esPositivo(numeroNegativo);

    expect(resultadoPositivo).to.be.true;
    expect(resultadoNegativo).to.be.false;
  });
});
