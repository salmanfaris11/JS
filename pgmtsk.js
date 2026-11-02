let a = 20;

if (a === 0) {
  console.log("Zero");
} else if (a < 0) {
  console.log("Negative");
} else if (a % 3 === 0 && a % 5 === 0) {
  console.log("FizzBuzz");
} else if (a % 3 === 0) {
  console.log("Fizz");
} else if (a % 5 === 0) {
  console.log("Buzz");
} else {
  console.log("Positive");
}