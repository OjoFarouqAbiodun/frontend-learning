// Exerrcise 1
const names = ["harbey", "john", "sarah"];

const upperNames = names.map((name) => {
  return name.toUpperCase();
});

console.log(upperNames);

// Exercise 2
const ourPrices = [1000, 2000, 3000, 4000];

const discountedPrices = ourPrices.map((price) => {
  return price - 200;
});

console.log(discountedPrices);

// Exercise 3
const prices = [1500, 2500, 3500];

const updatedPrices = prices.map((price) => {
  return price + 500;
});

console.log(updatedPrices);

// Exercise 4
const numbers = [5, 10, 15, 20];
const newNumbers = numbers.map((number) => number * 3);
console.log(newNumbers);

// Exercise 5
const newNames = ["Harbey", "John", "Sarah"];

const messages = newNames.map((name) => {
  return `Hello ${name}, welcome!`;
});

console.log(messages);