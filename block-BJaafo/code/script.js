function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

let result = getFullName("Bitopan", "Deka");
let expected = "BitopanDeka";

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

function getTotalAmount(amount, taxRate) {
  return amount + (amount * taxRate) ;
}

let result = getTotalAmount(100, 5/100);
let expected = 102;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
