// Exercise 1
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Harbey"));

// Exercise 2
function add(a, b) {
  return a + b;
}
console.log(add(5, 4));

// Exercise 3
function calculateAge(year) {
  let currentYear = new Date().getFullYear();
  return currentYear - year;
}
console.log(calculateAge(2004));

// Exercise 4
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(100));
console.log(checkEvenOdd(53));

// Exercise 5
function calculateDiscount(price, discount) {
  let percentageDiscount = (price * discount) / 100;
  return price - percentageDiscount;
}
console.log(calculateDiscount(10000, 20));

// Mini Project - Build a simple receipt calculator

function receiptCalculator(productPrice1, productPrice2, productPrice3) {
  let subTotal = productPrice1 + productPrice2 + productPrice3;
  let discount = (subTotal * 10) / 100;
  let finalPayment = subTotal - discount;
  return `Subtotal = ${subTotal}
Discount = ${discount}
Final Payment = ${finalPayment}`;
}
console.log(receiptCalculator(5000, 3500, 2000));
