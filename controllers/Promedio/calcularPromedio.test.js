const calcularPromedio = require("./calcularPromedio");

describe("Función calcularPromedio", () => {
  it("Debería calcular el promedio de un array de números correctamente", () => {
    const numeros = [2, 4, 6, 8, 10];

    const resultado = calcularPromedio(numeros);

    expect(resultado).toBe(6); // El promedio de estos números es 6
  });
});
