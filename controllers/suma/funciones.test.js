const sumar = require("./funciones.j");

describe("Función sumar", () => {
  it("Debería sumar dos números correctamente", () => {
    const a = 5;
    const b = 3;

    const resultado = sumar(a, b);

    expect(resultado).toBe(8);
  });

  it("Debería sumar números negativos correctamente", () => {
    const a = -5;
    const b = -3;

    const resultado = sumar(a, b);

    expect(resultado).toBe(-8);
  });
});
