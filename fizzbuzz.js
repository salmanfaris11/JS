let fizzbuzz = (a) => {
    if (a %2== 0) {
        return "Fizz";
    }
    else {
        return "Buzz";
    }
}
for (let i = 1; i <= 10; i++){
    console.log(fizzbuzz(i));
    
}