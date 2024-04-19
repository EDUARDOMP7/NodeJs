const request = require("supertest");
const app = require("./IngresoU");

describe("Pruebas para la ruta /api/usuarios", () => {
  it("Debería agregar un nuevo usuario", async () => {
    const nuevoUsuario = { nombre: "Nuevo Usuario" };
    const response = await request(app)
      .post("/api/usuarios")
      .send(nuevoUsuario);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(nuevoUsuario);
  });
});
