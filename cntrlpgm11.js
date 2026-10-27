let j = "Mohammed Salman Faris k 17";

let state = /["0-9"]/.test(j) ? "j includes a number" : "j Not including any number";
console.log(state);