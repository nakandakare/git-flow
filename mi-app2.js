const testLet = () => {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    
    //como el let tiene un scope de bloque, no se puede acceder a el.
    console.log(i);
}

testLet();