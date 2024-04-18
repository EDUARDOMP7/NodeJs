const request = require("supertest");
const app = require("../app");
const chai = require("chai");

// Configura Chai para que funcione con Node.js
const { expect } = chai;

describe("Prueba básica del endpoint /status", () => {
  it("Debería devolver un código de estado 200", async () => {
    const response = await request(app).get("/status");
    expect(response.status).to.equal(200); // Aquí utilizamos 'to' en lugar de 'toBe'
  });
});
