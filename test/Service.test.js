const { calculateAge } = require("../Service");

const { expect } = require("chai");

describe("UserService", function () {
  it("EDAD CORRECTA", function () {
    const birthYear = 1990;
    const currentYear = new Date().getFullYear();

    const age = calculateAge(birthYear, currentYear);

    // Verificar que la edad calculada sea correcta
    expect(age).to.equal(currentYear - birthYear);
  });
});
