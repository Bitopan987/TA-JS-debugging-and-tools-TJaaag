function add(numA, numB) {
  return numA + numB;
}

function multiply(numA, numB) {
  return numA * numB;
}

function test(message, callback) {
  try {
    callback();
    console.log("✅", message);
  } catch (error) {
    console.error(error);
    console.log("❌", message);
  }
}

function expect(actual) {
  return {
    isEqual: function (expected) {
      if (typeof actual !== expected) {
        throw new Error(`${typeof actual} is not equal to ${expected}`);
      }
    },
  };
}

function testAdd() {
  result = add(2, 4);
  expected = "number";
  expect(result).isEqual(expected);
}

function testMultiply() {
  result = multiply(10, 4);
  expected = "number";
  expect(result).isEqual(expected);
}

// testAdd

test("adding 2 and 4", testAdd);
test("adding 100 and 4", () => {
  expect(add(100, 4)).isEqual("string");
});
test("adding 68 and 23", () => {
  expect(add(68, 23)).isEqual("number");
});
test("adding 57 and 5", () => {
  expect(add(57, 5)).isEqual("number");
});
test("adding 80 and 8", () => {
  expect(add(80, 8)).isEqual(true);
});

// testMultiply

test("multiply 4 and 10", testMultiply);
test("multiplying 100 and 4", () => {
  expect(multiply(100, 4)).isEqual("string");
});
test("multiplying 68 and 23", () => {
  expect(multiply(68, 23)).isEqual("number");
});
test("multiplying 57 and 5", () => {
  expect(multiply(57, 5)).isEqual("number");
});
test("multiplying 80 and 8", () => {
  expect(multiply(80, 8)).isEqual(true);
});
