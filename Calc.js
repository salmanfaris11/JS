let calc = (a,o,b) => {
    if (o == "+"){
        return a + b;
    }
    else if (o == "-"){
        return a - b;
    }
    else if (o == "*"){
        return a * b;
    }
    else if (o == "/"){
        return a / b;
    }
    else {
        return "Invalid";
    }
}

console.log(calc(5, "+", 8));
console.log(calc(5, "-", 8));
console.log(calc(5, "*", 8));
console.log(calc(5, "/", 8));

