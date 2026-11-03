let num = 0;

while ( num <= 500 ) {

if(num %50 == 0) {
num++;
continue;
}
else if(num === 448){
break;
}

console.log(num);
num++;
}

