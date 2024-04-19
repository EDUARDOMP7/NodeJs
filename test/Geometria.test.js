const { calcularAreaRectangulo } = require("./geometria");

const { expect } = require("chai");

describe("Geometría", function () {
  it("debería calcular correctamente el área de un rectángulo", function () {
    const base = 5;
    const altura = 3;

    const area = calcularAreaRectangulo(base, altura);

    // Verificar que el área calculada sea correcta
    expect(area).to.equal(15);
  });
});
