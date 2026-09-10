// Exercise 1
function greet(name) {
  return `Hello, ${name}!`;
}
function runFunction(name, callback) {
    return callback(name);
}
console.log(runFunction("Harbey", greet));

//Exercise 2
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function calculate(a, b, operation) {
    return operation(a, b);
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));

// Exercise 3
const sayGoodbye = (name) => `Goodbye, ${name}!`;
function useGreeting(name, callback) {
    return callback(name);
}
console.log(useGreeting("Harbey", sayGoodbye));

// Exercise 4
const welcomeUser = (name) => `Welcome, ${name}! Good to have you here.`;
const createMessage = (name, callback) => callback(name);
console.log(createMessage("Harbey", welcomeUser));

// Exercise 5
const makeUppercase = (name) => name.toUpperCase();
const countLetters = (name) => `The name ${name} has ${name.length} letters.`; 
function processName(name, callback) {
    return callback(name);
}
console.log(processName("Harbey", makeUppercase));
console.log(processName("Harbey", countLetters));

