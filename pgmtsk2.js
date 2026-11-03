let x = 1;

while (x <= 50) {
    // Changed && to || so it catches multiples of 8 or 9
    if (x % 8 === 0 || x % 9 === 0) {
        x++;
        continue;
    }

    console.log(x);

    // Moved the break AFTER console.log so 35 gets printed
    if (x === 35) {
        break;
    }

    x++;
}