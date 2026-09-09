// Exercise 1
const greet = function (name) {
  return `Hello, ${name}!`;
}
console.log(greet("Harbey"));

// Exercise 2
const add = (a, b) => a + b;
console.log(add(5, 4));

// Exercise 3
const multiply = (a, b) => a * b;
console.log(multiply(4, 5), multiply(5, 7));

//Exercise 4
const isAdult = (age) => {
    if(age >= 18){
        return "Adult";
    } else if (age < 18) {
        return "Minor";
    };
}
console.log(isAdult(17), isAdult(18), isAdult(25));

//Exercise 5 
const calculateTotal = (price, quantity) => (price * quantity);
console.log(calculateTotal(2500, 4));