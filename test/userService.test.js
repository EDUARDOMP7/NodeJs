
const { getUser } = require("../userService");

const { expect } = require("chai");

describe("UserService", function () {
  it("debe devolver información del usuario cuando se proporciona una identificación de usuario válida", async function () {
    const user = await getUser("123456");

    expect(user).to.not.be.null;

    expect(user.id).to.equal("123456");
    expect(user.name).to.equal("John Doe");
    expect(user.email).to.equal("john@example.com");
  });
});
