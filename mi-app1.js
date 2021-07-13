const testVar = () => {
    var nombre = 'Kevin';
    for (var i = 0; i < 5; i++) {
        var nombre = 'Kevin Nakandakare';
        console.log(i);
    }
    
    //Como el var tiene un scope de funcion, se puede acceder a el.
    console.log(i);
    //Cuando utilizamos "var" se sobreescribe de Kevin a Kevin Nakandakare.
    console.log(nombre);
}

testVar();