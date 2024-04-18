const sum = require("../math");

const assert = require("chai").assert;

describe("Math", function () {
  it("should return 4 when adding 2 and 2", function () {
    const result = sum(2, 2);

    assert.equal(result, 4);
  });
});
