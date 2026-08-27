let mark = (i) =>{
    if (i >= 90) {
        return "Grade: A";
    }
    else if (i >= 80) {
        return "Grade: B";
    }
    else if (i >= 70) {
        return "Grade: C";
    }
    else if (i >= 60) {
        return "Grade: D";
    }
    else {
        return "Grade: F"
    }
}

console.log(mark(85));
