let details = (a,b,c) => {
    console.log("Name: " +a);
     console.log("Age: " +b);

     let grade = c;

     if (c >= 90) {
        grade = "A";
    }
    else if (c >= 80) {
        grade = "B";
    }
    else if (c >= 70) {
        grade = "C";
    }
    else if (c >= 60) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    return  "Grade:" + grade;
}

console.log(details("Salman",23,80));
