// test/usuarios.test.js
const request = require("supertest");
const app = require("./Usuarios"); // Importamos nuestro servidor Express

describe("Pruebas para la ruta /api/usuarios", () => {
  it("Debería obtener una lista de usuarios", async () => {
    const response = await request(app).get("/api/usuarios");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      { id: 1, nombre: "Usuario 1" },
      { id: 2, nombre: "Usuario 2" },
      { id: 3, nombre: "Usuario 3" },
    ]);
  });
});
