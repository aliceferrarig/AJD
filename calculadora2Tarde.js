let prompt = require('prompt-sync')();

console.log('====Calculadora Aritmetica====')
console.log('(1) - somar');
console.log('(2) - subtrair');
console.log('(3) - multiplicar');
console.log('(4) - dividir');



switch (operacao) {
    case 1:
        resultado = numero1 + numero2;
        console.log('O resultado da soma eh: ', resultado);
        break;
    case 2:
        resultado = numero1 - numero2;
        console.log('O resultado da subtracao eh: ', resultado);
        break;
    case 3:
        resultado = numero1 * numero2;
        console.log('O resultado da multiplicacao eh: ', resultado);
        break;
    case 4:
        resultado = numero1 / numero2;
        console.log('O resultado da divisao eh: ', resultado);
}