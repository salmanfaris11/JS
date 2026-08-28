 function num(a) {
    if (a %2==0){
        return "Even: "
    }
    else {
        return "Odd:  "
    }
}
for (i =1; i <= 100; i++){
    if (i %3==0) {
        continue;
    }
    console.log(num(i), i);
    
}
