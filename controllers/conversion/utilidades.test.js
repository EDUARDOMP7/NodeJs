// utilidades.test.js

const convertirAMinusculas = require("./utilidades.jC");

test("Convierte una cadena a minúsculas correctamente", () => {
  expect(convertirAMinusculas("HOLA")).toBe("hola");
});

test("Convierte una cadena vacía a minúsculas correctamente", () => {
  expect(convertirAMinusculas("")).toBe("");
});

test("Convierte una cadena mixta a minúsculas correctamente", () => {
  expect(convertirAMinusculas("HeLLo WoRLd")).toBe("hello world");
});
