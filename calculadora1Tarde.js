//Calculadora de operações aritméticas

//Escolher operação;
//1 - Somar;
//2 - Subtrair;
//3 - Multiplicação;
//4 - Divisão.



let prompt = require('prompt-sync')(); 

console.log('====Calculadora Aritmetica====')
console.log('\n(1) - somar');
console.log('(2) - subtrair');
console.log('(3) - multiplicar');
console.log('(4) - dividir\n');

let operacao = parseFloat(prompt('Escolha a operacao aritmetica '));
let numero1 = parseFloat(prompt('Digite primeiro nr: '));
let numero2 = parseFloat(prompt('Digite segundo nr: '));
let resultado;

if (isNaN(numero1) || isNaN(numero2)) {
    console.log('ERRO! Digite apenas numeros.')
    } else 
if(operacao===1)
    {
    resultado = (numero1+numero2);
    console.log('O resultado da conta eh: ', resultado);
 }else if(operacao===2)
 {
    resultado = (numero1-numero2);
    console.log('O resultado da conta eh: ', resultado);
 }else if(operacao===3)
{
    resultado = (numero1*numero2);
    console.log('O resultado da conta eh: ', resultado);
}else if(operacao===4)
{
    if (numero2 !== 0) {
        resultado = numero1 / numero2;
        console.log('O resultado da conta eh: ', resultado)
    } else {
        console.log('ERRO! Divisao por zero nao eh permitido.')
    }
}