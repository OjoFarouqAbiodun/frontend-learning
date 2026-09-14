// Exercise 1
for (let i = 0; i < 4; i++) {
  console.log(i);
}
// Result will print 0,1,2,3

// Exercise 2
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Result will print 1,2,3,4,5

// Exercise 3
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Exercise 4
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
// Result will print 2,4,6,8,10

// Exercise 5
for (let i = 5; i <= 30; i += 5) {
  console.log(i);
}

// Exercise 6
const colors = ["Blue", "Orange", "White", "Black"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
// Result will print "Blue", "Orange", "White", "Black"


// Exercise 7
const names = ["Harbey", "John", "Sarah", "David"];
for(let i = 0; i < names.length; i++ ) {
  console.log(names[i]);
}

// Exercise 8
const numbas = [2, 4, 6, 8, 10];
for(let i = 0; i < 5; i ++) {
  console.log(numbas[i]);
}

// Exercise 9
const numbers = [5, 10, 15, 20];
let total = 0;
for(let i = 0; i < numbers.length; i++) {
  total = total + numbers[i];
}
console.log(total);

// Ezercise 10
const newNumbers = [3, 7, 2, 9, 4];
let newTotal = 0;
for(let i = 0; i < newNumbers.length; i++) {
  newTotal = newTotal + newNumbers[i];
}
console.log(newTotal);