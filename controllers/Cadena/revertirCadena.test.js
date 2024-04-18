const revertirCadena = require("./revertirCadena.j");

describe("Función revertirCadena", () => {
  it("Debería revertir una cadena correctamente", () => {
    const cadena = "hola mundo";

    const resultado = revertirCadena(cadena);

    expect(resultado).toBe("odnum aloh");
  });
});
