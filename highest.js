const p1 = function a (i,j,k) {
    if (i > j && i > k){
        return i;
    }
    else if (j > i && j > k){
        return j;
    }
    else if (k > i && k > j){
        return k;
    }
}

console.log(p1(15,40,25));
