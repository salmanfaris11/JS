let product = {
    Name: "S26 Ultra",
    Category: "Phone",
    Price: 140000
}

let stock = (product) => {
    console.log("Product: " + product.Name);
    if (product.Price > 100000) {
        return "Expensive";
    } 
    else if (product.Price < 100000) {
        return "Mid Range Value";
    } 
    else {
        return "Affordable";
    }  
};

console.log(stock(product));
