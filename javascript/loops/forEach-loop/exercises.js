// Exercise 1
const colors = ["Blue", "Orange", "White", "Black"];
colors.forEach(function(color){
  console.log(color);
});

// Exercise 2
const numbas = [10, 20, 30, 40];
numbers.forEach(function(numba) {
  console.log(numba)
});

// Exercise 3 
const numbers = [5, 10, 15, 20];
numbers.forEach(function(number){
  console.log(number * 2);
});


// Exercise 4
const names = ["Harbey", "John", "Sarah"];
names.forEach(function(name){
  console.log(`Hello ${name}`);
});

// Exercise 5
const prices = [1000, 2000, 3000];
prices.forEach(function(price){
  let percentage = price * 10 / 100;
  let newPrice = price + percentage;
  console.log(newPrice);
});

// Exercise 6
const scores = [45, 72, 88, 56, 91];
scores.forEach((score) => console.log(`Score: ${score}`));
