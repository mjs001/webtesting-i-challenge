const { repair, succeed, fail } = require("./enhancer.js");

let item = {
  name: "masterSword",
  durability: 85,
  enhancement: 10,
};

let maxItem = {
  name: "masterSword",
  durability: 100,
  enhancement: 25,
};

let item2 = {
  name: "masterSword",
  durability: 85,
  enhancement: 10,
};

describe("repair()", function () {
  it("should restore items durability to 100", function () {
    repair(item);
    expect(item.durability).toBe(100);
  });
});

describe("suceed()", function () {
  it("should take an item and increase items enhancement by 1 unless player is level 20", function () {
    succeed(item);
    expect(item.enhancement).toBe(11);
  });
});

describe("fail()", function () {
  it("should decrease durability by 5 if enchantment is less than 5 or if greater than or equal to 15 it will decrease by 10", function () {
    fail(maxItem);
    expect(maxItem.durability).toBe(90);
    expect(maxItem.enhancement).toBe(24);
    fail(item2);
    expect(item2.durability).toBe(80);
  });
});
