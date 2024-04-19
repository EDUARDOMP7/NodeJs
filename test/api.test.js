// test/api.test.js
const axios = require("axios");
const sinon = require("sinon");
const assert = require("assert");
const { consultarApi } = require("../api");

describe("Pruebas de la función consultarApi", () => {
  it("Debería retornar los datos de la API correctamente", async () => {
    // Creamos un stub para axios.get y lo configuramos para que devuelva datos simulados
    const stubAxiosGet = sinon.stub(axios, "get");
    stubAxiosGet.resolves({ data: { message: "Datos de prueba" } });

    // Llamamos a la función consultarApi
    const result = await consultarApi();

    // Verificamos si la función axios.get fue llamada con la URL correcta
    sinon.assert.calledOnceWith(stubAxiosGet, "https://api.example.com/data");

    // Verificamos si la función consultarApi retornó los datos esperados
    assert.deepStrictEqual(result, { message: "Datos de prueba" });

    // Restauramos el stub de axios.get
    stubAxiosGet.restore();
  });

  it("Debería manejar correctamente los errores al consultar la API", async () => {
    // Creamos un stub para axios.get y lo configuramos para que arroje un error simulado
    const stubAxiosGet = sinon.stub(axios, "get");
    const error = new Error("Error simulado al consultar la API");
    stubAxiosGet.rejects(error);

    // Llamamos a la función consultarApi y verificamos si arroja el error esperado
    await assert.rejects(consultarApi(), error);

    // Restauramos el stub de axios.get
    stubAxiosGet.restore();
  });
});
