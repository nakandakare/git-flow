const esPrimo = (x) => {
    for(i = 2; i < x; i ++) {
        if(x % 2 === 0) return false;
    }

    return x > 1;
}

console.log(esPrimo(5));