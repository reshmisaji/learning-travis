const assert = require("assert");
const { add } = require("../main.js");

describe("add", function() {
  it("should return 3 when given 1 and 2", function() {
    assert.deepEqual(add(1, 2), 3);
  });
});
