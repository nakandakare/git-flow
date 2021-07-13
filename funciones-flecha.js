const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (numerador, denominador) => {
    if (denominador === 0 || isNaN(denominador) || isNaN(numerador)) return 'Numero invalido';

    return numerador / denominator;
};

console.log('suma:', sumar(2, 4));
console.log('resta:', restar(5, 2));
console.log('multiplicación:', multiplicar(5, 10));
console.log('división:', dividir(10, 2));