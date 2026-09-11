let languages = {
    Web: " JS, Html, Css",
    Phone: "React-Native, Flutter, Kotlin, Swift",
    System: " C, C++",
    Modern: {
        Popular: "Python",
        Powerfull: " Rust",
        Fastgrowing: " Go"
    }
};

for (i in languages){
    console.log(i + " : " + languages[i])
}

for (j in languages.Modern){
    console.log(j + " : " + languages.Modern[j]);
    
}