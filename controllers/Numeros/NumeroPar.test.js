const esNumeroPar = require("./NumeroPar.j");

describe("Función esNumeroPar", () => {
  it("Debería devolver true si el número es par", () => {
    const numeroPar = 4;

    const resultado = esNumeroPar(numeroPar);

    expect(resultado).toBe(true);
  });

  it("Debería devolver false si el número es impar", () => {
    const numeroImpar = 7;

    const resultado = esNumeroPar(numeroImpar);

    expect(resultado).toBe(false);
  });
});
