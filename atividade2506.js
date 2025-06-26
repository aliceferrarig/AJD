//push:

//let produtos = ['Placa Mãe', 'Processador', 'Memória RAM', 'SSD'];
//produtos.push('Placa de Vídeo', 'Fonte');
//console.log("Após push():", produtos);

//pop:

//let produtos = ['Placa Mãe', 'Processador', 'Memória RAM', 'SSD'];
//let ultimoItem = produtos.pop(); 
//console.log("Após pop():", produtos);
//console.log("Item removido:", ultimoItem);

//shift

//let produtos = ['Placa Mãe', 'Processador', 'Memória RAM', 'SSD'];
//let primeiroItem = produtos.shift(); 
//console.log("Após shift():", produtos);
//console.log("Item removido:", primeiroItem);

//unshift

//let produtos = ['Placa Mãe', 'Processador', 'Memória RAM', 'SSD'];
//produtos.unshift('Gabinete', 'Cooler');
//console.log("Após unshift():", produtos);

//indexOf

let produtos = ['Placa Mãe', 'Processador', 'Memória RAM', 'SSD'];
let indiceRam = produtos.indexOf('Memória RAM'); 
let indiceHd = produtos.indexOf('HD');
console.log("Índice da RAM:", indiceRam);
console.log("Índice do HD:", indiceHd); 

//includes

//let produtos = ['Placa Mãe', 'Processador', 'Memória RAM', 'SSD'];
//let temSsd = produtos.includes('SSD'); 
//let temTeclado = produtos.includes('Teclado');
//console.log("Tem Teclado?", temTeclado); 

//slice

//let produtos = ['Placa Mãe', 'Processador', 'Memória RAM', 'SSD', 'Placa de Vídeo'];
//let core = produtos.slice(1, 4); 
//let video = produtos.slice(4); 
//console.log("Core (slice):", core); 
//console.log("Vídeo (slice):", video); 
//console.log("Array Original (não mudou):", produtos); 

//splice

//let produtos = ['Placa Mãe', 'Processador', 'Memória RAM', 'SSD'];

//produtos.splice(2, 1);
//console.log("Após remover RAM:", produtos); 

//produtos.splice(2, 0, 'HD');
//console.log("Após adicionar HD:", produtos);


//produtos.splice(1, 1, 'CPU Rápida');
//console.log("Após substituir:", produtos); 

//forEach

//let produtos = ['Placa Mãe', 'Processador', 'Memória RAM'];
//console.log("Listando com forEach:");
//produtos.forEach(function(item, indice) {
  
//console.log("  Índice " + indice + ": " + item);

//map

//let precos = [100, 200, 50];
//let precosComJuros = precos.map(function(preco) {
  
  //return preco * 1.10;
//});
//console.log("Preços Originais:", precos);
//console.log("Preços com Juros (map):", precosComJuros);

//filter

//let numeros = [10, 25, 5, 30, 15, 40];
//let numerosMaioresQue20 = numeros.filter(function(numero) { 
  //return numero > 20;
//});
//console.log("Números Originais:", numeros);
//console.log("Maiores que 20 (filter):", numerosMaioresQue20);

//join

//let listaDeCompras = ['Arroz', 'Feijão', 'Macarrão'];
//let textoLista = listaDeCompras.join(', ');
let textoHtml = listaDeCompras.join('</li><li>');
console.log("Lista como texto:", textoLista);
console.log("<ul><li>" + textoHtml + "</li></ul>");















