let prompt = require('prompt-sync')();
let numero = parseFloat(prompt('Digite o número da tabuada desejada: '));
let senha = prompt('Digite a senha: ');

// Verifica a senha antes de gerar a tabuada
    if(senha === 'Senai123'){
        console.log('Escolha a tabuada a ser realizada:', numero)
    
    console.log('\n Tabuada de Somar')

    //laço de repetição tabuada adição
    for (let i = 1; i <= 10; i++) {
        console.log(numero + ' + ' + i + ' = ' + (numero + i));
    }
    console.log('\n Tabuada de Multiplicar')

    //laço de repetição tabuada multiplicação
    for (let i = 1; i <= 10; i++) {
        console.log(numero + ' * ' + i + ' = ' + (numero * i));
    }
    console.log('\n Tabuada de Subtrair')

    //laço de repetição tabuada adição
    for (let i = 1; i <= 10; i++) {
        console.log(numero + ' - ' + i + ' = ' + (numero - i));
    }
    console.log('\n Tabuada de Divisão')

    //laço de repetição tabuada divisão
    for (let i = 1; i <= 10; i++) {
        console.log(numero + ' / ' + i + ' = ' + Math.round(numero / i));
    }
}else{ 
        console.log('Senha inválida'); 
}